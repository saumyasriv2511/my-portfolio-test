"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, CheckCircle, Mail, MousePointer2, ExternalLink } from "lucide-react";
import Link from "next/link";
import Script from "next/script";
import { blogPosts } from "@/content/blogs";

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
  const latestPosts = [...blogPosts]
    .filter((post) => post.slug !== "personalization-marketing-science")
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5 px-6 py-4">
        <div className="container-custom flex justify-between items-center">
          <Link href="/" className="font-serif text-2xl font-bold tracking-tighter">
            ASK SAUMYA <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground ml-2">Consulting</span>
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#who-i-help" className="nav-link">Who I Help</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#impact" className="nav-link">Results</a>
            <a href="#process" className="nav-link">Process</a>
            <a href="#about" className="nav-link">About</a>
            <Link href="/blog" className="nav-link">Insights</Link>
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
                ASK SAUMYA CONSULTING
              </span>
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-[1.05] mb-8 tracking-tight">
                Strategy is a claim on the future. I help you <span className="italic">back it with data.</span>
              </h1>
              <p className="text-2xl md:text-3xl text-foreground max-w-3xl mb-8 leading-tight font-medium tracking-tight">
                I help B2C brands drive measurable customer growth.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-16 leading-tight font-medium tracking-tight">
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

        {/* Who I Help Section */}
        <section id="who-i-help" className="section-padding">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="mb-16">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tighter">Who I Help</h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium leading-snug">
                You should talk to me if&hellip;
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl mb-16">
              {[
                "You’re spending on acquisition, but you can’t tell which of it actually works.",
                "Retention and churn are moving, and nobody can predict or explain why.",
                "Your “personalization” is the same email with a first name in it.",
                "Your CRM is full of customer data that nobody trusts enough to act on."
              ].map((pain, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="w-7 h-7 mt-1 shrink-0" />
                  <p className="text-xl md:text-2xl font-medium leading-snug">{pain}</p>
                </motion.div>
              ))}
            </div>

            <motion.p {...fadeInUp} className="text-xl md:text-2xl text-muted-foreground max-w-3xl font-medium leading-snug">
              I work with B2C companies under 1,000 employees, across the US, Europe, Singapore, UAE, Australia/NZ, and Thailand. You don&rsquo;t need a data team to start.
            </motion.p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding bg-secondary-bg border-y border-foreground/5">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="mb-24">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tighter">Services</h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl font-medium leading-snug">
                Beyond building models and dashboards, I help leaders create the systems, measurement frameworks, and organizational capabilities needed to make data-driven growth repeatable.
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
                  title: "Customer Lifecycle Growth",
                  timeline: "2-week diagnostic",
                  desc: "An audit of how you measure and manage acquisition, engagement, retention, and win-backs today — and where the lifecycle is leaking. You get the prioritized quick wins first, then a 90-day roadmap.",
                  who: "For teams spending on growth but unsure what's actually working.",
                  icon: <CheckCircle className="w-10 h-10 mb-8" />
                },
                {
                  title: "Personalization & Loyalty",
                  timeline: "3 weeks",
                  desc: "Where personalization will actually pay for you: identifying the right customers and offers, and designing the next-best actions worth building. Includes the data you would need and a 90-day build plan your team can execute.",
                  who: "For teams sitting on customer data they aren't using.",
                  icon: <MousePointer2 className="w-10 h-10 mb-8" />
                },
                {
                  title: "Marketing Effectiveness",
                  timeline: "4-week sprint",
                  desc: "Holdout and geo-test design, incrementality readouts, and a campaign-testing discipline your team can keep. You get a plain-English view of what actually drove growth — and what it returned.",
                  who: "For teams whose dashboards count wins they would have gotten anyway.",
                  icon: <ExternalLink className="w-10 h-10 mb-8" />
                },
                {
                  title: "Customer Intelligence",
                  timeline: "Ongoing, monthly",
                  desc: "Predictive models put to work — propensity, churn, and uplift — so customer and investment decisions get made on evidence. Weekly working sessions, measurement QA, experiment review, and team coaching.",
                  who: "For teams that want a senior analytics brain without hiring one.",
                  icon: <Mail className="w-10 h-10 mb-8" />
                }
              ].map((service, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="p-12 bg-background border border-foreground/5 hover:border-foreground/20 transition-all duration-300 group shadow-sm"
                >
                  <div className="text-foreground group-hover:scale-110 transition-transform origin-left duration-300">{service.icon}</div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">{service.timeline}</p>
                  <h3 className="text-3xl font-serif font-bold mb-6 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium mb-6">
                    {service.desc}
                  </p>
                  <p className="text-lg leading-relaxed font-medium mb-8">
                    {service.who}
                  </p>
                  <a href="https://cal.com/asksaumya/intro-call" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-bold uppercase tracking-widest group-hover:text-accent transition-colors">
                    Book an intro call to scope this
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Results Section */}
        <section id="impact" className="section-padding">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="mb-24">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tighter">Results</h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium leading-snug">
                Results from 13+ years leading marketing analytics.
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
                  value: "+2% / +5%",
                  label: "Membership Retention & Growth",
                  description: "Membership retention up 2% and membership growth up 5% year over year, from leading CRM and membership analytics."
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

            <motion.p {...fadeInUp} className="mt-24 text-center text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
              MS Business Analytics (U of Minnesota) &middot; BTech Computer Science &middot; 13+ years &middot; $100M+ measurable impact
            </motion.p>

            <motion.div {...fadeInUp} className="mt-12 text-center">
              <a href="#booking" className="inline-flex items-center text-2xl md:text-3xl font-serif font-bold hover:italic transition-all">
                Like these numbers? Let&rsquo;s talk about yours.
                <ArrowUpRight className="ml-3 w-7 h-7" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="section-padding">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="mb-24">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tighter">How working together works</h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium leading-snug">
                A clear path from first call to lasting capability — no leap of faith required.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16">
              {[
                {
                  step: "01",
                  title: "Book a 30-minute intro call",
                  desc: "We talk about your numbers. No pitch."
                },
                {
                  step: "02",
                  title: "Fit check + fixed-scope proposal",
                  desc: "Scope, timeline, and price — in writing, within 3 days."
                },
                {
                  step: "03",
                  title: "Diagnostic",
                  desc: "I dig into your data and how you measure today."
                },
                {
                  step: "04",
                  title: "Findings + roadmap",
                  desc: "What's broken, what to fix first, and the plan to fix it."
                },
                {
                  step: "05",
                  title: "Build the capability",
                  desc: "I leave behind the systems, measurement frameworks, and team habits that make data-driven growth repeatable — and stay on as advisor if you want me to."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="border-t border-foreground pt-10"
                >
                  <div className="font-serif text-5xl font-bold text-muted-foreground/30 mb-6">{item.step}</div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                    {item.desc}
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
                    I&rsquo;m Saumya Srivastava. I founded ASK SAUMYA Consulting in Bengaluru in February 2026, after 13+ years leading marketing analytics and data science teams — most recently as a Director and Senior Director.
                  </p>
                  <p>
                    I help B2C companies with fewer than 1,000 employees grow the customers they already have: lifecycle growth across acquisition, engagement, retention, and win-backs; personalization that is actually personal; and measurement that proves what worked.
                  </p>
                  <p>
                    That work has added up to $100M+ in measurable business impact. But the numbers are only half of it — beyond building models and dashboards, I help leaders build the systems, measurement frameworks, and organizational capabilities that make data-driven growth repeatable.
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
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">Experience</p>
                {[
                  "Former Director @ Rocket Mortgage",
                  "Former Senior Director @ AAA Life",
                  "Former Associate Director @ Walmart/Sam's Club",
                  "13+ Years Industry Experience"
                ].map((tag, idx) => (
                  <div key={idx} className="p-8 bg-background border border-foreground/5 text-left font-bold text-sm uppercase tracking-widest flex items-center shadow-sm">
                    <span className="w-2 h-2 bg-foreground mr-4"></span>
                    {tag}
                  </div>
                ))}
                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mt-6">Education</p>
                {[
                  "MS Business Analytics (U of Minnesota)",
                  "BTech Computer Science"
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

        {/* Insights Section */}
        <section id="insights" className="section-padding">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="mb-24">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tighter">Insights</h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium leading-snug">
                Writing on customer growth, measurement, and personalization — for leaders at smaller B2C brands.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {latestPosts.map((post) => (
                <Link key={post.slug} href={"/blog/" + post.slug} className="group block border-t-2 border-foreground pt-8">
                  <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6">
                    <span>{post.category}</span>
                    <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                    <span className="text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold tracking-tighter mb-4 group-hover:italic">{post.title}</h3>
                  <p className="text-lg text-muted-foreground font-medium leading-snug mb-6">{post.excerpt}</p>
                  <div className="flex items-center text-xs font-bold uppercase tracking-widest">
                    Read Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>

            <motion.div {...fadeInUp} className="mt-20">
              <Link href="/blog" className="btn-secondary group">
                Read all insights
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section-padding">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="mb-16">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 tracking-tighter">Common Questions</h2>
            </motion.div>

            <div className="max-w-4xl">
              {[
                {
                  q: "We don't have a data team — can you still help?",
                  a: "Yes — that's the normal case for companies this size. We start with the data and reports you already have, and build from there. You don't need to hire anyone first."
                },
                {
                  q: "Do you implement, or only advise?",
                  a: "Both. Every engagement starts with a diagnostic and a roadmap. From there, I can help your team execute, or stay on as a monthly advisor while they do — whichever fits how you work."
                },
                {
                  q: "How is this different from our agency's reporting?",
                  a: "Your agency reports what happened. I measure what caused it — using incrementality tests and holdouts — and what you should do next. It's the difference between a scoreboard and a decision."
                },
                {
                  q: "What do you need from us to start?",
                  a: "Three things: a 30-minute intro call, access to your existing reports and data, and one person on your side who can make decisions."
                },
                {
                  q: "We're not in the US — how do we work together?",
                  a: "Everything is remote-first. I work with teams across the US, Europe, Singapore, UAE, Australia/NZ, and Thailand, and we schedule calls at times that work on both sides."
                },
                {
                  q: "How much does it cost?",
                  a: "Every engagement is fixed-scope, so there are no open-ended hours. After the intro call, you get the scope and the price in writing before anything starts. Contact for pricing."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.6 }}
                  className="border-t border-foreground/10 py-10"
                >
                  <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">{item.q}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium max-w-3xl">{item.a}</p>
                </motion.div>
              ))}
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
          <p className="mb-8 font-serif text-xl md:text-2xl font-bold tracking-tight normal-case text-foreground">
            ASK SAUMYA Consulting — Drive Measurable Customer Growth.
          </p>
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
