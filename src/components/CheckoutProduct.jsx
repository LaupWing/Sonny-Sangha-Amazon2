import { StarIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import React from "react"

const CheckoutProduct = ({
   id,
   title,
   price,
   rating,
   description,
   category,
   image,
   hasPrime,
}) => {
   return (
      <div className="grid grid-cols-5">
         <Image
            src={image}
            height={200}
            width={200}
            className="object-contain"
         />
         <div className="col-span-3 mx-5">
            <p>{title}</p>
            <div className="flex">
               {Array(rating)
                  .fill()
                  .map((_, i) => (
                     <StarIcon key={i} className="h-5" />
                  ))}
            </div>
            <p>{description}</p>
         </div>
      </div>
   )
}

export default CheckoutProduct
