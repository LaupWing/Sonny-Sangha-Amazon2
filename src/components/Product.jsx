import Image from "next/image"
import React, { useState } from "react"
import { StarIcon } from "@heroicons/react/24/outline"
import { useDispatch } from "react-redux"
import { addToBasket } from "../slices/basketSlice"

const MAX_RATING = 5
const MIN_RATING = 1

const Product = ({ id, title, price, description, category, image }) => {
   const [rating] =
      useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1))) +
      MIN_RATING
   const dispatch = useDispatch()
   const [hasPrime] = useState(Math.random() < 0.5)

   const addItemToBasket = () => {
      const product = {
         id,
         title,
         price,
         description,
         category,
         image,
      }
      console.log(product)
      dispatch(addToBasket(product))
   }

   return (
      <div className="relative flex flex-col m-5 bg-white z-30 p-10">
         <p className="absolute top-2 right-2 text-xs italic">{category}</p>
         <Image src={image} height={200} width={200} />
         <h4 className="my-3">{title}</h4>
         <div className="flex">
            {Array(rating)
               .fill()
               .map((_, i) => (
                  <StarIcon key={i} className="h-5" />
               ))}
         </div>
         {hasPrime && <p>Has prime delivery</p>}
         <p className="text-xs my-2 line-clamp-2">{description}</p>

         <div className="mb-5">
            <p>$ {price}</p>
         </div>
         {hasPrime && (
            <div className="flex items-center space-x-2 -mt-5">
               <img
                  className="w-12"
                  src="https://links.papareact.com/fdw"
                  alt=""
               />
               <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
            </div>
         )}

         <button className="mt-auto button" onClick={addItemToBasket}>
            Add To Basket
         </button>
      </div>
   )
}

export default Product
