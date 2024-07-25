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
    <div style={{ backgroundColor: "#FDFAF2" }} className="flex h-[1211px]">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="flex gap-6 mt-6">
          <div className="flex-1 ">
            <SalesTrend />
            <ProductionLine />
            <RecentOrders />
          </div>
          <div className="relative h-[727px]">
            <Image
              className="w-full h-full object-cover"
              src={canvas}
              alt="canvas"
            />
            <button className="absolute bottom-14 left-4 flex bg-blue-800 text-white w-36 pl-2 text-sm h-[44px] items-center gap-2 rounded-lg">
              <p>Launch designer</p>
              <Image className="" src={rightarrow} alt="canvas" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


