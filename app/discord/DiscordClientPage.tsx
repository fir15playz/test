"use client"

import { MessageCircle, Users, ArrowRight, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function DiscordClientPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const navItems = [
    { name: "HOME", delay: "100ms" },
    { name: "DOCUMENTATION", delay: "200ms" },
    { name: "FEATURES", delay: "300ms" },
    { name: "DONATE", delay: "400ms" },
    { name: "DISCORD", delay: "500ms" },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* mouse spotlight effect */}
      <div
        className="fixed w-64 h-64 rounded-full opacity-20 pointer-events-none z-5"
        style={{
          left: mousePos.x - 128,
          top: mousePos.y - 128,
          transform: "translate3d(0, 0, 0)", // Hardware acceleration
        }}
      >
        <div className="w-full h-full bg-gradient-radial from-blue-200/60 via-purple-300/40 to-transparent rounded-full blur-xl"></div>
      </div>

      {/* animated bg spotlights */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 rounded-full opacity-30 animate-spotlight-1">
          <div className="w-full h-full bg-gradient-radial from-blue-200/40 via-blue-300/30 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="absolute w-72 h-72 rounded-full opacity-25 animate-purple-spotlight-1">
          <div className="w-full h-full bg-gradient-radial from-purple-200/45 via-purple-300/35 to-transparent rounded-full blur-2xl"></div>
        </div>
      </div>

      {/* grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(147, 197, 253, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 197, 253, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* header */}
      <header className="relative z-10 flex items-center justify-between p-6 border-b border-gray-800">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 relative">
            <Image src="/images/pure-logo.png" alt="Pure Logo" width={40} height={40} className="object-contain" />
          </div>
          <span className="text-xl font-bold">Pure</span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="hover:text-blue-200 transition-colors">
            HOME
          </Link>
          <Link href="/documentation" className="hover:text-blue-200 transition-colors">
            DOCUMENTATION
          </Link>
          <Link href="/features" className="hover:text-blue-200 transition-colors">
            FEATURES
          </Link>
          <Link href="/donate" className="hover:text-blue-200 transition-colors">
            DONATE
          </Link>
          <Link href="/discord" className="text-blue-200">
            DISCORD
          </Link>
        </nav>

        {/* mobile menu btn */}
        <button
          className="md:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors z-[70] relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="relative w-6 h-6">
            <Menu
              className={`w-6 h-6 absolute transition-all duration-300 ${
                isMenuOpen ? "opacity-0 rotate-180 scale-0" : "opacity-100 rotate-0 scale-100"
              }`}
            />
            <X
              className={`w-6 h-6 absolute transition-all duration-300 ${
                isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-0"
              }`}
            />
          </div>
        </button>
      </header>

      {/* mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/95 backdrop-blur-xl transition-all duration-500 ${
            isMenuOpen ? "scale-100" : "scale-110"
          }`}
        />

        <div
          className={`relative z-[61] h-full flex flex-col transition-all duration-700 ease-out ${
            isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* menu header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 relative">
                <Image src="/images/pure-logo.png" alt="Pure Logo" width={40} height={40} className="object-contain" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Pure
              </span>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-3 hover:bg-gray-800/50 rounded-xl transition-all duration-200 hover:scale-110"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* nav links */}
          <div className="flex-1 flex flex-col justify-center px-8">
            <nav className="space-y-6">
              {navItems.map((item, index) => (
                <div
                  key={item.name}
                  className={`transition-all duration-700 ease-out ${
                    isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isMenuOpen ? item.delay : `${(navItems.length - index - 1) * 100}ms`,
                  }}
                >
                  <Link
                    href={item.name === "HOME" ? "/" : `/${item.name.toLowerCase()}`}
                    className="block text-3xl font-semibold py-4 px-6 rounded-2xl hover:bg-gray-800/30 hover:text-blue-200 transition-all duration-300 hover:translate-x-2 hover:shadow-lg border border-transparent hover:border-blue-200/20"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </nav>
          </div>

          {/* menu footer */}
          <div
            className={`p-8 border-t border-gray-700/50 transition-all duration-700 ease-out ${
              isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{
              transitionDelay: isMenuOpen ? "600ms" : "0ms",
            }}
          >
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <div className="w-12 h-12 relative">
                  <Image
                    src="/images/pure-logo.png"
                    alt="Pure Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-400 text-sm">© 2025 Pure Development Team</p>
              <p className="text-gray-500 text-xs">The Best Keyless Executor</p>
            </div>
          </div>
        </div>
      </div>

      {/* main content */}
      <section className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
        <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm max-w-2xl w-full">
          <CardContent className="p-12 text-center">
            <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </div>
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Join Our Discord
            </h1>
            <p className="text-gray-400 text-lg mb-6">
              Connect with the Pure community, get support, share scripts, and stay updated with the latest news.
            </p>

            <div className="flex items-center justify-center space-x-4 mb-8 text-sm text-gray-300">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>40+ Members</span>
              </div>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <div>24/7 Support</div>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <div>Script Sharing</div>
            </div>

            <div className="space-y-4">
              <Button
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white hover:scale-105 transition-all duration-200"
                onClick={() => (window.location.href = "https://discord.gg/cRwhvTNEUm")}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Join Discord Server
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* footer */}
      <footer className="relative z-10 text-center py-8 px-6 border-t border-gray-800">
        <p className="text-gray-400">© 2025 Pure Development Team</p>
      </footer>
    </div>
  )
}
