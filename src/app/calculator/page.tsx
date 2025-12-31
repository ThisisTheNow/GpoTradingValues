'use client';
import { useState } from 'react'
import { CalulateValue } from "@/lib/calculator";
import { motion } from "framer-motion";
import { Shuffle, ArrowRightLeft} from 'lucide-react'

function OpenMenuFunction({ buttonText, MenuText }: { buttonText: string; MenuText: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="p-6">
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
          className="mt-4 p-4 bg-gray-100 rounded"
        >
          {MenuText}
        </motion.div>
      )}
    </div>
  )
}



export default function CalculatorPage() {
  
  return (
    
    <div className="min-h-screen pt-24 bg-white ">
      <motion.div className="max-w-4xl mx-auto px-4" 
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}>
        <h1 className="text-4xl font-bold text-center mb-8 font-sans text-black">Value Calculator</h1>
        
        <div className="mt-8 flex items-center gap-4 justify-center w-full ">
          <OpenMenuFunction buttonText="Add Item" MenuText={
                  <div className="mb-2 text-black min-w-[150px] min-h-[120px] rounded">
                    <p className="mb-2 text-black ">Select an item to add to your offer:</p>
                  </div>} /> 
          <div className=" rounded-xl shadow-sm mb-6 bg-gray-100 min-w-[450px] max-w-[550px] min-h-[500px] justify-center shrink-0 "style={{ boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)' }}>
          <h1 className="flex items-center text-2xl font-semibold mb-4 text-black p-4">Your Offer <span className="text-xl ml-auto">Value: {CalulateValue("pcc", 2)}</span></h1>
              <div className="mb-4 " id = "offerdiv">
              <p className="text-center text-black/40 mt-4">Add items to see their value here</p>
              </div>
          </div>
          <ArrowRightLeft className="w-8 h-8 mb-4 mx-auto text-gray-900 shrink-0" />
          <div className="rounded-xl shadow-sm mb-6 bg-gray-100  min-w-[450px] max-w-[550px] min-h-[500px] justify-center shrink-0 " style={{ boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)' }}>
          <h1 className="flex items-center text-2xl font-semibold mb-4 text-black p-4">Their Offer <span className="text-xl ml-auto">Value: {CalulateValue("pcc", 2)}</span></h1>
              <div className="mb-4 " id = "theirofferdiv">
              <img src="gpoitems/pcc.png" className="mx-auto mt-20 opacity-30 w-16 h-16`" />
              <p className="text-center text-black/40 mt-4">Add items to see their value here</p>
              </div>
          </div>
          <OpenMenuFunction buttonText="Add Item" MenuText={
                  <div className="mb-2 text-black min-w-[150px] min-h-[120px] rounded">
                    <p className="mb-2 text-black ">Select an item to add to your offer:</p>
                  </div>} /> 
        </div>
        <h2 className="text-2xl font-bold text-center mb-8 font-sans text-black mt-8">W/L: <span>{CalulateValue("pcc", 2)}</span></h2>
      </motion.div>
    </div>
    
  








  );
}

