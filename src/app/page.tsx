"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle, Mail, MousePointer2, ExternalLink } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" as const }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5 px-6 py-4">
        <div className="container-custom flex justify-between items-center">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tighter">
            Saumya Srivastava
          </Link>
          <div className="hidden md:flex space-x-12 items-center">
            <a href="#services" className="nav-link">Expertise</a>
            <a href="#impact" className="nav-link">Impact</a>
            <Link href="/blog" className="nav-link">Blog</Link>
            <a href="#about" className="nav-link">About</a>
            <a href="https://cal.com/asksaumya/intro-call" target="_blank" rel="noopener noreferrer" className="nav-link border border-foreground px-5 py-2 rounded-full hover:bg-foreground hover:text-background transition-all">
              Book a Call
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="section-padding min-h-screen flex items-center pt-32">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-5xl"
            >
              <span className="text-muted-foreground uppercase tracking-[0.3em] text-[10px] font-bold mb-8 block">
                Independent Strategic Advisor — ASK SAUMYA Consulting
              </span>
              <h1 className="text-6xl md:text-9xl font-serif font-bold leading-[1] mb-12 tracking-tight">
                I help B2C brands drive measurable <span className="text-muted-foreground/40 italic font-medium">customer growth.</span>
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mb-16 leading-tight font-medium tracking-tight">
                I&rsquo;m Saumya Srivastava, a marketing analytics advisor. I work with B2C companies under 1,000 employees on lifecycle marketing, personalization, and proving what actually worked.
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                <a href="https://cal.com/asksaumya/intro-call" target="_blank" rel="noopener noreferrer" className="btn-primary group">
                  Book a 30-minute intro call
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a href="#about" className="btn-secondary">
                  See how I work
                </a>
              </div>
              <p className="mt-12 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                13+ years leading marketing analytics &middot; $100M+ measurable business impact
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services / What I Do */}
        <section id="services" className="section-padding bg-secondary-bg border-y border-foreground/5">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="mb-24">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tighter">Expertise & Service Areas</h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium leading-snug">
                I help marketing leaders at mid-to-large international companies build, mature, and automate their growth engines.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {[
                {
                  title: "Marketing Measurement & Attribution",
                  desc: "Solving the 'where should we spend next dollar' problem through MMM, MTA, and full-funnel experimental design. Moving beyond vanity metrics to causal impact.",
                  icon: <CheckCircle className="w-10 h-10 mb-8" />
                },
                {
                  title: "AI & GenAI Integration",
                  desc: "Designing and deploying LLM-driven workflows that automate campaign analytics and enhance customer engagement without technical debt.",
                  icon: <MousePointer2 className="w-10 h-10 mb-8" />
                },
                {
                  title: "Personalization Systems & CRM",
                  desc: "Building the algorithmic backbone for customer lifecycle management—propensity models, churn prediction, and uplift modeling for direct impact.",
                  icon: <ExternalLink className="w-10 h-10 mb-8" />
                },
                {
                  title: "Analytics Strategy & Team Building",
                  desc: "Consulting on organizational design for data teams. Mapping technical roadmaps and establishing the governance needed for a data-driven culture.",
                  icon: <Mail className="w-10 h-10 mb-8" />
                }
              ].map((service, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className="p-12 bg-background border border-foreground/5 hover:border-foreground/20 transition-all duration-300 group shadow-sm"
                >
                  <div className="text-foreground group-hover:scale-110 transition-transform origin-left duration-300">{service.icon}</div>
                  <h3 className="text-3xl font-serif font-bold mb-6 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="section-padding">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="mb-24">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tighter">Selected Impact</h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium leading-snug">
                Quantified outcomes from 13+ years leading marketing analytics and data science teams.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
              {[
                {
                  value: "$2M+",
                  label: "Incremental Revenue",
                  description: "Generated annually from a custom-built collaborative filtering personalization engine."
                },
                {
                  value: "20%",
                  label: "Marketing Spend Optimization",
                  description: "Direct reduction in marketing spend achieved via predictive modeling and budget reallocation strategies."
                },
                {
                  value: "$1.4M",
                  label: "Direct Profit Swing",
                  description: "Flipped a $200K loss to $200K profit while saving $1M in direct mail spend via uplift modeling."
                },
                {
                  value: "~$100M",
                  label: "Campaign Impact Managed",
                  description: "Led measurement for multi-channel campaigns with an estimated annual impact of $100M+."
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="border-t border-foreground pt-12"
                >
                  <div className="impact-number mb-6">{item.value}</div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{item.label}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding bg-secondary-bg">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-24 items-start">
              <motion.div 
                {...fadeInUp}
                className="lg:w-3/5"
              >
                <h2 className="text-4xl md:text-7xl font-serif font-bold mb-12 tracking-tighter leading-tight">Strategic Leadership, <br />Empirical Rigor.</h2>
                <div className="space-y-8 text-xl md:text-2xl text-muted-foreground leading-tight font-medium tracking-tight">
                  <p>
                    With over 12 years in data science—most recently as a Director/Senior Director—I’ve spent my career at the high-stakes intersection of human behavior and predictive modeling.
                  </p>
                  <p>
                    I founded my independent practice to help companies bridge the gap between their strategic ambitions and their technical reality. I don't just deliver reports; I build the systems that drive measurable growth.
                  </p>
                  <p>
                    After spending nearly a decade in the US Corporate, I bring a global perspective to international clients seeking senior-tier marketing analytics expertise and AI strategy.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-2/5 grid grid-cols-1 gap-4"
              >
                {[
                  "MS Business Analytics (U of Minnesota)",
                  "BTech Computer Science",
                  "Former Director @ Rocket Mortgage",
                  "Senior Director @ AAA Life",
                  "Assoc. Director @ Walmart/Sam's Club",
                  "12+ Years Industry Experience"
                ].map((tag, idx) => (
                  <div key={idx} className="p-8 bg-background border border-foreground/5 text-left font-bold text-sm uppercase tracking-widest flex items-center shadow-sm">
                    <span className="w-2 h-2 bg-foreground mr-4"></span>
                    {tag}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="section-padding bg-secondary-bg border-y border-foreground/5">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="mb-16 text-center">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tighter">Book a 30-minute intro call</h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium leading-snug">
                Pick a time that works for you. No pitch — we&rsquo;ll talk about what&rsquo;s actually going on in your numbers.
              </p>
            </motion.div>
            <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
              <div
                id="cal-inline-intro-call"
                className="w-full border border-foreground/5 bg-background shadow-sm"
                style={{ minHeight: "640px", overflow: "scroll" }}
              ></div>
            </motion.div>
            <p className="mt-10 text-center text-muted-foreground font-medium">
              Prefer to open the booking page directly?{" "}
              <a href="https://cal.com/asksaumya/intro-call" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground transition-colors">
                cal.com/asksaumya/intro-call
              </a>
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto py-24 md:py-40 border-t border-foreground"
            >
              <h2 className="text-5xl md:text-8xl font-serif font-bold mb-12 tracking-tighter">Let’s talk about <br />your growth numbers.</h2>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-16 font-medium tracking-tight leading-tight max-w-2xl mx-auto">
                30 minutes, no pitch. If we&rsquo;re not a fit, I&rsquo;ll tell you.
              </p>
              <div className="mb-16 flex justify-center">
                <a href="#booking" className="btn-primary group">
                  Book a 30-minute intro call
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
              
              <div className="flex flex-col items-center gap-12">
                <a 
                  href="mailto:hello@asksaumya.com" 
                  className="text-3xl md:text-5xl font-serif font-bold hover:italic transition-all border-b-2 border-foreground/10 hover:border-foreground pb-2 flex items-center group"
                >
                  hello@asksaumya.com
                  <ArrowUpRight className="ml-4 w-10 h-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <div className="flex flex-col md:flex-row gap-8 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
                  <span>Remote & Global</span>
                  <span className="hidden md:inline">•</span>
                  <span>Independent Advisory</span>
                  <span className="hidden md:inline">•</span>
                  <span>Strategy & Execution</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-foreground/5 bg-secondary-bg text-center text-muted-foreground text-[10px] font-bold uppercase tracking-[0.4em]">
        <div className="container-custom">
          <p className="mb-6 normal-case tracking-normal text-sm">
            <a href="mailto:hello@asksaumya.com" className="hover:text-foreground transition-colors">hello@asksaumya.com</a>
            <span className="mx-3">•</span>
            <a href="https://cal.com/asksaumya/intro-call" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Book a Call</a>
          </p>
          <p>© 2026 Saumya Srivastava. All rights reserved.</p>
        </div>
      </footer>

      <Script src="https://app.cal.com/embed/embed.js" strategy="lazyOnload" />
      <Script id="cal-inline-init" strategy="lazyOnload">{`
        (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
        Cal("init", "intro-call", { origin: "https://cal.com" });
        Cal.ns["intro-call"]("inline", { elementOrSelector: "#cal-inline-intro-call", config: { layout: "month_view" }, calLink: "asksaumya/intro-call" });
        Cal.ns["intro-call"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
      `}</Script>
    </div>
  );
}
