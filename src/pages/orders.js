import moment from "moment/moment"
import { getSession, useSession } from "next-auth/react"
import React from "react"
import db from "../../firebase"
import Header from "../components/Header"
import {getApps} from "firebase/app"

const OrdersPage = ({ orders }) => {
   // const [session] = useSession()
   console.log(getApps())
   return (
      <div>
         <Header />
         <main className="max-w-screen-lg mx-auto p-10">
            <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
               Your Orders
            </h1>
            {/* {session ? (
               <h2>x Ordsers</h2>
            ) : (
               <h2>Please sign in to see your orders</h2>
            )} */}

            <div className="mt-5 space-y-4"></div>
         </main>
      </div>
   )
}

export default OrdersPage

export async function getServerSideProps(context) {
   const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)
   const session = await getSession(context)
   if (!session) {
      return {
         props: {},
      }
   }
   const stripeOrders = await db
      .collection("users")
      .doc(session.user.email)
      .collection("orders")
      .orderBy("timestamp")
      .get()
   console.log(stripeOrders)
   // const orders = await Promise.all(
   //    stripeOrders.docs.map(async order =>({
   //       id: order.id,
   //       ...order.data(),
   //       timestamp: moment(order.data().timestamp.toDate()).unix(),
   //       items: (
   //          await stripe.checkout.sessions.listLineItems(order.id, {
   //             limit: 100,
   //          })
   //       ).data
   //    }))
   // )
   // console.log(orders)
}
