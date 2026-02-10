import Link from "next/link";
import { ChevronRight, Building2, Twitter, Facebook, Linkedin, Mail } from "lucide-react";

const quickLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Industries We Serve", href: "/industries" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Why SBS?", href: "/about#why-sbs" },
  { label: "Leadership Team", href: "/about#leadership" },
  { label: "Contact Us", href: "/contact" },
];

const bottomLinks = [
  { label: "Office locations", href: "/locations" },
  { label: "Contact us", href: "/contact" },
  { label: "Privacy policy", href: "/privacy" },
  { label: "Cookie policy", href: "/cookies" },
  { label: "Terms of use", href: "/terms" },
  { label: "Cookie settings", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#141824] pt-16 pb-6 overflow-hidden">
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Decorative Dots */}
      <div className="absolute right-[15%] top-[20%] w-2 h-2 rounded-full bg-orange-500/60" />
      <div className="absolute right-[12%] bottom-[30%] w-2 h-2 rounded-full bg-orange-500/60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Careers Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Careers</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              SBS Corp is all about you. Whether you&apos;re just starting out or are an experienced professional, your future starts here.
            </p>
            <Link 
              href="/careers" 
              className="inline-block px-5 py-2.5 border border-orange-500 text-orange-500 font-medium text-sm rounded hover:bg-orange-500 hover:text-white transition-colors"
            >
              Explore SBS Corp Careers
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="flex items-center gap-2 text-gray-400 text-sm hover:text-orange-500 transition-colors group">
                    <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-orange-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Company</h3>
            <ul className="space-y-3 mb-8">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="flex items-center gap-2 text-gray-400 text-sm hover:text-orange-500 transition-colors group">
                    <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-orange-500" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* USA Headquarters */}
            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-orange-500 font-semibold text-sm mb-2">USA Headquarters</h4>
                <address className="text-gray-500 not-italic text-sm leading-relaxed">
                  16001 Park Ten Pl<br />
                  Suite 400L<br />
                  Houston, TX 77084<br />
                  United States
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Follow Us */}
        <div className="text-center mb-12">
          <h4 className="text-white font-semibold text-sm mb-4">Follow us</h4>
          <div className="flex justify-center gap-3">
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-800/80 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-800/80 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-800/80 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-zinc-800/80 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-500">
            {bottomLinks.map((link, idx) => (
              <Link key={idx} href={link.href} className="hover:text-gray-300 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <p className="text-xs text-gray-500">© 2025 SBS</p>
            {/* Chat Button */}
            <button className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
