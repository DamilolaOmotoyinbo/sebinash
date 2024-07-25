// import React from "react";
// import Image from "next/image";
// import Navbar from "@/components/dashboard/Navbar";
// import Sidebar from "@/components/dashboard/Sidebar";
// import SalesTrend from "@/components/dashboard/Salestrend";
// import ProductionLine from "@/components/dashboard/ProductionLine";
// import RecentOrders from "@/components/dashboard/RecentOrders";
// import { canvas, collapse } from "@/assests/assests";

// const Dashboard: React.FC = () => {
//   return (
//     <div className="flex h-[1211px] [background: (#FDFAF2)]">
//       <Sidebar />
//       <div className="">
//         <Navbar />
//         <div>
//           <div className=" gap-6 mt-6">
//             <div className="flex gap-2">
//               <div>
//                 <SalesTrend />
//                 <ProductionLine />
//                 <RecentOrders />
//               </div>
//               <div className="w-[300px] h-[727px]">
//                 <Image className="" src={canvas} alt="canvas" />
//               </div>
//             </div>
//             <div className=""></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

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
    <div style={{ backgroundColor: '#FDFAF2' }} className="flex h-[1211px]">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="flex gap-6 mt-6">
          <div className="flex-1">
            <SalesTrend />
            <ProductionLine />
            <RecentOrders />
          </div>
          <div className=" h-[727px]">
            <Image className="w-full h-full object-cover" src={canvas} alt="canvas" />
            <button className=" flex bg-blue-800 text-white w-36 pl-2 text-sm h-[48px] items-center gap-2 rounded-lg"><p>Launch designer</p> <Image className="" src={rightarrow} alt="canvas" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

