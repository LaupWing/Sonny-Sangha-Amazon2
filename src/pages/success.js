import { CheckCircleIcon } from "@heroicons/react/24/outline"
import { useRouter } from "next/router"
import React from "react"
import Header from "../components/Header"

const SuccessPage = () => {
   const router = useRouter()

   return (
      <div className="bg-gray-100 h-screen">
         <Header />
         <main className="max-w-screen-lg mx-auto">
            <div className="flex flex-col p-10 bg-white">
               <div className="flex items-center space-x-2 mb-5">
                  <CheckCircleIcon className="text-green-500 h-10" />
                  <h1 className="text-3xl">
                     Thank you, your order has been confirmed!
                  </h1>
               </div>
            </div>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
               consequatur exercitationem amet, nesciunt architecto ex tenetur
               placeat distinctio velit minus! Quis adipisci iusto iure
               voluptatem dicta aliquid dolorum blanditiis veritatis!
            </p>
            <button
               className="button mt-8"
               onClick={() => router.push("/orders")}
            >
               Go to my orders
            </button>
         </main>
      </div>
   )
}

export default SuccessPage
