'use client'

import { motion } from "framer-motion"

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <motion.main
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="overflow-x-hidden"
    >
      {children}
    </motion.main>
  )
}
