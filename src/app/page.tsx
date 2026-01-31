"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Search,
  ArrowRight,
  Shield,
  CheckCircle2,
  Lock,
  RotateCcw,
  Laptop,
  Smartphone,
  Tablet,
  Cpu,
  Split,
  Box
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function LandingPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zinc-100 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 border-blue-100 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 mr-2" />
              Decentralized Escrow on Sui
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
              The gadget marketplace with <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">on-chain</span> trust.
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Buy and sell used electronics using NFT-based warranties. Featuring <strong>Partial Settlement</strong>—you decide the final price after inspection.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 h-12 text-base bg-zinc-900 hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200">
                <Link href="/marketplace">
                  Browse Gadgets <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-12 text-base border-zinc-200 hover:bg-zinc-50">
                <Link href="/dashboard">Create Listing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-12 border-y border-zinc-100 bg-zinc-50/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-zinc-900 font-mono tracking-tight">USDC</div>
              <div className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold mt-1">Native Settlement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-zinc-900">100%</div>
              <div className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold mt-1">On-Chain Verifiable</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-zinc-900">NFT</div>
              <div className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold mt-1">Listing Standard</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-zinc-900">Partial</div>
              <div className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-bold mt-1">Release Protocol</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">How Warranty on Chain Works</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">
              A transparent escrow system powered by Sui smart contracts and NFT discovery.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Box className="w-6 h-6 text-blue-600" />,
                title: "1. Mint Listing NFT",
                desc: "Sellers create a WarrantyItem NFT on Sui. Visible in any wallet or explorer."
              },
              {
                icon: <Lock className="w-6 h-6 text-blue-600" />,
                title: "2. Lock Funds",
                desc: "Buyer locks the full price into the NFT. The item is now secured on-chain."
              },
              {
                icon: <Split className="w-6 h-6 text-blue-600" />,
                title: "3. Partial Settlement",
                desc: "After inspection, buyer approves the final amount. The rest is auto-refunded."
              },
              {
                icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />,
                title: "4. Finalize & Burn",
                desc: "Funds are distributed instantly and the escrow status is updated to completed."
              }
            ].map((step, i) => (
              <motion.div key={i} variants={item} className="p-8 rounded-[2rem] bg-zinc-50 border border-zinc-100 hover:border-blue-100 hover:bg-white transition-all group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all border border-zinc-50">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-zinc-900 mb-3">{step.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Unique Feature: Partial Settlement */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[150px]" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 mb-6 rounded-full px-4 py-1">Exclusive Feature</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Total Control with <span className="text-blue-400">Partial Settlement</span></h2>
              <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
                Traditional escrow is all-or-nothing. With Warranty on Chain, buyers can settle for a portion of the price if the device condition isn't perfect—auto-refunding the difference instantly.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-zinc-300 font-medium">No more messy dispute mediation</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-zinc-300 font-medium">Instant auto-refunds for buyers</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-zinc-300 font-medium">Transparent settlement history on Sui</span>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[3rem]">
              <div className="space-y-8">
                <div className="flex justify-between items-center pb-6 border-b border-white/10">
                  <div className="text-sm font-bold uppercase tracking-widest text-zinc-500">Escrow Balance</div>
                  <div className="text-2xl font-black">1000 USDC</div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Release to Seller</span>
                    <span className="text-blue-400 font-bold">600 USDC</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[60%]" />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Auto-refund to Buyer</span>
                    <span className="text-green-400 font-bold">400 USDC</span>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-500 h-12 rounded-2xl font-bold">
                  Execute Partial Settlement
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">On-Chain Inventory</h2>
              <p className="text-zinc-500 max-w-xl">
                Browse gadgets listed as shared objects on Sui. Every item is an NFT you can verify.
              </p>
            </div>
            <Button variant="ghost" className="text-zinc-900 font-semibold group p-0 hover:bg-transparent">
              View full marketplace <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Laptops", icon: <Laptop className="w-8 h-8" /> },
              { name: "Phones", icon: <Smartphone className="w-8 h-8" /> },
              { name: "Tablets", icon: <Tablet className="w-8 h-8" /> },
              { name: "Hardware", icon: <Cpu className="w-8 h-8" /> }
            ].map((cat, i) => (
              <Link key={i} href="/marketplace" className="group p-8 bg-zinc-50 border border-zinc-100 rounded-[2.5rem] flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all hover:bg-white hover:border-blue-100">
                <div className="mb-6 text-zinc-400 group-hover:text-blue-600 transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-1">{cat.name}</h3>
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider">Verifiable NFT</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-zinc-900 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready for trust-less gadget trading?</h2>
              <p className="text-zinc-400 text-lg mb-12">
                Join the next generation of C2C commerce. Built on Sui, protected by smart contracts, and controlled by you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full px-8 h-14 text-lg bg-blue-600 text-white hover:bg-blue-500 w-full sm:w-auto border-none shadow-lg shadow-blue-900/20">
                  <Link href="/marketplace">Start Shopping</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-zinc-700 hover:bg-zinc-800 w-full sm:w-auto text-white">
                  <Link href="/dashboard">Create a Listing</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
