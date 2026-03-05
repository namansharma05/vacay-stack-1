"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    description:
      "Perfect for hosts with 1-2 properties looking to start direct booking.",
    price: "29",
    features: [
      "1-2 Properties",
      "Direct Booking Engine",
      "iCal Calendar Sync",
      "Basic Stripe Payments",
      "Standard Guest Messaging",
      "Mobile Friendly Site",
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Pro",
    description: "Best for growing property managers and professional hosts.",
    price: "79",
    features: [
      "Up to 10 Properties",
      "Advanced API Channel Sync",
      "Automated Guest Messaging",
      "Advanced Analytics",
      "Custom SSL Domain",
      "Priority Email Support",
      "SEO Management Tools",
    ],
    cta: "Get Started Pro",
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large property management firms.",
    price: "Custom",
    features: [
      "Unlimited Properties",
      "Dedicated Account Manager",
      "Custom API Integrations",
      "White-label Branding",
      "Multi-user Access Control",
      "24/7 Phone Support",
      "Onboarding & Setup Service",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function PricingPage() {
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
              Simple, Transparent <br />
              <span className="text-accent underline decoration-accent/20 underline-offset-8">
                Value.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              No hidden fees. No guest commissions. Choose the plan that fuels
              your vacation rental independence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={cn(
                  "relative p-10 rounded-[2.5rem] border transition-all duration-500 flex flex-col h-full premium-shadow group",
                  plan.highlight
                    ? "border-accent/30 bg-white shadow-2xl scale-105 z-10"
                    : "border-slate-200/60 bg-white/60 backdrop-blur-md hover:bg-white",
                )}
              >
                {plan.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] shadow-xl">
                    Most Popular
                  </div>
                )}

                <div className="mb-10">
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-10 flex items-baseline gap-1">
                  <span className="text-6xl font-black tracking-tighter">
                    {plan.price !== "Custom" ? `$${plan.price}` : plan.price}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground text-xl font-medium">
                      /mo
                    </span>
                  )}
                </div>

                <div className="space-y-5 mb-12 flex-grow">
                  <div className="h-px w-full bg-slate-100 mb-6" />
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-4 text-sm font-medium"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant={plan.highlight ? "premium" : "outline"}
                  size="xl"
                  className={cn(
                    "w-full rounded-2xl h-16 font-bold text-lg transition-all duration-300",
                    plan.highlight ? "shadow-xl" : "border-slate-200",
                  )}
                  asChild
                >
                  <Link href="/contact">{plan.cta}</Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 p-12 rounded-[3rem] glass border border-white/60 text-center relative overflow-hidden"
          >
            <div className="hero-glow !top-1/2 !-translate-y-1/2 opacity-20" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 rounded-full bg-accent/5 border border-accent/10 text-accent">
                <Info className="h-5 w-5" />
                <h4 className="font-bold tracking-tight">
                  Zero guest commissions on all plans
                </h4>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                We believe hospitality entrepreneurs should keep their
                hard-earned money. Unlike massive platforms, we **never** take a
                cut of your direct bookings.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
