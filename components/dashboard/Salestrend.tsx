import React from "react";
import Image from "next/image";
import { collapse, graph } from "@/assests/assests";

const SalesTrend: React.FC = () => {
  return (
    <div>
      <div className="">
        <p className="pl-4 mb-3 font-bold">Sales trend</p>
      </div>
      <div className=" flex gap-3">
        <div className="relative bg-white ml-5 w-[802px] h-[400px]">
          <div className="">
            <Image className="pl-16 " src={graph} alt="graph" layout="fill" />
            <div className="absolute bottom-5 left-16 flex justify-between w-[90%] text-sm text-neutral-400">
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ].map((month, index) => (
                <span key={index}>{month}</span>
              ))}
            </div>
            <div className="absolute top-4 flex flex-col justify-between pl-4  h-full text-xs text-neutral-400">
              {[400, 300, 200, 150, 100, 50, 10, 0].map((value, index) => (
                <div key={index} className="h-[50px]">
                  {value === 0 ? value : `₦${value}k`}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesTrend;
