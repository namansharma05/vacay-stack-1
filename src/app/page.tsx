"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
  Globe,
  MessageSquare,
  BarChart3,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden mesh-gradient">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="hero-glow" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-8 max-w-5xl mx-auto leading-[1.05]">
              Turn Your Rental Into a{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-600 to-accent animate-gradient-x">
                  Direct Booking Machine
                </span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/10 -z-10 blur-lg" />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Stop paying 20% commission. Build a high-converting website,
              automate your operations, and scale your independent rental brand.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/contact">
                <Button
                  variant="premium"
                  size="xl"
                  className="w-full sm:w-auto shadow-2xl shadow-accent/20"
                >
                  Book a Free Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/features">
                <Button
                  variant="outline"
                  size="xl"
                  className="w-full sm:w-auto glass hover:bg-white/50"
                >
                  See Live Demo
                </Button>
              </Link>
            </div>

            <div className="mt-24 relative mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="rounded-2xl border border-white/40 bg-white/40 backdrop-blur-3xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] premium-shadow"
              >
                <div className="bg-white/50 p-3 border-b border-white/20 flex items-center gap-2">
                  <div className="flex gap-2 ml-3">
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                    <div className="w-3 h-3 rounded-full bg-slate-200" />
                  </div>
                  <div className="mx-auto bg-white/80 rounded-lg px-6 py-1 text-[11px] font-medium text-slate-500 border border-slate-200 shadow-sm">
                    your-rental-brand.com
                  </div>
                </div>
                <div className="aspect-[16/9] bg-slate-50 flex items-center justify-center relative group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/[0.05] to-transparent pointer-events-none" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-24 h-24 rounded-3xl bg-white shadow-xl flex items-center justify-center mb-6 border border-slate-100">
                      <BarChart3 className="h-12 w-12 text-accent" />
                    </div>
                    <div className="h-2 w-32 bg-slate-200 rounded-full mb-2" />
                    <div className="h-2 w-24 bg-slate-100 rounded-full" />
                  </div>

                  {/* Floating glass elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-1/4 p-6 glass rounded-2xl shadow-xl w-48 border border-white/50 z-20"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Zap className="h-4 w-4 text-accent" />
                      </div>
                      <div className="h-2 w-16 bg-slate-200 rounded-full" />
                    </div>
                    <div className="h-4 w-full bg-slate-100 rounded mb-2" />
                    <div className="h-4 w-2/3 bg-slate-100 rounded" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute bottom-1/4 right-1/4 p-6 glass rounded-2xl shadow-xl w-56 border border-white/50 z-20"
                  >
                    <div className="h-2 w-24 bg-slate-200 rounded-full mb-4" />
                    <div className="flex gap-2">
                      <div className="flex-1 h-12 bg-accent/5 rounded-lg border border-accent/10" />
                      <div className="flex-1 h-12 bg-slate-50 rounded-lg border border-slate-100" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof / Stats Section */}
      <section className="py-20 bg-white/40 backdrop-blur-md border-y border-slate-200/60 relative z-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "OTA Fees Saved", value: "15-20%" },
              { label: "Bookings Increase", value: "35%+" },
              { label: "Active Hosts", value: "12,000+" },
              { label: "Revenue Processed", value: "$450M+" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <p className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground/80">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-24 md:py-40 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-24">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Everything You Need <br />
              <span className="text-muted-foreground/40">
                to Own Your Growth.
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We provide the enterprise-grade tools used by boutique hotels, now
              perfected for independent hosts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Custom Booking Website",
                desc: "Elegant, high-converting websites optimized for desktop and mobile.",
                icon: Globe,
                span: "lg:col-span-2",
              },
              {
                title: "Integrated Payments",
                desc: "Direct Stripe integration. Receive payouts instantly.",
                icon: Shield,
                span: "lg:col-span-1",
              },
              {
                title: "Automated Messaging",
                desc: "Welcome guests automatically.",
                icon: MessageSquare,
                span: "lg:col-span-1",
              },
              {
                title: "Channel Manager",
                desc: "Two-way sync with Airbnb, Vrbo, and Booking.com.",
                icon: Zap,
                span: "lg:col-span-1",
              },
              {
                title: "Search Optimized",
                desc: "Outrank the OTAs on Google Travel.",
                icon: Layers,
                span: "lg:col-span-1",
              },
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={cn(
                  "p-10 rounded-[2rem] border border-slate-200/60 bg-white/70 backdrop-blur-sm hover:bg-white transition-all duration-500 premium-shadow group cursor-default",
                  feature.span,
                )}
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-accent/10 flex items-center justify-center mb-8 text-slate-400 group-hover:text-accent transition-colors duration-500">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-48 bg-slate-50/50 relative overflow-hidden">
        <div className="hero-glow opacity-30" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-[1.1]">
                Hosts Own the <br />
                <span className="text-accent underline decoration-accent/20 underline-offset-8">
                  Guest Relationship
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Platforms like Airbnb hide guest data. We give it back to you.
                Build your own email list, drive repeat bookings, and protect
                your business from algorithm changes.
              </p>
              <div className="space-y-8">
                {[
                  "Zero host commissions on direct bookings",
                  "Full ownership of guest data and emails",
                  "10-minute setup with instant theme previews",
                  "24/7 dedicated support for professional hosts",
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-lg font-semibold text-foreground/80">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 p-4 sm:p-8 glass rounded-[2.5rem] border border-white shadow-2xl premium-shadow overflow-hidden">
                <div className="aspect-[4/5] sm:aspect-square bg-slate-50 rounded-2xl border border-slate-100 flex flex-col overflow-hidden">
                  <div className="h-12 bg-white border-b border-slate-100 flex items-center px-6 gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  </div>
                  <div className="flex-1 p-8 flex flex-col">
                    <div className="w-3/4 h-8 bg-slate-200 rounded-lg mb-6 animate-pulse" />
                    <div className="space-y-4 mb-12">
                      <div className="w-full h-12 bg-white rounded-xl border border-slate-100 flex items-center px-4">
                        <div className="w-4 h-4 rounded bg-slate-100 mr-3" />
                        <div className="w-32 h-2 bg-slate-100 rounded-full" />
                      </div>
                      <div className="w-full h-12 bg-white rounded-xl border border-slate-100 flex items-center px-4">
                        <div className="w-4 h-4 rounded bg-slate-100 mr-3" />
                        <div className="w-32 h-2 bg-slate-100 rounded-full" />
                      </div>
                    </div>

                    <div className="mt-auto h-16 w-full bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-lg shadow-xl shadow-primary/20">
                      Confirm Direct Booking
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative backgrounds */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent/20 blur-[100px] -z-10" />
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 blur-[100px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-56 relative overflow-hidden mesh-gradient">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-6xl md:text-8xl font-bold mb-10 tracking-tight leading-[0.95]">
              Start Scaling <br />
              <span className="text-accent underline decoration-accent/20 underline-offset-8">
                Directly.
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
              Join the thousands of professional hosts who have reclaimed their
              business independence with HostDirect.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link href="/contact">
                <Button
                  variant="premium"
                  size="xl"
                  className="h-16 px-12 text-lg font-bold shadow-2xl shadow-accent/20"
                >
                  Get Started Now
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="ghost"
                  size="xl"
                  className="h-16 text-lg font-bold hover:bg-white/50"
                >
                  Book a Strategy Call
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating background labels */}
        <div className="absolute top-24 left-[10%] glass px-6 py-3 rounded-full border border-white/50 text-sm font-bold text-accent shadow-xl rotate-[-12deg] opacity-40">
          Zero Commissions
        </div>
        <div className="absolute bottom-24 right-[10%] glass px-6 py-3 rounded-full border border-white/50 text-sm font-bold text-primary shadow-xl rotate-[8deg] opacity-40">
          OTA Independent
        </div>
      </section>
    </div>
  );
}
