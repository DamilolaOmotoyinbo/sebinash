import React from "react";
import Image from "next/image";
import { table, armchair, chair, bed } from "@/assests/assests";

const ProductionLine: React.FC = () => {
  return (
    <div className="pl-4 pb-2 pt-4">
      <p className="font-bold  text-lg">Production line</p>
      <div className="mt-2 rounded-md overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="flex gap-4 max-w-[802px] min-w-max">
          <div className="flex p-4 gap-2 max-w-[222px] h-[76px] bg-white rounded-md">
            <Image className="ml-2 rounded-lg" src={table} alt="table" />
            <div className="flexcol text-xs">
              <p className="font-bold text-secondary text-gray-700">
                Cascade center table
              </p>
              <p className="text-neutral-400 pt-2">5 units</p>
            </div>
          </div>
          <div className="flex p-4 gap-2 w-[222px] h-[76px] flex-shrink-0 bg-white rounded-md">
            <Image className="ml-2 rounded-lg" src={chair} alt="chair" />
            <div className="flexcol text-xs">
              <p className="font-bold text-secondary text-gray-700">
                Slate armchair
              </p>
              <p className="text-neutral-400 pt-2">1020units</p>
            </div>
          </div>
          <div className="flex p-4 gap-2 w-[222px] h-[76px] flex-shrink-0 bg-white rounded-md">
            <Image className="ml-2 rounded-lg" src={bed} alt="bed" />
            <div className="flexcol text-xs">
              <p className="font-bold text-secondary text-gray-700">
                Zest upholstered bed
              </p>
              <p className="text-neutral-400 pt-2">40 units</p>
            </div>
          </div>
          <div className="flex p-4 gap-2 w-[222px] h-[76px] flex-shrink-0 bg-white rounded-md">
            <Image className="ml-2 rounded-lg" src={armchair} alt="chair" />
            <div className="flexcol text-xs">
              <p className="font-bold text-gray-700">Tulipan armchair</p>
              <p className="text-neutral-400 pt-2">500 units</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProductionLine;
