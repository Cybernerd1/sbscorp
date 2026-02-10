"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SearchModal from "./SearchModal";

const navItems = [
  {
    label: "Solutions",
    href: "/solutions",
    dropdown: [
      { label: "ConvokeAI", href: "/solutions/convoke-ai" },
      { label: "Factory of the Future", href: "/solutions/factory-of-future" },
      { label: "Manufacturing Operations Management", href: "/solutions/manufacturing-operations" },
      { label: "Product Lifecycle Management", href: "/solutions/product-lifecycle" },
      { label: "Digital Manufacturing", href: "/solutions/digital-manufacturing" },
      { label: "SAP Implementation Integration Services", href: "/solutions/sap-integration" },
      { label: "Cloud Services", href: "/solutions/cloud-services" },
      { label: "Analytics", href: "/solutions/analytics" },
      { label: "Intelligent Finance", href: "/solutions/intelligent-finance" },
      { label: "IOT & Big Data", href: "/solutions/iot-big-data" },
      { label: "Mobile Engineering", href: "/solutions/mobile-engineering" },
    ]
  },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Managed Services", href: "/services/managed-services" },
      { label: "Consulting Services", href: "/services/consulting-services" },
      { label: "On Demand Services", href: "/services/on-demand-services" },
    ]
  },
  {
    label: "Products",
    href: "/products",
    dropdown: [
      { label: "MDSLite", href: "/products/mdslite" },
      { label: "FLEXMOBEX", href: "/products/flexmobex" },
      { label: "ITECH MOBILE", href: "/products/itech-mobile" },
      { label: "FlexPod", href: "/products/flexpod" },
      { label: "FlexUtility", href: "/products/flexutility" },
      { label: "Transport Migration Utility", href: "/products/transport-migration" },
      { label: "Real Estate Management Integration", href: "/products/real-estate-management" },
    ]
  },
  { label: "AI Services", href: "/ai-services", dropdown: null },
  { label: "Industries", href: "/industries", dropdown: null },
  { label: "About Us", href: "/about", dropdown: null },
  { label: "Careers", href: "/careers", dropdown: null },
  { label: "Contact Us", href: "/contact", dropdown: null }
];

function NavItem({ item }: { item: typeof navItems[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={item.href}
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors ${isOpen ? 'text-orange-500' : 'text-gray-300 hover:text-white'}`}
      >
        {item.label}
        {item.dropdown && <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
      </Link>

      <AnimatePresence>
        {isOpen && item.dropdown && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 mt-4 min-w-[280px] py-3 bg-zinc-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10 overflow-hidden z-50"
          >
            {item.dropdown.map((subItem, idx) => (
              <Link
                key={idx}
                href={subItem.href}
                className="block px-5 py-3 text-sm text-gray-300 hover:bg-white/5 hover:text-orange-500 transition-colors"
              >
                {subItem.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
        {/* Glassmorphism Capsule Container */}
        <div className="px-6 py-3 bg-black/40 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl shadow-black/20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1">
              <span className="text-2xl font-bold">
                <span className="text-orange-500">S</span>
                <span className="text-white">b</span>
                <span className="text-green-500">S</span>
              </span>
              <span className="text-[10px] text-gray-400 leading-tight ml-1">beyond IT</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center">
              {navItems.map((item, idx) => (
                <NavItem key={idx} item={item} />
              ))}
            </div>

            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden lg:flex items-center justify-center w-10 h-10 text-gray-400 hover:text-white transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mobile Toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-white p-2">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 p-4 bg-black/80 backdrop-blur-xl rounded-2xl border border-white/10 max-h-[70vh] overflow-y-auto"
            >
              {navItems.map((item, idx) => (
                <div key={idx} className="border-b border-white/5 last:border-0">
                  <button
                    onClick={() => item.dropdown ? setMobileDropdown(mobileDropdown === item.label ? null : item.label) : setMobileOpen(false)}
                    className="w-full flex items-center justify-between py-3 text-gray-300"
                  >
                    <Link href={item.href} className="font-medium hover:text-orange-500">{item.label}</Link>
                    {item.dropdown && <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === item.label ? 'rotate-180' : ''}`} />}
                  </button>

                  <AnimatePresence>
                    {mobileDropdown === item.label && item.dropdown && (
                      <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                        <div className="pl-4 pb-3 space-y-2">
                          {item.dropdown.map((subItem, subIdx) => (
                            <Link key={subIdx} href={subItem.href} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-gray-500 hover:text-orange-500">
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
