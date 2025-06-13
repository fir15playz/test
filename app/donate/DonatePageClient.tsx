"use client"

import { Heart, CreditCard, Gift, Star, Menu, X, Construction } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function DonatePageClient() {
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

  const donationTiers = [
    {
      amount: "$5",
      title: "Supporter",
      description: "Help keep Pure running and show your support for the project",
      perks: ["Our eternal gratitude", "Supporter badge in Discord"],
    },
    {
      amount: "$15",
      title: "Contributor",
      description: "Make a meaningful contribution to Pure's development",
      perks: ["Everything from Supporter", "Early access to beta features", "Priority support"],
    },
    {
      amount: "$50",
      title: "Champion",
      description: "Become a champion of the Pure community",
      perks: ["Everything from Contributor", "Custom Discord role", "Direct feedback channel"],
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
          <Link href="/features" className="hover:text-blue-200 transition-colors">
            FEATURES
          </Link>
          <Link href="/donate" className="text-blue-200">
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
        <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center">
          <Heart className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          Support Pure
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          Pure is completely free and keyless, but your donations help us maintain servers, develop new features, and
          keep the project alive.
        </p>
        <p className="text-blue-200 text-sm">Every donation, no matter the size, makes a difference ❤️</p>
      </section>

      {/* under construction banner */}
      <section className="relative z-10 py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg p-6 text-center shadow-lg">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <Construction className="w-6 h-6 text-black" />
              <h2 className="text-xl font-bold text-black">Under Construction</h2>
              <Construction className="w-6 h-6 text-black" />
            </div>
            <p className="text-black font-medium">
              Donations do not work yet - This feature is currently under development
            </p>
          </div>
        </div>
      </section>

      {/* donation tiers */}
      <section className="relative z-10 py-16 px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {donationTiers.map((tier, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 backdrop-blur-sm hover-card">
              <CardContent className="p-8 text-center">
                <div className="text-3xl font-bold text-blue-200 mb-2">{tier.amount}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{tier.title}</h3>
                <p className="text-gray-400 mb-6">{tier.description}</p>

                <div className="space-y-2 mb-8">
                  {tier.perks.map((perk, perkIndex) => (
                    <div key={perkIndex} className="flex items-center text-sm text-gray-300">
                      <Star className="w-4 h-4 text-blue-200 mr-2 flex-shrink-0" />
                      {perk}
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 hover:scale-105 transition-all duration-200">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Donate {tier.amount}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* custom amount section */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
            <CardContent className="p-8">
              <Gift className="w-12 h-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">Custom Amount</h3>
              <p className="text-gray-400 mb-6">
                Want to donate a different amount? Every contribution helps keep Pure free and accessible to everyone.
              </p>
              <Button className="bg-white text-black hover:bg-gray-100 hover:scale-105 transition-all duration-200">
                <Heart className="mr-2 h-4 w-4" />
                Custom Donation
              </Button>
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
