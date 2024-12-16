"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import {
  logo,
  dash,
  line,
  orders,
  fabrics,
  inventory,
  supply,
  side,
  settings,
  tutorial,
  message,
  rightarrow,
  user,
  leftarrow,
  image1,
  image2,
  image3,
  image4,
  three,
} from "@/assests/assests";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`bg-white h-[861px] shadow-md transition-all duration-300 ${
        isOpen ? "w-64 p-8" : "w-24 px-4 py-8"
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
          className={`ml-auto flex items-center justify-center w-6 h-8 bg-gray-200 relative ${
            isOpen ? "-right-8" : "-right-4"
          } rounded-tl-full rounded-bl-full cursor-pointer`}
          onClick={toggleSidebar}
        >
          <Image src={isOpen ? leftarrow : side} alt="toggle arrow" />
        </div>
      </div>
      <div className="pb-4">
        <button className="flex rounded-lg w-full h-[48px] bg-black gap-2 items-center mb-6 cursor-pointer">
          <Image className="ml-4" src={dash} alt="dash" />
          {isOpen && <p className="text-white text-sm">Dashboard</p>}
        </button>

        <div className="flex gap-2 items-center hover:bg-gray-200 h-[48px] rounded-lg mb-5 cursor-pointer p-2">
          <Image className="ml-2" src={line} alt="line" />
          {isOpen && (
            <p className="text-neutral-400 text-sm">Production line</p>
          )}
        </div>

        <div className="flex gap-2 items-center hover:bg-gray-200 h-[48px] rounded-lg mb-5 cursor-pointer p-2">
          <Image className="ml-2" src={orders} alt="orders" />
          {isOpen && <p className="text-neutral-400 text-sm">Orders</p>}
        </div>

        <div className="flex gap-2 items-center hover:bg-gray-200 h-[48px] rounded-lg mb-5 cursor-pointer p-2">
          <Image className="ml-2" src={fabrics} alt="fabrics" />
          {isOpen && <p className="text-neutral-400 text-sm">Fabrics</p>}
        </div>

        <div className="flex gap-2 items-center hover:bg-gray-200 h-[48px] rounded-lg mb-5 cursor-pointer p-2">
          <Image className="ml-2" src={inventory} alt="inventory" />
          {isOpen && <p className="text-neutral-400 text-sm">Inventory</p>}
        </div>

        <div className="flex gap-2 items-center hover:bg-gray-200 h-[48px] rounded-lg mb-5 cursor-pointer p-2">
          <Image className="ml-2" src={supply} alt="supply" />
          {isOpen && <p className="text-neutral-400 text-sm">Supply</p>}
        </div>
      </div>
      <hr />
      <div className="mt-6">
        <div className="flex gap-2 items-center hover:bg-gray-200 h-[48px] rounded-lg mb-5 cursor-pointer p-2">
          <Image className="ml-2" src={settings} alt="settings" />
          {isOpen && <p className="text-neutral-400 text-sm">Settings</p>}
        </div>

        <div className="flex gap-2 items-center hover:bg-gray-200 h-[48px] rounded-lg mb-5 cursor-pointer p-2">
          <Image className="ml-2" src={tutorial} alt="tutorial" />
          {isOpen && <p className="text-neutral-400 text-sm">Tutorial</p>}
        </div>
      </div>

      <div className="flex flex-col gap-3 border w-full py-3 px-4 h-fit bg-yellow-50 rounded-md cursor-pointer">
        {isOpen && <p className="font-bold">Messages</p>}

        <div
          className={`flex items-center justify-between ${
            !isOpen && "flex-col gap-2"
          }`}
        >
          <div className="w-8 h-8 relative">
            <Image className="rounded-full" src={image1} alt="image1" />
            <div className="bottom-0 right-0 absolute"><Image className="" src={three} alt="three" /></div>
          </div>
          <div className="w-8 h-8 relative">
            <Image className="rounded-full" src={image2} alt="image2" />
            <div className="bottom-0 right-0 absolute"><Image className="" src={three} alt="three" /></div>
          </div>

          {isOpen && (
            <div className="w-8 h-8 relative">
              <Image className="rounded-full" src={image3} alt="image3" />
              <div className="bottom-0 right-0 absolute"><Image className="" src={three} alt="three" /></div>
            </div>
          )}
          {isOpen && (
            <div className="w-8 h-8 relative">
              <Image className="rounded-full" src={image4} alt="image4" />
              <div className="bottom-0 right-0 absolute"><Image className="" src={three} alt="three" /></div>
            </div>
          )}
        </div>
        <button className="bg-yellow-400 justify-center text-white rounded-md h-8 gap-2 items-center flex">
          {isOpen && <p className=" text-xs">Open messages</p>}
          <MdKeyboardDoubleArrowRight size={16} />
        </button>
      </div>
      <div className="flex items-center gap-2 mt-8 bg-gray-50 rounded-md cursor-pointer py-2 px-3">
        <div className="bg-gray-200 rounded-full grid place-items-center w-10 h-10">
          {/* <Image src={user} alt="user" /> */}
          <svg
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6667 13C11.6667 12.0696 11.6667 11.6044 11.5518 11.2259C11.2933 10.3736 10.6264 9.70669 9.7741 9.44816C9.39556 9.33333 8.93038 9.33333 8 9.33333H4.66667C3.73629 9.33333 3.2711 9.33333 2.89257 9.44816C2.0403 9.70669 1.37336 10.3736 1.11483 11.2259C1 11.6044 1 12.0696 1 13M9.33333 4C9.33333 5.65685 7.99019 7 6.33333 7C4.67648 7 3.33333 5.65685 3.33333 4C3.33333 2.34315 4.67648 1 6.33333 1C7.99019 1 9.33333 2.34315 9.33333 4Z"
              stroke="#323333"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        {isOpen && (
          <div className="flex flex-col text-xs font-bold">
            <p>Ajani Abel-Cain</p>
            <p className="text-teal-900 bg-teal-50 rounded-lg text-center w-[54px] h-[24px]">
              online
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
