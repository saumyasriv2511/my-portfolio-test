"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5 px-6 py-4">
        <div className="container-custom flex justify-between items-center">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tighter">
            Saumya Srivastava
          </Link>
          <div className="hidden md:flex space-x-12 items-center">
            <Link href="/#services" className="nav-link">Expertise</Link>
            <Link href="/#impact" className="nav-link">Impact</Link>
            <Link href="/blog" className="nav-link text-foreground">Blog</Link>
            <Link href="/#about" className="nav-link">About</Link>
            <Link href="/#contact" className="nav-link border border-foreground px-5 py-2 rounded-full hover:bg-foreground hover:text-background transition-all">
              Work With Me
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 container-custom min-h-[80vh]">
        <div className="mb-12 pt-12">
          <Link href="/" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter mb-6">
            Thoughts & Observations
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium leading-snug">
            Writing on marketing analytics, AI strategy, and the mechanics of data-driven growth.
          </p>
        </div>

        {/* Placeholder for future blog posts */}
        <div className="border-t border-foreground/10 pt-16">
          <div className="text-center py-24 bg-secondary-bg border border-foreground/5 rounded-2xl">
            <p className="text-muted-foreground text-lg font-medium">No posts published yet.</p>
            <p className="text-sm text-muted-foreground/60 mt-2">Check back soon for insights and updates.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-foreground/5 bg-secondary-bg text-center text-muted-foreground text-[10px] font-bold uppercase tracking-[0.4em]">
        <div className="container-custom">
          <p>© 2026 Saumya Srivastava. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}