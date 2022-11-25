import moment from "moment"
import React from "react"

const Order = ({
   id,
   amount,
   items,
   timestamp,
   images
}) => {
   
   return (
      <div className="relative border rounded-md">
         <div className="flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-600">
            <div>
               <p className="font-bold text-xs">ORDER PLACED</p>
               <p>{moment.unix(timestamp).format("DD MMM YYYY")}</p>
            </div>
            <div>
               <p className="text-xs font-bold">TOTAL</p>
               <p>${amount}</p>
            </div>
            <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500">
               {items.length} items
            </p>
            <p className="absolute top-2 right-2 w-40 truncate lg:w-72 text-xs whitespace-nowrap">ORDER # {id}</p>
         </div>
         <div>
            
         </div>
      </div>
   )
}

export default Order