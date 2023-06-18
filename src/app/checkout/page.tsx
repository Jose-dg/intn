import Image from "next/image";

const CheckoutForm = () => {
  return (
    <div className="min-w-screen min-h-screen bg-gray-50 py-5">
      <div className="px-5">
        <div className="mb-2">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-600">Checkout.</h1>
        </div>
      </div>
      <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
        <div className="w-full">
          <div className="-mx-3 md:flex items-start">
            <div className="px-3 md:w-7/12 lg:pr-10">
              <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                <div className="w-full flex items-center">
                  <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                    <Image
                      src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                      alt=""
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-semibold uppercase text-gray-600">Ray Ban Sunglasses.</h6>
                    <p className="text-gray-400">x 1</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600 text-xl">$210</span>
                    <span className="font-semibold text-gray-600 text-sm">.00</span>
                  </div>
                </div>
              </div>
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="-mx-2 flex items-end justify-end">
                  <div className="flex-grow px-2 lg:max-w-xs">
                    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                      Discount code
                    </label>
                    <div>
                      <input
                        className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="XXXXXX"
                        type="text"
                      />
                    </div>
                  </div>
                  <button className="px-3 py-2 text-gray-100 font-semibold bg-indigo-500 rounded-md hover:bg-indigo-600 transition-colors">
                    Apply
                  </button>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <button className="px-6 py-3 text-white font-semibold bg-indigo-500 rounded-md hover:bg-indigo-600 transition-colors">
                  Place Order
                </button>
              </div>
            </div>
            <div className="px-3 md:w-5/12">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="border-b border-gray-200 pb-6 mb-6">
                  <h4 className="text-gray-600 font-semibold">Order Summary</h4>
                  <div className="flex justify-between mt-4">
                    <div className="text-gray-600">Subtotal</div>
                    <div className="text-gray-800">$210.00</div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="text-gray-600">Discount</div>
                    <div className="text-green-500">-$10.50</div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="text-gray-600">Shipping</div>
                    <div className="text-gray-800">$9.99</div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="text-gray-600">Tax</div>
                    <div className="text-gray-800">$20.00</div>
                  </div>
                </div>
                <div className="flex justify-between mt-4">
                  <div className="text-xl font-semibold">Total</div>
                  <div className="text-xl font-semibold">$229.49</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;


// 'use client';

// // import CreditCardForm from "@/components/checkout/CreditCardForm";
// import Image from "next/image";
// import React from "react";

// const CheckoutForm = () => {
//   return (
//     <div className="min-w-screen min-h-screen bg-gray-50 py-5">
//       <div className="px-5">

//         <div className="mb-2">
//           <h1 className="text-3xl md:text-5xl font-bold text-gray-600">Checkout.</h1>
//         </div>

//       </div>
//       <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
//         <div className="w-full">
//           <div className="-mx-3 md:flex items-start">
//             <div className="px-3 md:w-7/12 lg:pr-10">
//               <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
//                 <div className="w-full flex items-center">
//                   <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
//                     <Image
//                       src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
//                       alt=""
//                       width={20}
//                       height={20}
//                     />
//                   </div>
//                   <div className="flex-grow pl-3">
//                     <h6 className="font-semibold uppercase text-gray-600">Ray Ban Sunglasses.</h6>
//                     <p className="text-gray-400">x 1</p>
//                   </div>
//                   <div>
//                     <span className="font-semibold text-gray-600 text-xl">$210</span>
//                     <span className="font-semibold text-gray-600 text-sm">.00</span>
//                   </div>
//                 </div>
//               </div>
//               <div className="mb-6 pb-6 border-b border-gray-200">
//                 <div className="-mx-2 flex items-end justify-end">
//                   <div className="flex-grow px-2 lg:max-w-xs">
//                     <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
//                       Discount code
//                     </label>
//                     <div>
//                       <input
//                         className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
//                         placeholder="XXXXXX"
//                         type="text"
//                       />
//                     </div>
//                   </div>
//                   <button className="px-3 py-2 text-gray-100 font-semibold bg-indigo-500 rounded-md hover:bg-indigo-600 transition-colors">
//                     Apply
//                   </button>
//                 </div>
//               </div>

//               <div className="mt-6 flex items-center justify-between">
//                 <button className="px-6 py-3 text-white font-semibold bg-indigo-500 rounded-md hover:bg-indigo-600 transition-colors">
//                   Place Order
//                 </button>
//               </div>
//             </div>
//             <div className="px-3 md:w-5/12">
//               <div className="bg-white rounded-lg shadow-md p-4">
//                 <div className="border-b border-gray-200 pb-6 mb-6">
//                   <h4 className="text-gray-600 font-semibold">Order Summary</h4>
//                   <div className="flex justify-between mt-4">
//                     <div className="text-gray-600">Subtotal</div>
//                     <div className="text-gray-800">$210.00</div>
//                   </div>
//                   <div className="flex justify-between mt-2">
//                     <div className="text-gray-600">Discount</div>
//                     <div className="text-green-500">-$10.50</div>
//                   </div>
//                   <div className="flex justify-between mt-2">
//                     <div className="text-gray-600">Shipping</div>
//                     <div className="text-gray-800">$9.99</div>
//                   </div>
//                   <div className="flex justify-between mt-2">
//                     <div className="text-gray-600">Tax</div>
//                     <div className="text-gray-800">$20.00</div>
//                   </div>
//                 </div>
//                 <div className="flex justify-between mt-4">
//                   <div className="text-xl font-semibold">Total</div>
//                   <div className="text-xl font-semibold">$229.49</div>
//                 </div>
//               </div>
//             </div>
//             <>
//             {/* <CreditCardForm/> */}
//             </>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckoutForm;
