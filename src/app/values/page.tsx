'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import { valueItems, ItemKey, values } from '@/lib/values';

export default function ValuesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<ItemKey | null>(null);

  // Filter items based on search term (name or abbreviation)
  const filteredItems = valueItems.filter((item) => {
    const search = searchTerm.toLowerCase();
    return (
      item.name.toLowerCase().includes(search) ||
      item.abbreviation.toLowerCase().includes(search)
    );
  });

  const selectedItemData = selectedItem ? values[selectedItem] : null;

  return (
    <div className="min-h-screen pt-24 bg-white">
      <motion.div
        className="max-w-7xl mx-auto px-4"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className="text-4xl font-bold text-center mb-8 font-sans text-black">Trading Values</h1>

        {/* Where the search bar is */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by item name or abbreviation..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none text-black"
            />
          </div>
        </div>

        {/* How the items are displayed */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredItems.map((item) => (
            <motion.button
              key={item.key}
              onClick={() => setSelectedItem(item.key)}
              className="flex flex-col items-center bg-gray-100 rounded-xl shadow-sm p-4 hover:shadow-lg transition-all hover:scale-105"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={`/${item.catalogImage || item.image}`}
                alt={item.name}
                className="w-32 h-32 object-contain mb-3"
              />
              <div className="text-center">
                <div className="text-lg font-semibold text-black mb-1">{item.name}</div>
                <div className="text-sm text-gray-500 mb-2">({item.abbreviation})</div>
                <div className="text-xl font-bold text-black">Value: {item.value}</div>
              </div>
            </motion.button>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center text-gray-400 mt-12">
            <p className="text-xl">No items found matching "{searchTerm}"</p>
          </div>
        )}
      </motion.div>

      {}
      {selectedItem && selectedItemData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <img
                src={`/${selectedItemData.catalogImage || selectedItemData.image}`}
                alt={selectedItemData.name}
                className="w-48 h-48 object-contain"
              />
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-black mb-2">{selectedItemData.name}</h2>
                <p className="text-lg text-gray-500 mb-4">
                  Abbreviation: <span className="font-semibold">{selectedItemData.abbreviation}</span>
                </p>
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <p className="text-2xl font-bold text-black">Value: {selectedItemData.value}</p>
                </div>
                <div className="text-gray-700 leading-relaxed">
                  <p className="font-semibold mb-2">Description:</p>
                  <p>{selectedItemData.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

