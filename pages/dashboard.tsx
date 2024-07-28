import React from "react";
import Image from "next/image";
import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";
import SalesTrend from "@/components/dashboard/Salestrend";
import ProductionLine from "@/components/dashboard/ProductionLine";
import RecentOrders from "@/components/dashboard/RecentOrders";
import { canvas, rightarrow } from "@/assests/assests";

const Dashboard: React.FC = () => {
  return (
    <div
      style={{ backgroundColor: "#FDFAF2" }}
      className="flex flex-col lg:flex-row max-w-[1440px] m-auto h-auto min-h-screen"
    >
      <div className=" hidden md:block">
        <Sidebar />
      </div>
      <div className="flex-1">
        
      <Navbar />
      
        <div className="flex gap-5 mt-5 flex-col md:flex-row">
          <div className="flex-1 order-2 md:order-1">
            <SalesTrend />
            <ProductionLine />
            <RecentOrders />
          </div>
          <div className=" relative p-0 h-80 md:h-[727px] order-1 md:order-2">
            <Image
              className="w-full h-full object-cover"
              src={canvas}
              alt="canvas"
            />
            <button className="absolute bottom-14 left-10 flex bg-blue-800 text-white w-36 pl-2 text-sm h-[44px] items-center gap-2 rounded-lg">
              <p>Launch designer</p>
              <Image src={rightarrow} alt="canvas" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
