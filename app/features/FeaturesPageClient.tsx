"use client"

import { Lock, Shield, Star, List, Settings, Gift, Code, Zap, Users, Database, Cpu, Globe, Menu, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function FeaturesPageClient() {
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

  const features = [
    {
      icon: Lock,
      title: "Secure",
      description: "We make sure your time using our exploit is secure. Note that all executors are detected.",
    },
    {
      icon: Shield,
      title: "Unrestricted Execution",
      description: "Featuring 100% UNC, Pure is able to run any script on the market that you may throw at it",
    },
    {
      icon: Star,
      title: "AI Integration",
      description: "Got a bug in your code and don't know how to fix it? PureAI can help you!",
    },
    {
      icon: List,
      title: "Script Hub",
      description:
        "Integratd Script Hub right within the UI so you never need to go searching online for scripts again!",
    },
    {
      icon: Settings,
      title: "Decompiler",
      description:
        "Pure features a state-of-the-art decompiler, being able to decompile any Local/Module script that you may need",
    },
    {
      icon: Gift,
      title: "Keyless!",
      description:
        "And the best part? Pure is completely keyless! No need to get keys or wait for verification - just download and start using Pure immediately.",
    },
    {
      icon: Code,
      title: "Advanced Editor",
      description:
        "Built-in code editor with syntax highlighting, auto-completion, and error detection for seamless script development.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Optimized performance ensures your scripts execute quickly without lag or delays, even with complex operations.",
    },
    {
      icon: Users,
      title: "Community Scripts",
      description: "Access thousands of community-created scripts and share your own creations with other Pure users.",
    },
    {
      icon: Database,
      title: "Script Library",
      description:
        "Organize and manage your scripts with our built-in library system featuring tags, favorites, and search functionality.",
    },
    {
      icon: Cpu,
      title: "Multi-Execute",
      description:
        "Advanced multi-threading support allows you to run multiple scripts simultaneously without performance issues.",
    },
    {
      icon: Globe,
      title: "Cross-Platform",
      description:
        "While currently Windows-focused, Pure is designed with cross-platform compatibility in mind for future releases.",
    },
  ]

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

        <div className="absolute w-64 h-64 rounded-full opacity-25 animate-spotlight-2">
          <div className="w-full h-full bg-gradient-radial from-blue-100/50 via-blue-200/35 to-transparent rounded-full blur-xl"></div>
        </div>

        <div className="absolute w-48 h-48 rounded-full opacity-35 animate-spotlight-3">
          <div className="w-full h-full bg-gradient-radial from-blue-300/45 via-blue-200/30 to-transparent rounded-full blur-lg"></div>
        </div>

        {/* purple spotlights */}
        <div className="absolute w-72 h-72 rounded-full opacity-25 animate-purple-spotlight-1">
          <div className="w-full h-full bg-gradient-radial from-purple-200/45 via-purple-300/35 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="absolute w-56 h-56 rounded-full opacity-30 animate-purple-spotlight-2">
          <div className="w-full h-full bg-gradient-radial from-purple-300/50 via-purple-200/30 to-transparent rounded-full blur-xl"></div>
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
          <Link href="/features" className="text-blue-200">
            FEATURES
          </Link>
          <Link href="/donate" className="hover:text-blue-200 transition-colors">
            DONATE
          </Link>
          <Link href="/discord" className="hover:text-blue-200 transition-colors">
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

      {/* hero section */}
      <section className="relative z-10 text-center py-20 px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          Features
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Discover all the powerful features that make Pure the best keyless executor on the market
        </p>
      </section>

      {/* features grid */}
      <section className="relative z-10 py-16 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-200 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* footer */}
      <footer className="relative z-10 text-center py-8 px-6 border-t border-gray-800">
        <p className="text-gray-400">© 2025 Pure Development Team</p>
      </footer>
    </div>
  )
}
