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
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-accent font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="container-custom flex justify-between items-center">
          <Link href="/" className="font-serif text-xl font-bold tracking-tight">
            Saumya Srivastava
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="nav-link">Expertise</a>
            <a href="#impact" className="nav-link">Impact</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link border border-accent/20 px-4 py-2 rounded-full hover:bg-accent/10 transition-all">
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
              className="max-w-4xl"
            >
              <span className="text-accent uppercase tracking-[0.2em] text-sm font-semibold mb-6 block">
                Independent Consultant
              </span>
              <h1 className="text-5xl md:text-8xl font-serif font-bold leading-[1.1] mb-12">
                Strategy is a claim on the future. <br />
                <span className="text-muted-foreground italic">I help you back it with data.</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed font-light">
                Bridging the gap between high-level marketing strategy and technical data execution at scale. Based in Bengaluru, serving international growth teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#contact" className="bg-foreground text-background px-8 py-4 rounded-full font-semibold hover:bg-accent hover:text-background transition-all flex items-center justify-center">
                  Inquire for Q3 2026
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#impact" className="border border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/5 transition-all text-center">
                  View Results
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services / What I Do */}
        <section id="services" className="section-padding bg-zinc-950/50">
          <div className="container-custom">
            <motion.div {...fadeInUp} className="mb-20">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Expertise & Strategic Focus</h2>
              <div className="h-1 w-20 bg-accent mb-8"></div>
              <p className="text-xl text-muted-foreground max-w-2xl">
                I help marketing leaders at mid-to-large international companies build or mature their analytics and AI capabilities.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {[
                {
                  title: "Marketing Measurement & Attribution",
                  desc: "Solving the 'where should we spend next dollar' problem through MMM, MTA, and full-funnel experimental design. Moving beyond vanity metrics to causal impact.",
                  icon: <CheckCircle className="w-8 h-8 text-accent mb-6" />
                },
                {
                  title: "AI & GenAI Integration",
                  desc: "Designing and deploying LLM-driven workflows that automate campaign analytics and enhance customer engagement without the technical bloat.",
                  icon: <MousePointer2 className="w-8 h-8 text-accent mb-6" />
                },
                {
                  title: "Personalization Systems & CRM",
                  desc: "Building the algorithmic backbone for customer life cycle management—propensity models, churn prediction, and uplift modeling for direct impact.",
                  icon: <ExternalLink className="w-8 h-8 text-accent mb-6" />
                },
                {
                  title: "Analytics Strategy & Team Building",
                  desc: "Consulting on organizational design for data teams. Mapping the technical roadmap and establishing the governance needed for a data-driven culture.",
                  icon: <Mail className="w-8 h-8 text-accent mb-6" />
                }
              ].map((service, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className="p-8 border border-white/5 bg-zinc-900/50 rounded-2xl hover:border-accent/30 transition-all duration-300 group"
                >
                  {service.icon}
                  <h3 className="text-2xl font-serif font-semibold mb-4 group-hover:text-accent transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
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
            <motion.div {...fadeInUp} className="text-center mb-24">
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Quantified Outcomes</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Evidence of impact from leadership roles at Sam's Club, Rocket Mortgage, and AAA Life Insurance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {[
                {
                  value: "$2M+",
                  label: "Incremental Revenue",
                  description: "Generated annually from a custom-built collaborative filtering personalization engine at Sam's Club."
                },
                {
                  value: "20%",
                  label: "Spend Optimization",
                  description: "Direct reduction in marketing spend achieved via predictive modeling and budget reallocation strategies at AAA Life."
                },
                {
                  value: "$1.4M",
                  label: "Profit Swing",
                  description: "Flipped a $200K loss to $200K profit while saving $1M in direct mail spend via uplift modeling."
                },
                {
                  value: "~$100M",
                  label: "Campaign Impact",
                  description: "Led measurement and optimization for multi-channel campaigns with an estimated annual impact of $100M+ at Rocket Mortgage."
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="flex flex-col md:flex-row items-start gap-8"
                >
                  <div className="impact-number shrink-0">{item.value}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{item.label}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section-padding bg-zinc-950/50">
          <div className="container-custom">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <motion.div 
                {...fadeInUp}
                className="lg:w-1/2"
              >
                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Strategic Leadership, <br />Empirical Rigor.</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    With over 12 years of experience in data science and analytics—most recently as a Director/Senior Director—I’ve spent my career at the high-stakes intersection of human behavior and predictive modeling.
                  </p>
                  <p>
                    I founded my independent practice to help companies bridge the gap between their strategic ambitions and their technical reality. I don't just deliver reports; I build the systems that drive measurable growth.
                  </p>
                  <p>
                    Based in Bengaluru after nearly a decade in the US (Walmart, Sam's Club, Rocket Mortgage), I bring a global perspective to international clients seeking premium-tier marketing analytics expertise.
                  </p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 grid grid-cols-2 gap-4"
              >
                {[
                  "MS Business Analytics (U of Minnesota)",
                  "BTech Computer Science",
                  "Former Director @ Rocket Mortgage",
                  "Senior Director @ AAA Life",
                  "Assoc. Director @ Walmart/Sam's Club",
                  "12+ Years Industry Experience"
                ].map((tag, idx) => (
                  <div key={idx} className="p-6 border border-white/10 rounded-xl bg-zinc-900/30 text-center flex items-center justify-center font-medium text-sm">
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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto p-12 md:p-24 border border-accent/20 rounded-3xl bg-zinc-950 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
              
              <h2 className="text-3xl md:text-6xl font-serif font-bold mb-8">Let’s define the future.</h2>
              <p className="text-xl text-muted-foreground mb-12">
                I am currently accepting inquiries for consulting engagements starting Q3 2026. If you have a challenge involving marketing measurement, AI integration, or growth strategy, I’d love to hear from you.
              </p>
              
              <div className="flex flex-col items-center gap-4">
                <a 
                  href="mailto:hello@saumyasrivastava.com" 
                  className="text-2xl md:text-3xl font-serif font-semibold hover:text-accent transition-colors flex items-center"
                >
                  saumya.analytics@gmail.com
                  <ArrowUpRight className="ml-3 w-8 h-8" />
                </a>
                <p className="text-muted-foreground uppercase tracking-widest text-sm mt-4 font-semibold">
                  Available for Remote & International Engagements
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-muted-foreground text-sm">
        <div className="container-custom">
          <p>© 2026 Saumya Srivastava. Built for Strategy, Backed by Data.</p>
        </div>
      </footer>
    </div>
  );
}
