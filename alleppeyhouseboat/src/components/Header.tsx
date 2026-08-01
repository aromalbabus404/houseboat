"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Houseboats", href: "/houseboats" },
  { name: "Packages", href: "/packages" },
  { name: "Activities", href: "/activities" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Scroll threshold to trigger pill navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* OUTER HEADER WRAPPER */}
      <div className="fixed top-0 inset-x-0 z-50 pointer-events-none px-4 transition-all duration-300">
        <motion.header
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`w-full pointer-events-auto transition-all duration-300 ${
            scrolled
              ? "max-w-4xl mx-auto rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-primary/10 mt-4 px-6 py-2"
              : "max-w-7xl mx-auto bg-bg-cream/90 backdrop-blur-sm border-b border-primary/5 py-4 px-6 mt-0"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-baseline gap-1">
              <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-primary">
                Alleppy Houseboat
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-full font-sans text-xs font-bold tracking-wide uppercase transition-colors duration-300 ${
                      isActive ? "text-primary-dark z-10" : "text-charcoal/70 hover:text-primary"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTabBackground"
                        className="absolute inset-0 bg-[#cdeed6] rounded-full -z-10 border border-primary/5"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop WhatsApp & Call */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+917356462150"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/5 hover:bg-primary/10 text-charcoal transition"
                title="Call Helpline"
              >
                <Phone className="w-3.5 h-3.5 text-accent" />
              </a>
              <a
                href={`https://wa.me/917356462150?text=${encodeURIComponent(
                  "Hi! I want to book a houseboat in Alleppey."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary hover:bg-primary-light text-white font-sans font-bold text-xs shadow-sm transition duration-150 active:scale-95"
              >
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-charcoal hover:text-primary transition focus:outline-none"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5.5 h-5.5" />
            </button>
          </div>
        </motion.header>
      </div>

      {/* Spacer to avoid content jumps when header is fixed */}
      <div className="w-full h-[72px]" />

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black z-[100]"
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-[80%] max-w-[360px] bg-bg-cream z-[101] shadow-2xl flex flex-col p-8 border-l border-primary/10"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-serif text-lg font-bold text-primary">Menu</span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-charcoal hover:text-primary focus:outline-none"
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile links */}
              <nav className="flex flex-col gap-1.5">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`relative font-sans text-xs font-bold uppercase tracking-wider py-3.5 px-4 rounded-xl transition duration-150 flex items-center min-h-[44px] ${
                        isActive
                          ? "text-primary-dark z-10"
                          : "text-charcoal/80 hover:bg-primary/5 hover:text-primary"
                      }`}
                    >
                      <span className="relative z-10">{link.name}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeMobileTab"
                          className="absolute inset-0 bg-[#cdeed6] rounded-xl -z-10 border border-primary/5"
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>

              {/* Drawer footer info */}
              <div className="mt-auto pt-8 border-t border-primary/10 flex flex-col gap-4">
                <a
                  href="tel:+917356462150"
                  className="flex items-center gap-3 py-2 px-3 rounded-lg text-charcoal/80 text-sm font-sans min-h-[44px]"
                >
                  <Phone className="w-5 h-5 text-accent" />
                  <span>Call Us</span>
                </a>
                <a
                  href={`https://wa.me/917356462150?text=${encodeURIComponent(
                    "Hi! I want to book a houseboat in Alleppey."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-sans font-bold text-sm shadow-md min-h-[44px]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg 
                    className="w-5 h-5 fill-current" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.806-9.799.002-2.618-1.01-5.078-2.855-6.924C16.379 2.036 13.924 1.02 11.3 1.02c-5.41 0-9.81 4.396-9.813 9.801-.001 1.516.402 2.999 1.168 4.321L1.692 20.3l5.086-1.332L6.647 19.16zM17.186 14.156c-.288-.144-1.7-.84-1.962-.936-.263-.096-.454-.144-.646.144-.19.288-.737.936-.903 1.127-.166.19-.333.216-.62.072-.288-.144-1.215-.448-2.316-1.43-.856-.764-1.434-1.708-1.602-1.995-.168-.288-.018-.444.126-.587.13-.13.288-.336.43-.504.143-.168.19-.288.286-.48.096-.19.048-.36-.024-.504-.072-.144-.646-1.56-.885-2.136-.232-.558-.468-.48-.646-.489-.167-.008-.36-.01-.55-.01-.19 0-.5.072-.762.36-.263.288-1.003.98-1.003 2.392 0 1.412 1.028 2.776 1.171 2.969.144.19 2.023 3.09 4.9 4.332.684.296 1.218.473 1.635.606.688.219 1.314.188 1.81.114.553-.083 1.7-.696 1.94-1.368.24-.672.24-1.248.168-1.368-.072-.12-.264-.192-.552-.336z"/>
                  </svg>
                  <span>WhatsApp Booking</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
