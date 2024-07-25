import React from "react";
import Image from "next/image";
import {
  logo,
  dash,
  line,
  orders,
  fabrics,
  inventory,
  supply,
  settings,
  tutorial,
  message,
  rightarrow,
  user,
  leftarrow,
} from "@/assests/assests";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-white gap-[43px] h-[861px] w-[252px] p-[32px] shadow-md">
      <div className="mb-8 flex ">
        <div className="flex gap-2 ">
          <Image className="ml-2" src={logo} alt="logo" />
          <h1 className="text-xl font-bold cursor-pointer">Sebinash</h1>
        </div>

        <div className="ml-auto flex items-center justify-center w-6 h-8 bg-gray-200 rounded-tl-full rounded-bl-full cursor-pointer">
          <Image src={leftarrow} alt="leftarrow" />
        </div>
      </div>
      <div className="pb-4">
        <button className="flex rounded-lg w-[188px] h-[48px] bg-black gap-2 items-center mb-6 cursor-pointer">
          <Image className="ml-4" src={dash} alt="dash" />
          <p className="text-white text-sm">Dashboard</p>
        </button>

        <div className="flex gap-2 hover:bg-gray-200 hover:border-gray-400 hover:border rounded items-center mb-6 cursor-pointer border border-transparent transition-all border-height-48">
          <Image className="ml-2" src={line} alt="line" />
          <p className="text-neutral-400 text-sm">Production line</p>
        </div>

        <div className="flex gap-2 hover:bg-gray-200 hover:border-gray-400 hover:border rounded items-center mb-6 cursor-pointer border border-transparent transition-all border-height-48">
          <Image className="ml-2" src={orders} alt="line" />
          <p className="text-neutral-400 text-sm">Orders</p>
        </div>

        <div className="flex gap-2 hover:bg-gray-200 hover:border-gray-400 hover:border rounded items-center mb-6 cursor-pointer border border-transparent transition-all border-height-48">
          <Image className="ml-2" src={fabrics} alt="line" />
          <p className="text-neutral-400 text-sm">Fabrics</p>
        </div>

        <div className="flex gap-2 hover:bg-gray-200 hover:border-gray-400 hover:border rounded items-center mb-6 cursor-pointer border border-transparent transition-all border-height-48">
          <Image className="ml-2" src={inventory} alt="line" />
          <p className="text-neutral-400 text-sm">Inventory</p>
        </div>

        <div className="flex gap-2 hover:bg-gray-200 hover:border-gray-400 hover:border rounded items-center mb-6 cursor-pointer border border-transparent transition-all border-height-48">
          <Image className="ml-2" src={supply} alt="line" />
          <p className="text-neutral-400 text-sm">Supply</p>
        </div>
      </div>
      <hr />
      <div className="mt-6">
        <div className="flex gap-2 hover:bg-gray-200 hover:border-gray-400 hover:border rounded items-center mb-6 cursor-pointer border border-transparent transition-all border-height-48">
          <Image className="ml-2" src={settings} alt="settings" />
          <p className="text-neutral-400 text-sm">Settings</p>
        </div>

        <div className="flex gap-2 hover:bg-gray-200 hover:border-gray-400 hover:border rounded items-center mb-6 cursor-pointer border border-transparent transition-all border-height-48">
          <Image className="ml-2" src={tutorial} alt="tutorial" />
          <p className="text-neutral-400 text-sm">Tutorial</p>
        </div>
      </div>

      <div className="border w-[188px] h-[136px] mt-14 mb-9 bg-yellow-50 rounded-md cursor-pointer">
        <p className="font-bold pl-4 mt-3 mb-3">Messages</p>
        <div>
          <Image className="ml-4" src={message} alt="line" />
          <button className="bg-yellow-400 w-[147px] justify-center rounded-md h-[32px] mt-2 mb-2 ml-4 items-center flex">
            <p className="text-white text-sm">Open messages</p>
            <Image className="ml-2" src={rightarrow} alt="rightarrow" />
          </button>
        </div>
      </div>

      <div className="flex border gap-4 h-[60px] mt-16 bg-gray-50 rounded-md cursor-pointer">
      <div className="bg-gray-200 rounded-full m-2 p-4">
            <Image src={user} alt="user" />
          </div>
        <div className="flex-col text-xs font-bold mt-2 mb-4">
          <p className="font-bold ">Ajani Abel-Cain</p>
          <p className="text-teal-900 bg-teal-50 rounded-lg text-xs text-center w-[54px] h-[24px]">
            online
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
