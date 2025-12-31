import { CalulateValue } from "@/lib/calculator";
import { div } from "framer-motion/m";
import { Shuffle, ArrowRightLeft} from 'lucide-react'
export default function CalculatorPage() {
  return (
    <div className="min-h-screen pt-24 bg-white ">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 font-sans text-black">Value Calculator</h1>
        <span className="text-xl">Total Value: {CalulateValue("pcc", 2)}</span>
        <div className="mt-8 flex items-center gap-4 justify-center w-full">
          <div className=" rounded-xl shadow-sm mb-6 bg-gray-100 w-[600px] min-h-[500px] justify-center shrink-0 "style={{ boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)' }}>
          <h1 className="text-2xl font-semibold mb-4 text-black p-4">Your Offer</h1>
              <div className="mb-4 " id = "offerdiv">
              </div>
          </div>
          <ArrowRightLeft className="w-8 h-8 mb-4 mx-auto text-gray-900 shrink-0" />
          <div className="rounded-xl shadow-sm mb-6 bg-gray-100 w-[600px] min-h-[500px] justify-center shrink-0 " style={{ boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.1)' }}>
            <h1 className="text-2xl font-semibold mb-4 text-black p-4">Their offer</h1>
              <div className="mb-4 " id = "theirofferdiv">
              </div>
          
          </div>
        </div>
      </div>
    </div>
    
  








  );
}

