"use client"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export default function CursorFollower() {
    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
    const smoothX = useSpring(0, { stiffness: 500, damping: 30 })
    const smoothY = useSpring(0, { stiffness: 500, damping: 30 })

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            setCursorPos({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", moveCursor)
        return () => window.removeEventListener("mousemove", moveCursor)
    }, [])

    useEffect(() => {
        smoothX.set(cursorPos.x)
        smoothY.set(cursorPos.y)
    }, [cursorPos.x, cursorPos.y, smoothX, smoothY])

    return (
        <motion.span
            className="fixed w-2 h-2 bg-pblue rounded-full pointer-events-none z-50"
            style={{
                x: smoothX,
                y: smoothY,
                translateX: "-50%",
                translateY: "-50%"
            }}
            transition={{ type: "spring", mass: 0.1 }}
        />
    )
}