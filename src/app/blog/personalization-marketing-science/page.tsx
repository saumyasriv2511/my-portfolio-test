"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/10 selection:text-accent">
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
        <div className="max-w-6xl mx-auto">
          <Link href="/blog" className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors mb-16">
            <ArrowLeft className="w-3 h-3 mr-2" /> Back to Inventory
          </Link>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Metadata Sidebar */}
            <aside className="lg:w-1/4">
              <div className="sticky top-32 space-y-12">
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-4">Focus Area</h4>
                  <p className="font-serif text-lg italic">Marketing Science & AI</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4">Published</h4>
                  <p className="text-sm font-medium">May 2026</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground mb-4">Follow Along</h4>
                  <a href="https://asksaumya.com" className="text-sm font-bold border-b border-foreground/10 hover:border-foreground transition-all">asksaumya.com</a>
                </div>
              </div>
            </aside>

            {/* Article Content */}
            <article className="lg:w-3/4">
              <header className="mb-20">
                <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter mb-8 leading-[1.1]">
                  Personalization in Marketing Science: How AI Is Rewriting the Rules of Engagement
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-tight tracking-tight border-l-2 border-accent pl-8 py-2 italic">
                  "From RFM scores to reinforcement learning, and what comes after the cookie crumbles."
                </p>
              </header>

              <div className="space-y-12 text-lg text-foreground leading-relaxed font-medium">
                <p>
                  <span className="text-5xl font-serif float-left mr-4 mt-2 leading-none text-accent">T</span>here's a phrase that gets thrown around marketing strategy decks with alarming regularity: "right message, right person, right time." It sounds obvious. Almost trivially obvious. The reason it persists as a goal, rather than a baseline, is that actually achieving it is one of the hardest technical problems in modern business.
                </p>
                
                <p>
                  Personalization is not a design decision. It's not a copy choice. It's a scientific discipline, one that sits at the intersection of behavioral economics, statistical modeling, and increasingly, machine intelligence. Most marketing teams are still operating several layers below what the science makes possible. This piece is about closing that gap.
                </p>

                <blockquote className="my-16 py-12 border-y border-foreground/10">
                  <p className="text-2xl md:text-3xl font-serif font-bold tracking-tighter italic text-center leading-snug">
                    "Segmentation tells you about groups. Personalization tells you about people. The distinction sounds semantic. The operational difference is enormous."
                  </p>
                </blockquote>

                <section>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tighter mb-8 pt-8 text-accent">
                    What the pre-AI toolkit got right, and where it broke
                  </h2>
                  <div className="space-y-6">
                    <p>
                      Before machine learning entered the picture, personalization ran on several foundational engines: rule-based systems, RFM analysis, collaborative filtering, propensity models, and uplift modeling. Each was genuinely useful. Each had a ceiling that reflected the fundamental constraint of the era: every insight required a human to define it.
                    </p>
                    <p>
                      Rule-based systems were efficient within narrow parameters (like sending a re-engagement email to anyone who browsed three times without purchasing), but they required constant maintenance. Every new behavioral pattern demanded a human analyst to identify the gap and write a new rule. Markets move faster than analysts can write rules.
                    </p>
                    <p>
                      <strong>RFM analysis (Recency, Frequency, Monetary value)</strong> gave marketing teams a vocabulary for audience quality that remains useful today. A subscription company using RFM to identify lapsed high-spenders for a win-back campaign is doing something genuinely smart. The problem: RFM describes the past. It offers almost no signal about what a customer actually wants next.
                    </p>
                    <p>
                      <strong>Collaborative Filtering</strong> identified patterns across users to predict the "Next Best Item." While powerful for early recommendation engines, classical implementations struggled with the "cold start" problem and required massive computational overhead to run in real-time.
                    </p>
                    <p>
                      <strong>Propensity and Uplift Modeling</strong> brought statistical rigor to targeting. Propensity models estimated the probability of a response to prioritize high-value leads, while uplift modeling identified who would convert specifically because of an intervention. The limitation? They were often static, requiring manual retraining and scoring cycles.
                    </p>
                    <p>
                      <strong>A/B testing</strong> completed the classical toolkit as the gold standard for validation: statistically sound, widely trusted, and brutally slow. In markets where consumer preferences shift seasonally or weekly, that's not a testing cadence. That's a bottleneck.
                    </p>
                  </div>
                  
                  <div className="mt-12 p-10 bg-secondary-bg/50 border-l-2 border-accent rounded-r-2xl">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">The Shared Constraint</h4>
                    <p className="text-lg text-muted-foreground leading-relaxed">All classical personalization methods required human beings to define the rules, interpret the signals, and manually scale the insights. This created a hard ceiling on how deeply, and how dynamically, any brand could personalize the customer experience.</p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tighter mb-12 pt-16 border-t border-foreground/5 text-accent">
                    What AI actually changed
                  </h2>
                  <p className="mb-12">
                    Machine learning didn't just make the old methods faster. It changed what was achievable through three core technical evolutions:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="space-y-4">
                      <div className="h-px w-12 bg-accent mb-6"></div>
                      <h3 className="text-xl font-serif font-bold tracking-tight">Scaled Collaborative Filtering</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        ML models can now identify non-obvious behavioral patterns across millions of user interactions simultaneously. It's a model that has learned viewing cadence, genre affinities, and even abandon rates.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="h-px w-12 bg-accent mb-6"></div>
                      <h3 className="text-xl font-serif font-bold tracking-tight">NLP & Unstructured Data</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        For the first time, systems could process unstructured data (text, images, audio) and extract meaningful signals. NLP can read not just what customers buy, but how they feel about their experiences.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="h-px w-12 bg-accent mb-6"></div>
                      <h3 className="text-xl font-serif font-bold tracking-tight">Reinforcement Learning</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Unlike static models, RL agents optimize in real time, taking actions, observing outcomes, and adjusting behavior to maximize a reward signal. This is the logic driving Spotify’s Discover Weekly.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tighter mb-8 pt-16 border-t border-foreground/5 text-accent">
                    The risks that come with the capability
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mt-12">
                    {[
                      { title: "Regulatory Exposure", desc: "GDPR and CCPA aren't compliance footnotes; they directly constrain how AI models are trained and deployed. Consent management must be built into the workflow from day one." },
                      { title: "Surveillance vs Relevance", desc: "There is a thin, important line between a helpful recommendation and being watched. Consumers will share data, but only when they feel in control of the exchange." },
                      { title: "Algorithmic Bias", desc: "Models trained on historical data encode historical inequities. Regular fairness audits and cross-functional review are now standard practice for responsible teams." },
                      { title: "The Cookieless Pivot", desc: "Third-party cookies are gone. The path forward runs through first-party and zero-party data proactively volunteered by consumers." }
                    ].map((item, i) => (
                      <div key={i} className="pb-8 border-b border-foreground/5 group">
                        <h4 className="font-serif font-bold text-xl mb-3 group-hover:text-accent transition-colors">{item.title}</h4>
                        <p className="text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold tracking-tighter mb-8 pt-16 border-t border-foreground/5 text-accent">
                    What's coming: four frontiers to watch
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {[
                      { label: "Generative AI", title: "Content at Scale", desc: "Instead of A/B testing three subject lines, generate a distinct, dynamically written subject line for each of two million subscribers." },
                      { label: "Federated Learning", title: "Privacy-Preserving ML", desc: "Models trained locally on devices, sharing only aggregated updates, never raw personal data. A structural competitive advantage." },
                      { label: "Contextual AI", title: "Real-time Signals", desc: "Synthesizing signals from the current session, device type, and even weather to make instantaneous decisions without explicit input." },
                      { label: "Agentic AI", title: "Autonomous Orchestration", desc: "Autonomous agents that identify a churn risk, craft a retention offer, and select the optimal channel, all without human triggering." }
                    ].map((item, i) => (
                      <div key={i} className="p-8 bg-secondary-bg/30 border border-foreground/5 hover:border-accent/20 transition-all rounded-xl">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent mb-4 block">{item.label}</span>
                        <h4 className="text-xl font-serif font-bold mb-3">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <footer className="mt-24 pt-24 border-t-2 border-foreground">
                  <div className="text-center max-w-2xl mx-auto">
                    <h3 className="text-3xl md:text-5xl font-serif font-bold tracking-tighter mb-12">
                      Follow the science. <br />Build the future.
                    </h3>
                    <div className="flex flex-col items-center gap-8">
                      <a 
                        href="https://asksaumya.com" 
                        className="inline-flex items-center text-xl font-serif font-bold hover:italic transition-all border-b-2 border-foreground/10 hover:border-foreground pb-2 group"
                      >
                        asksaumya.com
                        <ArrowUpRight className="ml-4 w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </a>
                      <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-muted-foreground">
                        Marketing Science · AI Strategy · Data-Driven Growth
                      </p>
                    </div>
                  </div>
                </footer>
              </div>
            </article>
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