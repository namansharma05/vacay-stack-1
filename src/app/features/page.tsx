"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Calendar,
  MessageSquare,
  BarChart3,
  Globe,
  Zap,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Search,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Direct Booking Engine",
    description:
      "A lightning-fast, conversion-optimized booking engine that lives on your own domain. No OTA logos, no competitor listings.",
    icon: Globe,
    details: [
      "Instant booking or booking requests",
      "Custom automated taxes & fees",
      "Discount code engine",
      "Multi-unit support",
    ],
  },
  {
    title: "Stripe & Payment Integration",
    description:
      "Connect your own Stripe account and get paid instantly. Secure, PCI-compliant, and supports all major credit cards and digital wallets.",
    icon: CreditCard,
    details: [
      "Instant payouts",
      "Automated security deposits",
      "Split payments",
      "SCA compliant",
    ],
  },
  {
    title: "Calendar & Channel Sync",
    description:
      "Two-way iCal and API sync with Airbnb, Vrbo, and Booking.com. Update availability across all platforms in seconds.",
    icon: Calendar,
    details: [
      "Real-time availability",
      "Centralized calendar view",
      "No double bookings",
      "Custom block-out periods",
    ],
  },
  {
    title: "Guest Messaging Automation",
    description:
      "Professional guest communication without the manual effort. Send customized messages triggered by booking events.",
    icon: MessageSquare,
    details: [
      "Booking confirmations",
      "Check-in instructions",
      "Post-stay review requests",
      "Templated responses",
    ],
  },
  {
    title: "Analytics Dashboard",
    description:
      "Actionable insights into your performance. Track revenue, occupancy, and booking sources in one clean interface.",
    icon: BarChart3,
    details: [
      "Revenue reports",
      "Occupancy tracking",
      "Guest geography mapping",
      "Exportable CSV data",
    ],
  },
  {
    title: "SEO Optimization",
    description:
      "Built-in SEO tools to help you outrank platforms on Google. Structured data and meta tags included out of the box.",
    icon: Search,
    details: [
      "Automated schema markup",
      "Custom meta descriptions",
      "Fast-loading mobile pages",
      "Sitemap generation",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="flex flex-col w-full pb-24 mesh-gradient">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden relative">
        <div className="hero-glow" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.95]">
              Tools for <br />
              <span className="text-accent underline decoration-accent/20 underline-offset-8">
                Superhosts.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Everything you need to manage your vacation rental business, grow
              your brand, and maximize your profits without the platform fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-10 rounded-[2.5rem] border border-slate-200/60 bg-white/60 backdrop-blur-md hover:bg-white transition-all duration-500 premium-shadow group hover:-translate-y-2"
              >
                <div className="mb-8 w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-accent/10 flex items-center justify-center text-slate-400 group-hover:text-accent transition-colors duration-500 shadow-sm">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-3">
                  {feature.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-center gap-3 text-sm font-semibold text-foreground/70"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-accent/40" />
                      {detail}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Callout */}
      <section className="py-24 md:py-48 relative overflow-hidden">
        <div className="hero-glow opacity-30" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-[3rem] border border-white p-12 md:p-24 relative overflow-hidden shadow-2xl premium-shadow">
            <div className="absolute top-0 right-0 p-12 opacity-5 scale-150">
              <Zap className="h-64 w-64 text-accent" />
            </div>

            <div className="max-w-3xl relative z-10">
              <h2 className="text-4xl md:text-7xl font-bold mb-10 tracking-tight leading-[0.95]">
                Ready to Grow <br />
                <span className="text-accent">Your Kingdom?</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-16 leading-relaxed">
                Join thousands of professional hosts already using VacayStack to
                power their direct booking business and reclaim their
                independence.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <Link href="/contact">
                  <Button
                    variant="premium"
                    size="xl"
                    className="h-16 px-12 text-lg font-bold shadow-2xl"
                  >
                    Get Started Now
                  </Button>
                </Link>
                <Link
                  href="/pricing"
                  className="text-lg font-bold text-foreground hover:text-accent transition-colors"
                >
                  View Pricing Plans →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
