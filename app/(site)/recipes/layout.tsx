'use client'

import { motion } from "framer-motion"

export default function RecipesLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <motion.main
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.main>
  )
}
