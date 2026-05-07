"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

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

      <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24 container-custom">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors mb-12">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
          </Link>

          <article className="prose prose-neutral max-w-none">
            <header className="mb-16">
              <span className="text-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
                Marketing Science & AI
              </span>
              <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter mb-8 leading-tight">
                Personalization in Marketing Science: Beyond the First Name
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground font-medium leading-tight tracking-tight italic">
                "Strategy is a claim on the future. AI is how you back it."
              </p>
            </header>

            {/* Hero Visual Placeholder */}
            <div className="aspect-[21/9] bg-secondary-bg border border-foreground/5 mb-16 flex flex-col items-center justify-center text-center p-8 rounded-xl">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">Visual Asset 01</span>
              <p className="text-sm text-muted-foreground/60 max-w-md italic">
                [Abstract 3D render: A vast network of thin lines on a soft gray background. One single point in the center glows in Deep Indigo, signifying the individual within the data.]
              </p>
            </div>

            <div className="space-y-12 text-xl md:text-2xl text-foreground leading-snug tracking-tight font-medium">
              <p>
                In marketing science, personalization is often misunderstood as a creative tactic. In reality, it is a high-stakes scientific discipline. It’s the difference between sending an email that says <span className="italic font-serif">"Hi, Saumya"</span> and deploying a system that knows exactly which product Saumya needs, why she needs it, and which channel will most likely convert her at 2:00 PM on a Tuesday.
              </p>

              <section>
                <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tighter mb-8 pt-8 border-t border-foreground/5">
                  1. The Core Architecture: From Segments to Souls
                </h2>
                <p className="mb-8">
                  Traditional segmentation tells you about <strong>groups</strong> (e.g., "Women 25-34 who enjoy fitness"). True personalization tells you about <strong>people</strong>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {[
                    { title: "Behavioral Signals", desc: "Moving beyond what they say to what they actually do—dwell time, hover intent, and abandoned carts." },
                    { title: "Dynamic Profiles", desc: "Continuous models that evolve in real-time as new data points arrive." },
                    { title: "Relevance-Driven Messaging", desc: "Communications that feel like a thoughtful recommendation, not an advertisement." }
                  ].map((item, i) => (
                    <div key={i} className="p-8 bg-secondary-bg border border-foreground/5 rounded-lg">
                      <h4 className="font-serif font-bold text-xl mb-3">{item.title}</h4>
                      <p className="text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tighter mb-8 pt-8 border-t border-foreground/5">
                  2. The Quantitative Toolkit: How We Predict
                </h2>
                <p className="mb-8">
                  To operationalize this, marketing scientists deploy a specific suite of models designed to quantify intent:
                </p>
                <ul className="space-y-6 mb-12">
                  <li className="flex gap-4">
                    <span className="w-2 h-2 bg-accent mt-3 shrink-0"></span>
                    <p><strong>RFM Analysis:</strong> The classic baseline. Scoring customers on Recency, Frequency, and Monetary value to identify high-value loyalists vs. lapsed buyers.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-2 h-2 bg-accent mt-3 shrink-0"></span>
                    <p><strong>Collaborative Filtering:</strong> Identifying patterns across millions to predict the "Next Best Item"—the core engine behind Amazon and Netflix.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-2 h-2 bg-accent mt-3 shrink-0"></span>
                    <p><strong>Propensity Models:</strong> Estimating the mathematical probability of a specific response to suppress noise and prioritize high-value leads.</p>
                  </li>
                  <li className="flex gap-4">
                    <span className="w-2 h-2 bg-accent mt-3 shrink-0"></span>
                    <p><strong>Uplift Modeling:</strong> The "Holy Grail." It identifies who will convert <em>because</em> of an intervention, preventing wasted budget on "sure-thing" customers.</p>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tighter mb-8 pt-8 border-t border-foreground/5">
                  3. The Shift: Machine Learning & Deep Learning
                </h2>
                <p className="mb-8">AI doesn't just automate personalization—it fundamentally expands what it can mean.</p>
                
                <div className="space-y-8 mb-12">
                  <div>
                    <h4 className="text-2xl font-serif font-bold mb-4">ML & Collaborative Filtering at Scale</h4>
                    <p className="text-muted-foreground">Models trained on millions of behavioral signals simultaneously. When Netflix surfaces a documentary you didn't know you wanted—that's a model that has learned your viewing cadence, genre affinity, and even your abandon rate.</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-bold mb-4">Deep Learning & NLP</h4>
                    <p className="text-muted-foreground">Extracting signals from unstructured data (text, images, audio) that simpler models ignore. NLP analyzes customer reviews and support logs to understand not just what people buy, but how they feel. Retailers like Sephora use this to power virtual assistants that replicate an in-store consultation.</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-serif font-bold mb-4">Reinforcement Learning (RL)</h4>
                    <p className="text-muted-foreground">Continuous real-time optimization. Unlike static models, RL agents learn by taking actions and observing outcomes—making them ideal for "Next-Best-Action" modeling. This is the logic driving Spotify’s Discover Weekly and Stitch Fix’s personalized shipments.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tighter mb-8 pt-8 border-t border-foreground/5">
                  4. The Constraints: Ethics, Privacy & Bias
                </h2>
                <div className="space-y-8">
                  <p>Sophistication inevitably collides with a complex regulatory and social landscape.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-8 border border-foreground/5">
                      <h4 className="font-bold uppercase tracking-widest text-xs mb-4">Regulatory Compliance</h4>
                      <p className="text-lg text-muted-foreground">Consent must be a core workflow, not an afterthought. This requires auditing data pipelines and documenting the lawful basis for processing before a single AI campaign is deployed.</p>
                    </div>
                    <div className="p-8 border border-foreground/5">
                      <h4 className="font-bold uppercase tracking-widest text-xs mb-4">Surveillance vs. Relevance</h4>
                      <p className="text-lg text-muted-foreground">There is a thin line between a helpful recommendation and an intrusion. Consumers will share data—but only when they feel in control of the exchange.</p>
                    </div>
                  </div>

                  <p><strong>Algorithmic Bias:</strong> Models trained on historical data can inadvertently encode and amplify societal inequities. Regular fairness audits are non-negotiable.</p>
                  <p><strong>The Cookieless Future:</strong> Third-party cookies are gone. The pivot to first-party and zero-party data is the only path forward. Brands that build genuine value exchange outperform those still chasing cookie-based retargeting.</p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tighter mb-8 pt-8 border-t border-foreground/5">
                  5. The Future: Four Frontiers
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-12">
                  {[
                    { title: "Generative AI Content", desc: "Generating a distinct, dynamically written subject line for each of two million subscribers—informed by history and real-time context." },
                    { title: "Privacy-Preserving ML", desc: "Federated Learning: Training models locally on devices so sensitive raw data never leaves the user’s environment." },
                    { title: "Real-Time Contextual AI", desc: "Systems that synthesize device type, geography, and even weather to make instantaneous decisions without explicit input." },
                    { title: "The Agentic Era", desc: "Autonomous AI agents capable of planning, reasoning, and executing multi-step marketing tasks with minimal intervention." }
                  ].map((item, i) => (
                    <div key={i} className="border-t border-foreground/20 pt-8">
                      <h4 className="text-2xl font-serif font-bold mb-4">{item.title}</h4>
                      <p className="text-lg text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <footer className="mt-24 pt-24 border-t-2 border-foreground text-center">
                <h3 className="text-4xl md:text-6xl font-serif font-bold tracking-tighter mb-12">
                  Is your growth engine backed by data, or just hope?
                </h3>
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center text-2xl font-serif font-bold hover:italic transition-all border-b-2 border-foreground/10 hover:border-foreground pb-2 group"
                >
                  Contact Saumya for a Strategic Audit
                  <ArrowUpRight className="ml-4 w-8 h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
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