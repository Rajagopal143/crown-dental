"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className,
      )}
    >
      <div className="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <Link
              scroll={true}
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary",
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  {...(isActive && {
                    animate: { scale: [1, 1.2, 1] },
                    initial: { scale: 0.95 },
                    transition: { duration: 0.3 }
                  })}
                >
                  <Icon size={18} strokeWidth={2.5} />
                </motion.span>
              </span>
              {isActive && (
                <>
                  <svg className="hidden">
                    <filter id="tubelight">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feSpecularLighting surfaceScale="4" lightingColor="#00ffff" 
                        specularConstant="1.5" specularExponent="20">
                        <fePointLight x="0" y="00" z="200"/>
                      </feSpecularLighting>
                      <feComposite operator="in" in2="blur"/>
                    </filter>
                  </svg>
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-[#00ffff]/10 rounded-full -z-10"
                    initial={false}
                    style={{ filter: "url(#tubelight)" }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-t-full">
                      <div className="absolute w-12 h-6 bg-cyan-400/30 rounded-full blur-md -top-2 -left-2 animate-pulse" />
                      <div className="absolute w-8 h-6 bg-blue-400/30 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-white/40 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                </>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
