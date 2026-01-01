'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightLeft } from 'lucide-react';
import { calculateOfferTotal, OfferMap } from '@/lib/calculator';
import { valueItems, values, ItemKey } from '@/lib/values';

type Side = 'yours' | 'theirs';

function ItemMenu({ buttonText, onSelect }: { buttonText: string; onSelect: (key: ItemKey) => void }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 w-full max-w-[200px]">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-black text-white rounded shrink-0 hover:bg-black/80 transition-colors w-full max-w-[150px]"
      >
        {buttonText}
      </button>

      {open && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mt-4 p-4 bg-gray-100 rounded shadow-sm w-full min-w-[200px]"
        >
          <p className="mb-3 text-black text-sm">Select an item:</p>
          <div className="grid grid-cols-2 gap-3 max-h-72 overflow-y-auto pr-1">
            {valueItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  onSelect(item.key);
                  setOpen(false);
                }}
                className="flex flex-col items-center bg-white rounded-lg shadow-sm p-2 hover:shadow-md transition"
              >
                <img src={`/${item.image}`} alt={item.name} className="w-20 h-20 object-contain" />
                <div className="mt-2 text-sm font-medium text-black text-center leading-tight">{item.name}</div>
                <div className="text-xs text-gray-500">Value: {item.value}</div>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

function OfferPanel({
  title,
  offer,
  onRemove,
  total,
}: {
  title: string;
  offer: OfferMap;
  onRemove: (key: ItemKey) => void;
  total: number;
}) {
  const entries = Object.entries(offer).filter(([, qty]) => (qty ?? 0) > 0);

  return (
    <div
      className="rounded-xl shadow-sm mb-6 bg-gray-100 min-w-[320px] md:min-w-[450px] max-w-[550px] min-h-[500px] shrink-0"
      style={{ boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)' }}
    >
      <h1 className="flex items-center text-2xl font-semibold mb-4 text-black p-4">
        {title}
        <span className="text-xl ml-auto">Value: {total}</span>
      </h1>
      <div className="px-4 pb-6">
        {entries.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center text-black/40 mt-8">
            <img src="/gpoitems/pcc.png" className="w-16 h-16 opacity-30" alt="placeholder" />
            <p className="mt-4">Add items to see their value here</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {entries.map(([key, qty]) => {
              const item = values[key as ItemKey];
              return (
                <button
                  key={key}
                  onClick={() => onRemove(key as ItemKey)}
                  className="group flex flex-col items-center gap-2 bg-white rounded-lg shadow-sm p-3 hover:shadow-md transition"
                  title="Click to remove one"
                >
                  <img src={`/${item.image}`} alt={item.name} className="w-24 h-24 object-contain" />
                  <div className="text-black font-semibold text-center">{item.name}</div>
                  <div className="text-sm text-gray-600">Qty: {qty}</div>
                  <div className="text-sm text-gray-500 group-hover:text-red-600">Click to remove one</div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CalculatorPage() {
  const [yourOffer, setYourOffer] = useState<OfferMap>({});
  const [theirOffer, setTheirOffer] = useState<OfferMap>({});

  const yourTotal = calculateOfferTotal(yourOffer);
  const theirTotal = calculateOfferTotal(theirOffer);
  
  const diff = theirTotal - yourTotal;

  const updateOffer = (side: Side, key: ItemKey, delta: 1 | -1) => {
    const setter = side === 'yours' ? setYourOffer : setTheirOffer;
    setter((prev) => {
      const next = { ...prev };
      const current = next[key] ?? 0;
      const updated = current + delta;
      if (updated > 0) {
        next[key] = updated;
      } else {
        delete next[key];
      }
      return next;
    });
  };

  const wlLabel = diff === 0 ? 'Even' : diff > 0 ? `+${diff}` : `${diff}`;

  return (
    <div className="min-h-screen pt-24 bg-white">
      <motion.div
        className="max-w-6xl mx-auto px-4"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className="text-4xl font-bold text-center mb-8 font-sans text-black">Value Calculator</h1>

        <div className="mt-8 flex flex-wrap md:flex-nowrap items-start gap-4 justify-center w-full">
          <ItemMenu
            buttonText="Add Item"
            onSelect={(key) => updateOffer('yours', key, 1)}
          />

          <OfferPanel
            title="Your Offer"
            offer={yourOffer}
            onRemove={(key) => updateOffer('yours', key, -1)}
            total={yourTotal}
          />

          <ArrowRightLeft className="w-8 h-8 mt-10 text-gray-900 shrink-0" />

          <OfferPanel
            title="Their Offer"
            offer={theirOffer}
            onRemove={(key) => updateOffer('theirs', key, -1)}
            total={theirTotal}
          />

          <ItemMenu
            buttonText="Add Item"
            onSelect={(key) => updateOffer('theirs', key, 1)}
          />
        </div>

        <h2 className="text-2xl font-bold text-center mb-8 font-sans text-black mt-8">
          W/L: <span>{wlLabel}</span>
        </h2>
      </motion.div>
    </div>
  );
}
  


