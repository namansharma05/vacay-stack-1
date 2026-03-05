"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full pb-24 mesh-gradient">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden relative">
        <div className="hero-glow" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 mb-8">
                <span className="h-px w-8 bg-accent/30" />
                <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs">
                  Connect
                </span>
              </div>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-[0.95]">
                Get in <br />
                <span className="text-accent underline decoration-accent/20 underline-offset-[12px]">
                  Touch.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-16 max-w-lg leading-relaxed">
                Ready to reclaim your independence? Our team is standing by to
                help you build a scaling vacation rental brand.
              </p>

              <div className="space-y-12">
                {[
                  {
                    icon: Mail,
                    title: "Email Us",
                    value: "hello@vacaystack.com",
                  },
                  {
                    icon: MessageCircle,
                    title: "Live Support",
                    value: "Priority for pro hosts",
                  },
                  {
                    icon: MapPin,
                    title: "Our HQ",
                    value: "Barcelona & London",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-[1.25rem] bg-white/60 backdrop-blur-md border border-white shadow-xl flex items-center justify-center text-slate-400 group-hover:text-accent transition-all duration-500">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-1">
                        {item.title}
                      </h4>
                      <p className="text-2xl font-bold text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-8 md:p-16 rounded-[3rem] glass border border-white shadow-2xl premium-shadow relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 -rotate-12">
                <Send className="h-48 w-48 text-accent" />
              </div>

              <form
                className="relative z-10 space-y-8"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-foreground/70 ml-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full bg-white/50 border border-slate-200/60 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-foreground/70 ml-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      className="w-full bg-white/50 border border-slate-200/60 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-foreground/70 ml-2">
                    Interest
                  </label>
                  <select className="w-full bg-white/50 border border-slate-200/60 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all cursor-pointer appearance-none">
                    <option>Request a Demo</option>
                    <option>Product Inquiries</option>
                    <option>Partnership Opportunities</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-foreground/70 ml-2">
                    Properties Managed
                  </label>
                  <input
                    type="number"
                    placeholder="e.g. 5"
                    className="w-full bg-white/50 border border-slate-200/60 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-foreground/70 ml-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your business goals..."
                    className="w-full bg-white/50 border border-slate-200/60 rounded-2xl px-6 py-4 focus:outline-none focus:ring-4 focus:ring-accent/10 focus:border-accent transition-all resize-none"
                  />
                </div>

                <div className="pt-4">
                  <Button
                    variant="premium"
                    size="xl"
                    className="w-full h-16 text-lg font-bold shadow-2xl"
                  >
                    Submit Request
                    <Send className="ml-3 h-5 w-5" />
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground/60 text-center px-8">
                  By submitting this form, you acknowledge our data processing
                  agreement and terms of service.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
