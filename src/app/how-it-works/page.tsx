"use client";

import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  Search, 
  Lock, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  Box,
  Split,
  Smartphone,
  Fingerprint
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

export default function HowItWorksPage() {
  const steps = [
    {
      icon: <Box className="w-8 h-8" />,
      title: "1. Mint Listing NFT",
      desc: "Sellers create a WarrantyItem NFT on Sui. This NFT holds the metadata (photos, condition) and is visible in any wallet or explorer."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "2. Lock Funds",
      desc: "Buyers lock the full purchase price into the NFT's balance. This creates a secure, on-chain escrow that neither party can withdraw unilaterally."
    },
    {
      icon: <Split className="w-8 h-8" />,
      title: "3. Partial Settlement",
      desc: "The unique feature: Buyers can decide to release only a portion of funds if the item condition isn't as described. The rest auto-refunds."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "4. Finalize & Burn",
      desc: "Once settlement is executed, the smart contract distributes funds and marks the transaction as completed on the blockchain."
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-white">
      {/* Hero */}
      <section className="py-20 bg-blue-50/50 border-y border-blue-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">The Partial Settlement Protocol</h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Built on the Sui blockchain, Warranty on Chain replaces middle-men with immutable smart contract logic. 
            <strong> You control the funds.</strong>
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-white border border-zinc-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm group-hover:shadow-lg group-hover:border-blue-200 transition-all">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-4">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partial Settlement Detail */}
      <section className="py-24 bg-zinc-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[150px]" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="bg-white rounded-[3rem] p-8 md:p-12 text-zinc-900 relative">
               <div className="absolute top-8 right-8 w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                  <Split className="w-6 h-6" />
               </div>
               <h3 className="text-3xl font-black mb-8 leading-tight">Why Partial Settlement?</h3>
               <div className="space-y-6">
                  <div className="flex gap-4">
                     <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4" />
                     </div>
                     <p className="text-zinc-600 text-sm">
                        <strong>Negotiate post-delivery:</strong> If a laptop has a scratch not mentioned, offer $1,300 instead of $1,400.
                     </p>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4" />
                     </div>
                     <p className="text-zinc-600 text-sm">
                        <strong>Instant Refund:</strong> The $100 difference is auto-refunded to the buyer immediately by the smart contract.
                     </p>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4" />
                     </div>
                     <p className="text-zinc-600 text-sm">
                        <strong>No Disputes:</strong> Avoid weeks of platform mediation. Settle directly on-chain.
                     </p>
                  </div>
               </div>
               <div className="mt-10 p-4 bg-zinc-50 rounded-2xl border border-zinc-100 font-mono text-[10px] text-zinc-400">
                  // finalize_and_split function<br/>
                  transfer(seller_amount, seller);<br/>
                  transfer(balance - seller_amount, buyer);
               </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Shared Objects & Discoverability</h2>
              <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
                Traditional escrows are hidden in private databases. On Sui, every listing is a <strong>Shared Object</strong>. 
                This means any wallet, explorer, or marketplace can discover and interact with your warranty item.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <Fingerprint className="w-6 h-6 text-blue-400 mb-4" />
                  <h4 className="font-bold mb-2">Display Standard</h4>
                  <p className="text-[11px] text-zinc-500">Rich metadata (name, image) rendered natively in Sui Wallet.</p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <Smartphone className="w-6 h-6 text-green-400 mb-4" />
                  <h4 className="font-bold mb-2">Wallet Integration</h4>
                  <p className="text-[11px] text-zinc-500">Manage your active escrows directly from your mobile wallet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Protection Rules */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-zinc-900 mb-12 text-center">Smart Contract Protections</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-6 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-4">Buyer Rules</h4>
                <ul className="space-y-3 text-sm text-zinc-500">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-blue-500" />
                    Funds locked in immutable Shared Object
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-blue-500" />
                    Sole permission to execute settlement
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-blue-500" />
                    Auto-refund capability built-in
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-green-600 mb-6 shadow-sm">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-4">Seller Rules</h4>
                <ul className="space-y-3 text-sm text-zinc-500">
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-green-500" />
                    Verified locked balance before shipping
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-green-500" />
                    Instant distribution after buyer approval
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-green-500" />
                    No chargeback risk once completed
                  </li>
                </ul>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-zinc-100">
                <AccordionTrigger className="text-left font-bold py-6 hover:no-underline">
                  What currencies are supported?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-500 leading-relaxed pb-6">
                  The protocol uses generic type parameters for coin support. This means it can handle SUI, USDC, or any other fungible token on the Sui network.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2" className="border-zinc-100">
                <AccordionTrigger className="text-left font-bold py-6 hover:no-underline">
                  Is there a time limit for the buyer?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-500 leading-relaxed pb-6">
                  Yes, every listing has a defined inspection period. If the buyer doesn't take action within that window, a fail-safe function can be triggered to release the full amount to the seller.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 border-t border-zinc-100">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <Fingerprint className="w-12 h-12 text-zinc-300 mx-auto mb-6" />
          <h2 className="text-2xl font-bold mb-4 text-zinc-900">Ready to trade on-chain?</h2>
          <p className="text-zinc-500 mb-8">Join the marketplace where the code is the escrow agent.</p>
          <div className="flex items-center justify-center gap-4">
            <Button asChild variant="outline" className="rounded-full px-8 h-12 border-zinc-200">
               <Link href="/dashboard">Create Listing</Link>
            </Button>
            <Button asChild className="rounded-full px-8 h-12 bg-blue-600 hover:bg-blue-500">
               <Link href="/marketplace">Browse Marketplace</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
