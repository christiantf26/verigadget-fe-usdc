import Link from "next/link";
import { ShieldCheck, Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="bg-zinc-900 text-white p-1 rounded-lg">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold tracking-tight text-zinc-900">
                VeriGadget
              </span>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              The safest C2C marketplace for used gadgets. Escrow-protected
              transactions with mandatory inspection windows.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 mb-6">Marketplace</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/marketplace" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Laptops
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Tablets
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 mb-6">Platform</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/how-it-works" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  How Escrow Works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Seller Guidelines
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Buyer Protection
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Safety Tips
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-zinc-900 mb-6">Support</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-zinc-500 hover:text-zinc-900 text-sm transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-400 text-xs">
            © 2026 VeriGadget. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-zinc-400 text-xs flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Network Status: Secure
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
