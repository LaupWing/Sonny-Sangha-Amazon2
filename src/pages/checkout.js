import Image from "next/image"
import React from "react"
import { useSelector } from "react-redux"
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
                     <div key={i}>{item.name}</div>
                  ))}
               </div>
            </div>
            <div></div>
         </main>
      </div>
   )
}

export default CheckoutPage
