"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Users,
  Globe,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const showcase = [
  {
    title: "Villa Azura Santorini",
    category: "Luxury Estate",
    image: "/images/portfolio/luxury-villa.png",
    stats: "+42% Direct Bookings",
    metric: "Revenue increased by $120k in 6 months",
    tags: ["Custom Engine", "Stripe Payments", "SEO Optimized"],
  },
  {
    title: "Summit Lodge Retreat",
    category: "Mountain Cabin",
    image: "/images/portfolio/cozy-cabin.png",
    stats: "Zero OTA Fees",
    metric: "Saved $18,400 in platform commissions annually",
    tags: ["Channel Manager", "Automated Messaging", "Brand Identity"],
  },
  {
    title: "Coastal Escape",
    category: "Beach House",
    image: "/images/portfolio/beach-house.png",
    stats: "98% Occupancy",
    metric: "Fully booked 3 months in advance via direct channel",
    tags: ["Mobile First", "Instant Booking", "Guest Portal"],
  },
];

export default function PortfolioPage() {
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
              Websites That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-emerald-600 to-accent">
                Convert.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Discover how professional hosts are reclaimimg their independence
              and building premium global brands with HostDirect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Showcase Grid */}
      <section className="py-20 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-24 md:gap-40">
            {showcase.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-20 items-center`}
              >
                <div className="w-full lg:w-3/5 relative group">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-accent/20 to-primary/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative aspect-[16/10] rounded-[2rem] border border-white/50 overflow-hidden shadow-2xl premium-shadow bg-slate-50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-12">
                      <Button
                        variant="premium"
                        size="lg"
                        className="shadow-2xl h-14 px-8 font-bold"
                      >
                        Visit Live Site{" "}
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-2/5 flex flex-col">
                  <div className="inline-flex items-center gap-2 mb-6">
                    <span className="h-px w-8 bg-accent/30" />
                    <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                    {item.title}
                  </h3>

                  <div className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-white shadow-xl mb-8 group hover:border-accent/40 transition-colors">
                    <div className="flex items-center gap-3 mb-2">
                      <TrendingUp className="h-5 w-5 text-accent" />
                      <span className="font-bold text-xl text-foreground">
                        {item.stats}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.metric}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-10">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full bg-slate-50 text-slate-500 text-xs font-bold tracking-wide border border-slate-200/60 shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center text-lg font-bold text-foreground group"
                  >
                    <span className="underline decoration-accent/30 underline-offset-8 group-hover:decoration-accent transition-all">
                      Build a site like this
                    </span>
                    <ArrowRight className="ml-3 h-5 w-5 text-accent group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-32 md:py-48 relative overflow-hidden">
        <div className="hero-glow opacity-20" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                Real Results for <br />
                <span className="text-muted-foreground/40 text-background-clip">
                  Real Hosts.
                </span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our platform is designed with one goal: to maximize your net
                profit by removing third-party dependencies.
              </p>
            </div>
            <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-white shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">
                  Avg. Profit Increase
                </p>
                <p className="text-2xl font-bold text-foreground">
                  +18.4% Year-over-Year
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Independent Brand",
                desc: "100% ownership of your guest data, email lists, and booking policies.",
              },
              {
                icon: Users,
                title: "Higher Retention",
                desc: "Drive repeat bookings with direct loyalty incentives and personalized marketing.",
              },
              {
                icon: TrendingUp,
                title: "Increased Profit",
                desc: "Scale your revenue by eliminating OTA commissions and platform fees.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-10 rounded-[2.5rem] border border-slate-200/60 bg-white/60 backdrop-blur-md shadow-xl hover:bg-white transition-all duration-500 premium-shadow group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-accent/10 flex items-center justify-center text-slate-400 group-hover:text-accent mb-8 transition-colors duration-500">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-56 relative overflow-hidden mesh-gradient border-t border-slate-200/60">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-8xl font-bold mb-10 tracking-tight leading-[0.95]">
              Ready to Be <br />
              <span className="text-accent">Our Next Success?</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
              Schedule a demo today and see how HostDirect can transform your
              vacation rental business into a booking powerhouse.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link href="/contact">
                <Button
                  variant="premium"
                  size="xl"
                  className="h-16 px-12 text-lg font-bold shadow-2xl"
                >
                  Get Started
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="xl"
                  className="h-16 px-12 glass border-white/50 text-lg font-bold hover:bg-white/50"
                >
                  Learn About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative background labels */}
        <div className="absolute top-24 right-[15%] glass px-6 py-3 rounded-full border border-white/50 text-sm font-bold text-accent shadow-xl rotate-[10deg] opacity-30">
          Join the Future
        </div>
      </section>
    </div>
  );
}
