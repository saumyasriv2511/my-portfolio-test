import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
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

  return <div className="min-h-screen bg-background text-foreground font-sans">
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5 px-6 py-4"><div className="container-custom flex justify-between items-center"><Link href="/" className="font-serif text-2xl font-bold tracking-tighter">Saumya Srivastava</Link><Link href="/blog" className="nav-link flex items-center gap-2"><ArrowLeft className="w-4 h-4" /> All articles</Link></div></nav>
    <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 container-custom"><article className="max-w-3xl mx-auto">
      <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-8"><span>{post.category}</span><span className="w-1 h-1 bg-muted-foreground rounded-full" /><span className="text-muted-foreground">{post.date}</span><span className="text-muted-foreground">{post.readTime}</span></div>
      <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter leading-tight mb-8">{post.title}</h1>
      <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-snug border-b border-foreground pt-2 pb-12 mb-12">{post.excerpt}</p>
      <div className="space-y-8">{renderMarkdown(post.content)}</div>
      <Link href="/blog" className="mt-20 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-foreground pb-2">More articles <ArrowUpRight className="w-4 h-4" /></Link>
    </article></main>
    <footer className="py-20 border-t border-foreground/5 bg-secondary-bg text-center text-muted-foreground text-[10px] font-bold uppercase tracking-[0.4em]"><p>© 2026 Saumya Srivastava. All rights reserved.</p></footer>
  </div>;
}
