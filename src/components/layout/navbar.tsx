"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 z-50 w-full px-4 sm:px-6 lg:px-8 pointer-events-none">
      <nav
        style={{
          backgroundColor: isScrolled
            ? "lab(55.0481% -49.9246 15.93)"
            : undefined,
        }}
        className={cn(
          "mx-auto max-w-7xl flex items-center justify-between px-6 pointer-events-auto transition-all duration-600 border h-16",
          isScrolled
            ? "rounded-2xl border-transparent shadow-[0_20px_50px_rgba(45,134,115,0.3)]"
            : "glass rounded-2xl",
        )}
      >
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div
              className={cn(
                "p-2 rounded-xl transition-all duration-600",
                isScrolled ? "bg-white/20" : "bg-primary",
              )}
            >
              <Home
                className={cn(
                  "h-5 w-5",
                  isScrolled ? "text-white" : "text-primary-foreground",
                )}
              />
            </div>
            <span
              className={cn(
                "text-xl font-bold tracking-tight transition-colors duration-600",
                isScrolled ? "text-white" : "text-foreground",
              )}
            >
              VacayStack
            </span>
          </Link>
        </div>

        <div className="hidden md:block">
          <div className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-bold rounded-xl transition-all duration-600",
                  pathname === link.href
                    ? isScrolled
                      ? "text-white bg-white/20"
                      : "text-accent bg-accent/5"
                    : isScrolled
                      ? "text-white/70 hover:text-white hover:bg-white/10"
                      : "text-muted-foreground hover:bg-slate-100",
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact">
            <Button
              variant="premium"
              size="sm"
              className={cn(
                "font-bold px-6 transition-all duration-600",
                isScrolled
                  ? "bg-white text-emerald-900 border-none hover:bg-white/90 shadow-none from-white to-white"
                  : "",
              )}
            >
              Get Started
            </Button>
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "p-2 rounded-xl transition-colors duration-600",
              isScrolled
                ? "text-white hover:bg-white/10"
                : "text-muted-foreground hover:bg-slate-100",
            )}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              style={{
                backgroundColor: isScrolled
                  ? "lab(55.0481% -49.9246 15.93)"
                  : undefined,
              }}
              className={cn(
                "absolute top-20 left-0 right-0 p-6 shadow-2xl overflow-hidden rounded-2xl transition-all duration-600",
                isScrolled
                  ? "border border-transparent"
                  : "glass border border-white/40",
              )}
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-3 text-base font-bold rounded-xl transition-all duration-600",
                      pathname === link.href
                        ? isScrolled
                          ? "text-white bg-white/20"
                          : "text-accent bg-accent/5"
                        : isScrolled
                          ? "text-white/70 hover:text-white"
                          : "text-muted-foreground hover:bg-slate-50",
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 flex flex-col gap-3">
                  <Button
                    variant={isScrolled ? "secondary" : "premium"}
                    className={cn(
                      "w-full rounded-xl font-bold",
                      isScrolled
                        ? "bg-white text-emerald-900 border-none hover:bg-white/90"
                        : "",
                    )}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
