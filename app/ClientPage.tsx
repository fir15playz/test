"use client"
import { Download, Lock, Shield, Star, List, Settings, Gift, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function ClientPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

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

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* mouse spotlight effect - mixed colors */}
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

        <div className="absolute w-80 h-80 rounded-full opacity-20 animate-spotlight-4">
          <div className="w-full h-full bg-gradient-radial from-blue-200/60 via-blue-100/40 to-transparent rounded-full blur-2xl"></div>
        </div>

        {/* smaller ones for more movement */}
        <div className="absolute w-32 h-32 rounded-full opacity-40 animate-spotlight-5">
          <div className="w-full h-full bg-gradient-radial from-blue-300/50 via-blue-200/30 to-transparent rounded-full blur-md"></div>
        </div>

        <div className="absolute w-40 h-40 rounded-full opacity-30 animate-spotlight-6">
          <div className="w-full h-full bg-gradient-radial from-blue-100/60 via-blue-300/30 to-transparent rounded-full blur-lg"></div>
        </div>

        {/* purple spotlights */}
        <div className="absolute w-72 h-72 rounded-full opacity-25 animate-purple-spotlight-1">
          <div className="w-full h-full bg-gradient-radial from-purple-200/45 via-purple-300/35 to-transparent rounded-full blur-2xl"></div>
        </div>

        <div className="absolute w-56 h-56 rounded-full opacity-30 animate-purple-spotlight-2">
          <div className="w-full h-full bg-gradient-radial from-purple-300/50 via-purple-200/30 to-transparent rounded-full blur-xl"></div>
        </div>

        <div className="absolute w-44 h-44 rounded-full opacity-35 animate-purple-spotlight-3">
          <div className="w-full h-full bg-gradient-radial from-purple-100/55 via-purple-300/35 to-transparent rounded-full blur-lg"></div>
        </div>

        <div className="absolute w-36 h-36 rounded-full opacity-40 animate-purple-spotlight-4">
          <div className="w-full h-full bg-gradient-radial from-purple-300/45 via-purple-100/40 to-transparent rounded-full blur-md"></div>
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

      {/* big background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-[20vw] font-bold text-gray-900/5 select-none whitespace-nowrap transform -rotate-12">
          PURE PURE PURE
        </div>
      </div>

      {/* header */}
      <header className="relative z-10 flex items-center justify-between p-6 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 relative">
            <Image src="/images/pure-logo.png" alt="Pure Logo" width={40} height={40} className="object-contain" />
          </div>
          <span className="text-xl font-bold">Pure</span>
        </div>

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
                    width={80}
                    height={80}
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
        <div className="flex justify-center mb-8">
          <div className="w-30 h-30 sm:w-34 sm:h-34 md:w-38 md:h-38 lg:w-42 lg:h-42 xl:w-46 xl:h-46 relative max-w-60 max-h-60">
            <Image src="/images/pure-logo.png" alt="Pure Logo" width={144} height={144} className="object-contain" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          The Best Keyless Executor
        </h1>

        <div className="flex justify-center mb-8">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg hover:scale-105 hover:-translate-y-2 transition-all duration-200 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3),0_0_0_1px_rgba(147,197,253,0.4),0_0_20px_rgba(147,197,253,0.3)]"
          >
            <Download className="mr-2 h-5 w-5" />
            Download
          </Button>
        </div>

        <p className="text-gray-400 text-lg">Brought to you by the Pure Development Team</p>
      </section>

            {/* filepath: c:\Users\madan\Downloads\pure-website\app\ClientPage.tsx */}
      {/* hero section */}
      <section className="relative z-10 text-center py-20 px-6">
        <div className="flex justify-center mb-8">
          <div className="w-30 h-30 sm:w-34 sm:h-34 md:w-38 md:h-38 lg:w-42 lg:h-42 xl:w-46 xl:h-46 relative max-w-60 max-h-60">
            <Image src="/images/pure-logo.png" alt="Pure Logo" width={144} height={144} className="object-contain" />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          The Best Keyless Executor
        </h1>
      
        <div className="flex justify-center mb-8">
          <a
            href="https://gofile.io/d/DcCCJ9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-8 py-3 text-lg hover:scale-105 hover:-translate-y-2 transition-all duration-200 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3),0_0_0_1px_rgba(147,197,253,0.4),0_0_20px_rgba(147,197,253,0.3)]"
            >
              <Download className="mr-2 h-5 w-5" />
              Download
            </Button>
          </a>
        </div>
      
        <p className="text-gray-400 text-lg">Brought to you by the Pure Development Team</p>
      </section>

      {/* features */}
      <section className="relative z-10 py-16 px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-blue-200 mr-3" />
                <h3 className="text-xl font-semibold text-white">Secure</h3>
              </div>
              <p className="text-gray-400">
                We make sure your time using our exploit is secure. Note that all executors are detected.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-blue-200 mr-3" />
                <h3 className="text-xl font-semibold text-white">Unrestricted Execution</h3>
              </div>
              <p className="text-gray-400">
                Featuring 100% UNC, Pure is able to run any script on the market that you may throw at it
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-blue-200 mr-3" />
                <h3 className="text-xl font-semibold text-white">AI Integration</h3>
              </div>
              <p className="text-gray-400">Got a bug in your code and don't know how to fix it? PureAI can help you!</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <List className="w-6 h-6 text-blue-200 mr-3" />
                <h3 className="text-xl font-semibold text-white">Script Hub</h3>
              </div>
              <p className="text-gray-400">
                Integratd Script Hub right within the UI so you never need to go searching online for scripts again!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Settings className="w-6 h-6 text-blue-200 mr-3" />
                <h3 className="text-xl font-semibold text-white">Decompiler</h3>
              </div>
              <p className="text-gray-400">
                Pure features a state-of-the-art decompiler, being able to decompile any Local/Module script that you
                may need
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Gift className="w-6 h-6 text-blue-200 mr-3" />
                <h3 className="text-xl font-semibold text-white">Keyless!</h3>
              </div>
              <p className="text-gray-400">
                And the best part? Pure is completely keyless! No need to get keys or wait for verification - just
                download and start using Pure immediately.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* preview images */}
      <section className="relative z-10 py-16 px-6">
        <h2 className="text-center text-2xl text-gray-400 mb-12">Preview</h2>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm overflow-hidden flex-1 hover-card">
            <CardContent className="p-0">
              <img
                src="/images/pure-interface-1.webp"
                alt="Pure Lua Executor Main Interface"
                className="w-full h-auto rounded-lg"
              />
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm overflow-hidden flex-1 hover-card">
            <CardContent className="p-0">
              <img
                src="/images/pure-interface-2.webp"
                alt="Pure Lua Executor Documentation Interface"
                className="w-full h-auto rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* footer */}
      <footer className="relative z-10 text-center py-8 px-6 border-t border-gray-800">
        <p className="text-gray-400">© 2025 Pure Development Team</p>
      </footer>
    </div>
  )
}
