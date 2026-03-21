"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle, Mail, MousePointer2, ExternalLink } from "lucide-react";
import Link from "next/link";

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
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link border border-foreground px-5 py-2 rounded-full hover:bg-foreground hover:text-background transition-all">
              Work With Me
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
                Independent Strategic Advisor
              </span>
              <h1 className="text-6xl md:text-9xl font-serif font-bold leading-[1] mb-12 tracking-tight">
                Strategy is a claim on the future. <br />
                <span className="text-muted-foreground/40 italic font-medium">I help you back it with data.</span>
              </h1>
              <p className="text-2xl md:text-3xl text-muted-foreground max-w-3xl mb-16 leading-tight font-medium tracking-tight">
                Bridging the gap between high-level marketing strategy and technical data execution at scale, serving global growth teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                <a href="#contact" className="btn-primary group">
                  Inquire for Q3 2026
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a href="#impact" className="btn-secondary">
                  View Selected Work
                </a>
              </div>
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
                Quantified outcomes from leadership roles at Sam's Club, Rocket Mortgage, and AAA Life Insurance.
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
                    After nearly a decade in the US Corporate, I bring a global perspective to international clients seeking senior-tier marketing analytics expertise and AI strategy.
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

        {/* Contact Section */}
        <section id="contact" className="section-padding">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto py-24 md:py-40 border-t border-foreground"
            >
              <h2 className="text-5xl md:text-8xl font-serif font-bold mb-12 tracking-tighter">Let’s define <br />the future.</h2>
              <p className="text-2xl md:text-3xl text-muted-foreground mb-16 font-medium tracking-tight leading-tight max-w-2xl mx-auto">
                I am currently accepting inquiries for consulting engagements starting Q3 2026.
              </p>
              
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
          <p>© 2026 Saumya Srivastava. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
