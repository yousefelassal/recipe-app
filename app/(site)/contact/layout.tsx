'use client'

import { motion } from "framer-motion"

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <motion.main
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="overflow-x-hidden"
    >
      {children}
    </motion.main>
  )
}
