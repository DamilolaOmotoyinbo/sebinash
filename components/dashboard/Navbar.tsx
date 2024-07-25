import React from "react";
import Image from "next/image";
import { search, eicon, fold, bell, signout, collapse } from "@/assests/assests";

const Navbar: React.FC = () => {
  return (
    <div>
      <div className="h-[74px] ml-4 flex bg-white justify-between items-center">
        <div className="border gap-6 text-neutral-400 rounded-lg bg-slate-50 mt-3 flex ml-4 items-center w-[408px] h-[48px] cursor-pointer">
          <Image className="ml-5 " src={search} alt="search" />
          <p>Search</p>
        </div>
        <div className="flex gap-8 items-center pr-2 cursor-pointer">
          <div className="bg-gray-200 rounded-full p-2">
            <Image src={eicon} alt="eicon" />
          </div>
          <div className="bg-gray-200 rounded-full p-2">
            <Image src={fold} alt="fold" />
          </div>
          <div className="bg-gray-200 rounded-full p-2">
            <Image src={bell} alt="bell" />
          </div>
          <div className="bg-red-100 rounded-full p-2">
            <Image className="" src={signout} alt="signout" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-0.5">
        <p className="pl-4 font-bold">Sales trend</p>
        <div className="flex items-center gap-2 rounded-t-md w-auto h-6 bg-slate-400 px-2 cursor-pointer">
          <Image src={collapse} alt="collapse" />
          <p className="font-bold text-xs">collapse</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
