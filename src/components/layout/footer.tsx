import Link from "next/link";
import {
  Home,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Demo", href: "/contact" },
    { name: "Integrations", href: "#" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-slate-50/50 border-t border-slate-200/60 py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-16">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-8">
              <div className="bg-primary p-2 rounded-xl">
                <Home className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-foreground">
                Host<span className="text-accent">Direct</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-xs mb-8 text-base leading-relaxed">
              Empowering vacation rental hosts to reclaim their independence
              with direct booking engines that drive exponential growth.
            </p>
            <div className="flex space-x-5">
              {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
                <Icon
                  key={i}
                  className="h-5 w-5 text-slate-400 hover:text-accent cursor-pointer transition-all hover:scale-110"
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-[0.2em] mb-6">
              Product
            </h3>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-foreground uppercase tracking-[0.2em] mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-[0.2em] mb-6">
              Legal
            </h3>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-accent transition-colors font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-slate-200/60 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm font-medium text-slate-400 italic">
            © {new Date().getFullYear()} VacayStack. All rights reserved. Built
            for professional Hosts.
          </p>
          <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm text-sm font-semibold text-slate-600">
            <Mail className="h-4 w-4 text-accent" />
            <span>hello@vacaystack.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
