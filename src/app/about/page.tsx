"use client";

import { motion } from "framer-motion";
import { Shield, Target, Users, Landmark, LandmarkIcon } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
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
              Own Your <br />
              <span className="text-accent underline decoration-accent/20 underline-offset-8">
                Direct Future.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              HostDirect was founded with a single mission: to break the
              dependency on massive platforms and give hosts the tools they need
              to build independent, profitable global brands.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32 items-center">
            <div className="relative group">
              <div className="absolute -inset-8 bg-accent/20 rounded-[3rem] blur-3xl group-hover:bg-accent/30 transition-all opacity-40 -z-10" />
              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden border border-white/50 bg-slate-50 shadow-2xl premium-shadow flex items-center justify-center p-12">
                <div className="w-full h-full bg-slate-100 rounded-3xl border border-slate-200/60 flex items-center justify-center">
                  <Target className="h-32 w-32 text-slate-300" />
                </div>
              </div>
            </div>

            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="h-px w-8 bg-accent/30" />
                <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs">
                  Our Vision
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold mb-10 tracking-tight leading-[1.1]">
                The future of <br />
                <span className="text-muted-foreground/40 italic">
                  hospitality is direct.
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                The vacation rental industry is at a crossroads. For too long,
                hosts have been at the mercy of platform algorithms, hidden
                fees, and restrictive policies. We're here to change that.
              </p>

              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/60 backdrop-blur-md border border-white shadow-xl flex items-center justify-center text-accent">
                    <Shield className="h-7 w-7" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">
                      Host Independence
                    </h4>
                    <p className="text-muted-foreground text-lg">
                      We build tools that put you in control, from guest data to
                      payment processing. No middlemen.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/60 backdrop-blur-md border border-white shadow-xl flex items-center justify-center text-accent">
                    <Users className="h-7 w-7" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">
                      Community Driven
                    </h4>
                    <p className="text-muted-foreground text-lg">
                      Every feature we ship is inspired by the real-world needs
                      of professional hosts across the globe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 md:py-48 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight">
              The HostDirect <span className="text-accent">Philosophy.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're not just a software company; we're a movement to empower the
              next generation of hospitality entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Tech-Focused",
                icon: Landmark,
                desc: "We leverage the latest in web technology to ensure your site is faster and more reliable than any OTA.",
              },
              {
                name: "Hospitality-Driven",
                icon: Users,
                desc: "We understand that hospitality is about people. Our tools are designed to enhance, not replace, the human touch.",
              },
              {
                name: "Growth-Oriented",
                icon: Target,
                desc: "Our success is measured by your success. We are built to help you scale from 1 property to 100 effortlessly.",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="p-10 rounded-[2.5rem] border border-slate-200/60 bg-white/60 backdrop-blur-md shadow-xl hover:bg-white transition-all duration-500 premium-shadow group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 group-hover:bg-accent/10 flex items-center justify-center text-slate-400 group-hover:text-accent mb-8 transition-colors">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                  {item.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
