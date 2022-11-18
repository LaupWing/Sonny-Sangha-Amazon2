import Image from "next/image"
import React from "react"
import { useSelector } from "react-redux"
import CheckoutProduct from "../components/CheckoutProduct"
import Header from "../components/Header"
import { selectItems } from "../slices/basketSlice"

const CheckoutPage = () => {
   const items = useSelector(selectItems)

   return (
      <div className="bg-gray-100">
         <Header />
         <main className="lg:flex max-w-screen-2xl mx-auto">
            <div className="flex-grow m-5 shadow-sm">
               <Image
                  src={"https://links.papareact.com/ikj"}
                  width={1020}
                  height={250}
                  className="object-contain"
               />

               <div className="flex flex-col p-5 space-y-10 bg-white">
                  <h1 className="text-3xl border-b pb-4">
                     {items.length === 0
                        ? "Your Amazon basket is empty"
                        : "Shopping Basket"}
                  </h1>

                  {items.map((item, i) => (
                     <CheckoutProduct
                        key={i}
                        category={item.category}
                        description={item.description}
                        hasPrime={item.hasPrime}
                        id={item.id}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        title={item.title}
                     />
                  ))}
               </div>
            </div>
            <div></div>
         </main>
      </div>
   )
}

export default CheckoutPage