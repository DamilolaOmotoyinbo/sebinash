import React from "react";
import Image from "next/image";
import {
  search,
  eicon,
  fold,
  bell,
  signout,
  collapse,
} from "@/assests/assests";

const Navbar: React.FC = () => {
  return (
    <>
    
      <div className=" w-full top-0 sticky z-50 pl-4">
      <div className=" mx-auto flex justify-between items-between h-[82px]  bg-white">
        <div className="border gap-6 text-neutral-400 rounded-lg bg-slate-50 mt-5 flex ml-4 items-center w-[408px] h-[48px] cursor-pointer">
          <div className="flex items-center gap-4 group">
            <div className="ml-5 group-hover:filter group-hover:grayscale group-hover:invert">
              <Image src={search} alt="search" />
            </div>
            <p className="group-hover:text-black text-xs">Search</p>
          </div>
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

      {/* <div className="flex justify-between items-center mt-0.5">
        <p className="pl-4 font-bold">Sales trend</p>
        <div className="flex items-center gap-2 rounded-t-md w-auto h-6 bg-slate-400 px-2 cursor-pointer">
          <Image src={collapse} alt="collapse" />
          <p className="font-bold text-xs">collapse</p>
        </div>
      </div> */}
    </div>
  </>
    
  );
};

export default Navbar;
