import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/content/blogs";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

function renderMarkdown(text: string) {
  return text.trim().split(/\n\s*\n/).map((block, index) => {
    const lines = block.trim().split("\n");
    const first = lines[0];
    if (first.startsWith("## ")) return <h2 key={index} className="text-3xl md:text-5xl font-serif font-bold tracking-tighter mt-16 mb-6">{first.slice(3)}</h2>;
    if (lines.every((line) => line.startsWith("- "))) return <ul key={index} className="list-disc pl-6 space-y-3 text-lg md:text-xl text-muted-foreground leading-relaxed">{lines.map((line) => <li key={line}>{line.slice(2)}</li>)}</ul>;
    if (first.startsWith("> ")) return <blockquote key={index} className="border-l-4 border-foreground pl-6 my-10 text-2xl md:text-3xl font-serif italic">{first.slice(2)}</blockquote>;
    return <p key={index} className="text-lg md:text-xl text-muted-foreground leading-relaxed">{lines.join(" ")}</p>;
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const [year, month] = post.date.split("-");
  const publishedLabel = `${monthNames[Number(month) - 1]} ${year}`;

  return <div className="min-h-screen bg-background text-foreground font-sans">
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5 px-6 py-4"><div className="container-custom flex justify-between items-center"><Link href="/" className="flex items-center gap-3 shrink-0"><img src="/logo-as-mark.png" alt="ASK SAUMYA Consulting logo" className="h-9 w-auto shrink-0" /><span className="flex flex-col leading-none"><span className="font-serif text-xl font-bold tracking-[0.08em]">ASK SAUMYA</span><span className="font-sans text-[10px] font-bold uppercase tracking-[0.35em] text-muted-foreground mt-1">Consulting</span></span></Link><div className="hidden md:flex space-x-8 items-center"><Link href="/#who-i-help" className="nav-link">Who I Help</Link><Link href="/#services" className="nav-link">Services</Link><Link href="/#impact" className="nav-link">Results</Link><Link href="/#process" className="nav-link">Process</Link><Link href="/#about" className="nav-link">About</Link><Link href="/blog" className="nav-link text-foreground">Insights</Link><a href="https://cal.com/asksaumya/intro-call" target="_blank" rel="noopener noreferrer" className="nav-link border border-foreground px-5 py-2 rounded-full hover:bg-foreground hover:text-background transition-all">Book a Call</a></div></div></nav>
    <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 container-custom"><div className="max-w-6xl mx-auto"><div className="flex flex-col lg:flex-row gap-16 lg:gap-24"><aside className="lg:w-1/4"><div className="sticky top-32 space-y-12"><div><h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-4">Focus Area</h4><p className="font-serif text-lg italic">{post.category}</p></div><div><h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4">Published</h4><p className="text-sm font-medium">{publishedLabel}</p></div><div><h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4">Follow Along</h4><a href="https://asksaumya.com" className="text-sm font-bold border-b border-foreground/10 hover:border-foreground transition-all">asksaumya.com</a></div></div></aside><article className="lg:w-3/4">
      <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-8"><span className="text-muted-foreground">{post.readTime}</span></div>
      <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter mb-8 leading-[1.1]">{post.title}</h1>
      <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-snug border-b border-foreground pt-2 pb-12 mb-12">{post.excerpt}</p>
      <div className="space-y-8">{renderMarkdown(post.content)}</div>
      <Link href="/blog" className="mt-20 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-foreground pb-2">More articles <ArrowUpRight className="w-4 h-4" /></Link>
    </article></div></div></main>
    <footer className="py-20 border-t border-foreground/5 bg-secondary-bg text-center text-muted-foreground text-[10px] font-bold uppercase tracking-[0.4em]"><div className="container-custom"><div className="mb-8 flex flex-col items-center gap-5"><img src="/logo-lockup.png" alt="ASK SAUMYA Consulting" className="h-24 w-auto" /><span>Drive Measurable Customer Growth.</span></div><p className="mb-6 normal-case tracking-normal text-sm"><a href="mailto:hello@asksaumya.com" className="hover:text-foreground transition-colors">hello@asksaumya.com</a><span className="mx-3">•</span><a href="https://cal.com/asksaumya/intro-call" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Book a Call</a></p><p>© 2026 Saumya Srivastava. All rights reserved.</p></div></footer>
  </div>;
}
