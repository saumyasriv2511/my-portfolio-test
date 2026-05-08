"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function BlogPost() {
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
          <Link href="/blog" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Inventory
          </Link>

          <article>
            <header className="mb-16">
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-6">
                <span>Marketing Science</span>
                <span className="w-1 h-1 bg-muted-foreground rounded-full"></span>
                <span className="text-muted-foreground">May 2026</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter mb-8 leading-tight">
                The Science of Making It Personal: How AI Is Rewriting Marketing's Most Misunderstood Discipline
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-medium leading-tight tracking-tight italic border-l-4 border-accent pl-8 py-2">
                "From RFM scores to reinforcement learning — and what comes after the cookie crumbles."
              </p>
            </header>

            <div className="space-y-12 text-xl md:text-2xl text-foreground leading-snug tracking-tight font-medium">
              <p>
                There's a phrase that gets thrown around marketing strategy decks with alarming regularity: "right message, right person, right time." It sounds obvious. Almost trivially obvious. The reason it persists as a goal — rather than a baseline — is that actually achieving it is one of the hardest technical problems in modern business.
              </p>
              
              <p>
                Personalization is not a design decision. It's not a copy choice. It's a scientific discipline, one that sits at the intersection of behavioral economics, statistical modeling, and increasingly, machine intelligence. Most marketing teams are still operating several layers below what the science makes possible. This piece is about closing that gap.
              </p>

              <blockquote className="my-16 py-8 border-y border-foreground/10 text-center">
                <p className="text-3xl md:text-4xl font-serif font-bold tracking-tighter italic">
                  "Segmentation tells you about groups. Personalization tells you about people. The distinction sounds semantic. The operational difference is enormous."
                </p>
              </blockquote>

              <section>
                <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tighter mb-8 pt-8">
                  What the pre-AI toolkit got right — and where it broke
                </h2>
                <div className="space-y-8">
                  <p>
                    Before machine learning entered the picture, personalization ran on three main engines: rule-based systems, RFM analysis, and collaborative filtering. Each was genuinely useful. Each had a ceiling that reflected the fundamental constraint of the era: every insight required a human to define it.
                  </p>
                  <p>
                    Rule-based systems were efficient within narrow parameters — send a re-engagement email to anyone who browsed three times without purchasing — but they required constant maintenance. Every new behavioral pattern demanded a human analyst to identify the gap and write a new rule. Markets move faster than analysts can write rules.
                  </p>
                  <p>
                    <strong>RFM analysis (Recency, Frequency, Monetary value)</strong> gave marketing teams a vocabulary for audience quality that remains useful today. A subscription company using RFM to identify lapsed high-spenders for a win-back campaign is doing something genuinely smart. The problem: RFM describes the past. It offers almost no signal about what a customer actually wants next.
                  </p>
                  <p>
                    <strong>A/B testing</strong> completed the classical toolkit as the gold standard for validation — statistically sound, widely trusted, and brutally slow. Testing one variable at a time, with two-week observation windows, a team could evaluate roughly 26 variables per year. In markets where consumer preferences shift seasonally or weekly, that's not a testing cadence. That's a bottleneck.
                  </p>
                </div>
                
                <div className="mt-12 p-12 bg-secondary-bg border border-foreground/5 rounded-2xl">
                  <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">The Shared Constraint</h4>
                  <p className="text-lg text-muted-foreground">All classical personalization methods required human beings to define the rules, interpret the signals, and manually scale the insights. This created a hard ceiling on how deeply — and how dynamically — any brand could personalize the customer experience.</p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tighter mb-8 pt-16 border-t border-foreground/5">
                  What AI actually changed
                </h2>
                <p className="mb-8">
                  Machine learning didn't just make the old methods faster. It changed what was achievable. Three developments drove the transformation:
                </p>
                
                <div className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                      <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Scaling</h4>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-2xl font-serif font-bold mb-4">Scaled collaborative filtering</h3>
                      <p className="text-muted-foreground text-lg">ML models can now identify non-obvious behavioral patterns across millions of user interactions simultaneously. When Netflix surfaces a documentary you didn't know you wanted, it's not luck — it's a model that has learned your viewing cadence, genre affinities, and even the time of day you tend to abandon content.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                      <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Deep Learning</h4>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-2xl font-serif font-bold mb-4">NLP & Unstructured Data</h3>
                      <p className="text-muted-foreground text-lg">For the first time, systems could process unstructured data — text, images, audio — and extract meaningful personalization signals from it. NLP can read not just what customers are buying, but how they feel about their experiences. Sephora's conversational chatbots and ASOS's visual style matching both draw on this capability.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                      <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent">Reinforcement</h4>
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-2xl font-serif font-bold mb-4">Real-time Optimization</h3>
                      <p className="text-muted-foreground text-lg">Unlike supervised models trained on historical data, RL agents optimize in real time — taking actions, observing outcomes, adjusting behavior to maximize a reward signal. This is the logic driving Spotify’s Discover Weekly and Stitch Fix’s personalized shipments.</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tighter mb-8 pt-16 border-t border-foreground/5">
                  The risks that come with the capability
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                  {[
                    { title: "Regulatory Exposure", desc: "GDPR and CCPA aren't compliance footnotes — they directly constrain how AI models are trained and deployed. Consent management must be built into the workflow from day one." },
                    { title: "Surveillance vs Relevance", desc: "There is a thin, important line between a helpful recommendation and being watched. Consumers will share data — but only when they understand how it's used." },
                    { title: "Algorithmic Bias", desc: "Models trained on historical data encode historical inequities. Regular fairness audits and cross-functional review are now standard practice for responsible teams." },
                    { title: "The Cookieless Pivot", desc: "Third-party cookies are gone. The path forward runs through first-party and zero-party data proactively volunteered by consumers." }
                  ].map((item, i) => (
                    <div key={i} className="p-8 border border-foreground/5 bg-secondary-bg/50">
                      <h4 className="font-serif font-bold text-xl mb-4">{item.title}</h4>
                      <p className="text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tighter mb-8 pt-16 border-t border-foreground/5">
                  What's coming: four frontiers to watch
                </h2>
                <div className="space-y-16 mt-12">
                  <div className="border-l-2 border-accent pl-12">
                    <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">Generative AI Content at Scale</h4>
                    <p className="text-lg">Instead of A/B testing three subject lines, generate a distinct, dynamically written subject line for each of two million subscribers — informed by purchase history and real-time context.</p>
                  </div>
                  <div className="border-l-2 border-accent pl-12">
                    <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">Privacy-Preserving Personalization</h4>
                    <p className="text-lg">Federated learning: ML models trained locally on individual devices, sharing only aggregated model updates — never raw personal data. This is a structural competitive advantage in sensitive sectors.</p>
                  </div>
                  <div className="border-l-2 border-accent pl-12">
                    <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">Real-time Contextual AI</h4>
                    <p className="text-lg">Synthesizing signals from a customer's current session, device type, and even external factors like weather to make instantaneous decisions. Moving from batch-processing to streaming data architectures.</p>
                  </div>
                  <div className="border-l-2 border-accent pl-12">
                    <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4">Agentic AI</h4>
                    <p className="text-lg">Autonomous agents that identify a churn risk, craft a retention offer, select the optimal channel, and iterate based on response — all without human triggering. The marketing scientist becomes an AI systems architect.</p>
                  </div>
                </div>
              </section>

              <footer className="mt-24 pt-24 border-t-2 border-foreground text-center">
                <h3 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter mb-12">
                  Follow the science. <br />Build the future.
                </h3>
                <div className="flex flex-col items-center gap-8">
                  <a 
                    href="https://asksaumya.com" 
                    className="inline-flex items-center text-2xl font-serif font-bold hover:italic transition-all border-b-2 border-foreground/10 hover:border-foreground pb-2 group"
                  >
                    asksaumya.com
                    <ArrowUpRight className="ml-4 w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                  <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">
                    Marketing Science · AI Strategy · Data-Driven Growth
                  </p>
                </div>
              </footer>
            </div>
          </article>
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