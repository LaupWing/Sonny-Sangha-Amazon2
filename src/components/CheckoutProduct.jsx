import { StarIcon } from "@heroicons/react/24/outline"
import Image from "next/image"
import React from "react"
import { useDispatch } from "react-redux"
import { addToBasket, removeFromBasket } from "../slices/basketSlice"

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
   const dispatch = useDispatch()

   const addItemToBasket = () => {
      const product = {
         id,
         title,
         price,
         rating,
         description,
         category,
         image,
         hasPrime,
      }
      dispatch(addToBasket(product))
   }
   const removeItemFromBasket = () => {
      const product = {
         id,
         title,
         price,
         rating,
         description,
         category,
         image,
         hasPrime,
      }
      dispatch(removeFromBasket(product))
   }
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
            <p className="text-xs my-2 line-clamp-3">{description}</p>
            <p>$ {price}</p>
            {hasPrime && (
               <div className="flex items-center space-x-2">
                  <img
                     className="w-12"
                     loading="lazy"
                     src="https://links.papareact.com/fdw"
                     alt=""
                  />
                  <p className="text-xs text-gray-500">
                     FREE Next-day Delivery
                  </p>
               </div>
            )}
         </div>
         <div className="flex flex-col space-y-2 my-auto justify-self-end">
            <button className="button" onClick={addItemToBasket}>
               Add to Basket
            </button>
            <button className="button" onClick={removeItemFromBasket}>
               Remove to Basket
            </button>
         </div>
      </div>
   )
}

export default CheckoutProduct
