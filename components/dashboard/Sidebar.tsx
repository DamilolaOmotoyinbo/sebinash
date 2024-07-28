"use client";
import React, { useState } from "react";
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
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`bg-white h-[861px] shadow-md transition-all duration-300 ${
        isOpen ? " p-[32px]" : "w-[80px] p-[16px]"
      }`}
    >
      <div className="mb-8 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image src={logo} alt="logo" />
          {isOpen && (
            <h1 className="text-xl font-bold cursor-pointer">Sebinash</h1>
          )}
        </div>

        <div
          className="ml-auto flex items-center justify-center w-6 h-8 bg-gray-200 rounded-tl-full rounded-bl-full cursor-pointer"
          onClick={toggleSidebar}
        >
          <Image src={isOpen ? leftarrow : rightarrow} alt="toggle arrow" />
        </div>
      </div>
      <div className="pb-4">
        <button className="flex rounded-lg w-full h-[48px] bg-black gap-2 items-center mb-6 cursor-pointer">
          <Image className="ml-4" src={dash} alt="dash" />
          {isOpen && <p className="text-white text-sm">Dashboard</p>}
        </button>

        <div className="flex gap-2 items-center hover:bg-gray-200 rounded mb-5 cursor-pointer p-2">
          <Image className="ml-2" src={line} alt="line" />
          {isOpen && (
            <p className="text-neutral-400 text-sm">Production line</p>
          )}
        </div>

        <div className="flex gap-2 items-center hover:bg-gray-200 rounded mb-5 cursor-pointer p-2">
          <Image className="ml-2" src={orders} alt="orders" />
          {isOpen && <p className="text-neutral-400 text-sm">Orders</p>}
        </div>

        <div className="flex gap-2 items-center hover:bg-gray-200 rounded mb-5 cursor-pointer p-2">
          <Image className="ml-2" src={fabrics} alt="fabrics" />
          {isOpen && <p className="text-neutral-400 text-sm">Fabrics</p>}
        </div>

        <div className="flex gap-2 items-center hover:bg-gray-200 rounded mb-5 cursor-pointer p-2">
          <Image className="ml-2" src={inventory} alt="inventory" />
          {isOpen && <p className="text-neutral-400 text-sm">Inventory</p>}
        </div>

        <div className="flex gap-2 items-center hover:bg-gray-200 rounded mb-5 cursor-pointer p-2">
          <Image className="ml-2" src={supply} alt="supply" />
          {isOpen && <p className="text-neutral-400 text-sm">Supply</p>}
        </div>
      </div>
      <hr />
      <div className="mt-6">
        <div className="flex gap-2 items-center hover:bg-gray-200 rounded mb-6 cursor-pointer p-2">
          <Image className="ml-2" src={settings} alt="settings" />
          {isOpen && <p className="text-neutral-400 text-sm">Settings</p>}
        </div>

        <div className="flex gap-2 items-center hover:bg-gray-200 rounded mb-6 cursor-pointer p-2">
          <Image className="ml-2" src={tutorial} alt="tutorial" />
          {isOpen && <p className="text-neutral-400 text-sm">Tutorial</p>}
        </div>
      </div>

      <div className="border w-[188px] h-[136px]  bg-yellow-50 rounded-md cursor-pointer">
        <p className="font-bold pl-4 mt-3 mb-3">Messages</p>
        <div>
          <Image className="ml-4" src={message} alt="line" />
          <button className="bg-yellow-400 w-[147px] justify-center rounded-md h-[32px] mt-2 mb-2 ml-4 items-center flex">
            <p className="text-white text-sm">Open messages</p>
            <Image className="ml-2" src={rightarrow} alt="rightarrow" />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-8 bg-gray-50 rounded-md cursor-pointer p-2">
        <div className="bg-gray-200 rounded-full p-4">
          <Image src={user} alt="user" />
        </div>

        <div className="flex flex-col text-xs font-bold">
          <p>Ajani Abel-Cain</p>
          <p className="text-teal-900 bg-teal-50 rounded-lg text-center w-[54px] h-[24px]">
            online
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;


{/* <p className={`text-teal-900 bg-teal-50 rounded-lg ${isOpen ? 'Block':"hidden"} text-center w-[54px] h-[24px]`}></p> */}


// {isOpen ? <img src=“big screen”/> : <img src =“small”/> }
