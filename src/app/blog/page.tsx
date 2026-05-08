"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    id: "personalization-marketing-science",
    title: "The Science of Making It Personal: How AI Is Rewriting Marketing's Most Misunderstood Discipline",
    excerpt: "From RFM scores to reinforcement learning, and what comes after the cookie crumbles.",
    date: "May 2026",
    category: "Marketing Science",
    readTime: "8 min read"
  }
];

export default function BlogInventory() {
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

      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <header className="mb-20 pt-12">
            <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter mb-8 leading-tight">
              Thoughts & <br />Observations
            </h1>
            <div className="space-y-2 text-xl md:text-2xl text-muted-foreground font-medium leading-tight tracking-tight max-w-2xl">
              <p>I write about AI, marketing science, and measurement for growth-stage teams.</p>
              <p>Follow along at <a href="https://asksaumya.com" className="text-foreground hover:italic transition-all">asksaumya.com</a>.</p>
            </div>
          </header>

          {/* Blog Feed */}
          <div className="border-t border-foreground pt-12">
            <div className="space-y-24">
              {blogPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="group block">
                  <article className="relative">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6">
                          <span>{post.category}</span>
                          <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                          <span className="text-muted-foreground">{post.date}</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter mb-6 group-hover:italic transition-all duration-300">
                          {post.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-snug tracking-tight mb-8 max-w-2xl">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center text-xs font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                          Read Article <ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </div>
                      <div className="hidden md:block text-right">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/40">
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
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