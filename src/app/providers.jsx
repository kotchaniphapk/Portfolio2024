"use client"

import { NextUIProvider } from "@nextui-org/react"
import { IconContext } from "react-icons"

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <IconContext.Provider value={{ className: "react-icons", size: 20, style: { opacity: 0.8 } }}>
        {children}
      </IconContext.Provider>
    </NextUIProvider>
  )
}