import { motion } from "framer-motion"
import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-[30px] pt-[50px] sm:pt-[120px]">
      <motion.h1 whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }} transition={{ duration: 1 }} className="my-5 text-center text-4xl">Get in Touch</motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className="my-2">{CONTACT.address}</motion.p>

        <h2
          onClick={() => {
            window.open(`mailto:${CONTACT.email}`)
          }}
          className="underline underline-offset-4 cursor-pointer">{CONTACT.email}</h2>
      </div>
    </div>
  )
}

export default Contact