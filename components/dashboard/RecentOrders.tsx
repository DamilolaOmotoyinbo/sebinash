// import React from "react";
// import Image from "next/image";
// import { shelf } from "@/assests/assests";

// const recentOrdersData = [
//   {
//     product: "Benjamin bookcase",
//     status: "Delivered",
//     quantity: "50 units",
//     supplier: "Alvin and band",
//   },
//   {
//     product: "Benjamin bookcase",
//     status: "Delivered",
//     quantity: "50 units",
//     supplier: "Alvin and band",
//   },
//   {
//     product: "Benjamin bookcase",
//     status: "Delivered",
//     quantity: "50 units",
//     supplier: "Alvin and band",
//   },
//   {
//     product: "Benjamin bookcase",
//     status: "Delivered",
//     quantity: "50 units",
//     supplier: "Alvin and band",
//   },
//   {
//     product: "Benjamin bookcase",
//     status: "Delivered",
//     quantity: "50 units",
//     supplier: "Alvin and band",
//   },
//   {
//     product: "Benjamin bookcase",
//     status: "Delivered",
//     quantity: "50 units",
//     supplier: "Alvin and band",
//   },
//   {
//     product: "Benjamin bookcase",
//     status: "Delivered",
//     quantity: "50 units",
//     supplier: "Alvin and band",
//   },
//   {
//     product: "Benjamin bookcase",
//     status: "Delivered",
//     quantity: "50 units",
//     supplier: "Alvin and band",
//   },
//   {
//     product: "Benjamin bookcase",
//     status: "Delivered",
//     quantity: "50 units",
//     supplier: "Alvin and band",
//   },
//   {
//     product: "Benjamin bookcase",
//     status: "Delivered",
//     quantity: "50 units",
//     supplier: "Alvin and band",
//   },
// ];

// const RecentOrders: React.FC = () => {
//   return (
//     <div className="pl-4 w-[802px]">
//       <h2 className="font-bold text-lg mb-4">Recent orders</h2>
//       <div className="">
//         <table className="min-w-full ">
//           <thead className="gap-4">
//             <tr>
//               <th className="px-5 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 <input type="checkbox" />
//               </th>

//               <th className="px-5 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Product
//               </th>
//               <th className="px-5 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Status
//               </th>
//               <th className="px-5 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Quantity
//               </th>
//               <th className="px-5 py-3  bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                 Supplier
//               </th>
//             </tr>
//           </thead>
//           <tbody className="">
//             {recentOrdersData.map((order, index) => (
//               <tr key={index}>
//                 <td className=" pl-5 bg-white text-sm">
//                   <input type="checkbox" />
//                 </td>
//                 <td className="  bg-white text-sm">
//                   <div className="flex items-center">
//                     <Image className="rounded-lg " src={shelf} alt="shelf"  />
//                     <div className="ml-3">
//                       <p className="text-gray-900 ">{order.product}</p>
//                     </div>
//                   </div>
//                 </td>
//                 <td className="  bg-white text-sm">
//                   <span className="relative inline-block px-3 py-1 font-semibold text-teal-900 leading-tight">
//                     <span aria-hidden className="absolute inset-0 bg-teal-50 opacity-50 rounded-md "></span>
//                     <span className="relative">{order.status}</span>
//                   </span>
//                 </td>
//                 <td className="  bg-white text-sm">
//                   <p className="text-gray-900 whitespace-no-wrap">{order.quantity}</p>
//                 </td>
//                 <td className="  bg-white text-sm">
//                   <p className="text-gray-900 ">{order.supplier}</p>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default RecentOrders;

import React from "react";
import Image from "next/image";
import { shelf } from "@/assests/assests";

const recentOrdersData = [
  {
    product: "Benjamin bookcase",
    status: "Delivered",
    quantity: "50 units",
    supplier: "Alvin and band",
  },
  {
    product: "Benjamin bookcase",
    status: "Delivered",
    quantity: "50 units",
    supplier: "Alvin and band",
  },
  {
    product: "Benjamin bookcase",
    status: "Delivered",
    quantity: "50 units",
    supplier: "Alvin and band",
  },
  {
    product: "Benjamin bookcase",
    status: "Delivered",
    quantity: "50 units",
    supplier: "Alvin and band",
  },
  {
    product: "Benjamin bookcase",
    status: "Delivered",
    quantity: "50 units",
    supplier: "Alvin and band",
  },
  {
    product: "Benjamin bookcase",
    status: "Delivered",
    quantity: "50 units",
    supplier: "Alvin and band",
  },
  {
    product: "Benjamin bookcase",
    status: "Delivered",
    quantity: "50 units",
    supplier: "Alvin and band",
  },
  {
    product: "Benjamin bookcase",
    status: "Delivered",
    quantity: "50 units",
    supplier: "Alvin and band",
  },
  {
    product: "Benjamin bookcase",
    status: "Delivered",
    quantity: "50 units",
    supplier: "Alvin and band",
  },
  {
    product: "Benjamin bookcase",
    status: "Delivered",
    quantity: "50 units",
    supplier: "Alvin and band",
  },
];

const RecentOrders: React.FC = () => {
  return (
    <div className="pl-4 w-[802px]">
      <h2 className="font-bold text-lg mb-0.5">Recent orders</h2>
      <div className="">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-5 py-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                <input className="bg-white" type="checkbox" />
              </th>
              <th className="px-5 py-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Product
              </th>
              <th className="px-5 py-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Status
              </th>
              <th className="px-5 py-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-5 py-3 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Supplier
              </th>
            </tr>
          </thead>
          <tbody>
            {recentOrdersData.map((order, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td className="pl-5 bg-white text-sm">
                    <input type="checkbox" />
                  </td>
                  <td className="bg-white text-sm">
                    <div className="flex items-center">
                      <Image className="rounded-lg mt-0.5 mb-0.5" src={shelf} alt="shelf" />
                      <div className="ml-3 ">
                        <p className="text-gray-900 ">{order.product}</p>
                      </div>
                    </div>
                  </td>
                  <td className="bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-teal-900 leading-tight">
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-teal-50 opacity-50 rounded-md"
                      ></span>
                      <span className="relative">{order.status}</span>
                    </span>
                  </td>
                  <td className="bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">
                      {order.quantity}
                    </p>
                  </td>
                  <td className="bg-white text-sm">
                    <p className="text-gray-900">{order.supplier}</p>
                  </td>
                </tr>
                {index < recentOrdersData.length - 1 && (
                  <tr>
                    <td colSpan={5}>
                      <hr className="border-gray-200" />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
