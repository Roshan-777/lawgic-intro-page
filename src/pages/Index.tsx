import { Scale, Bot, Shield, Clock, MessageSquare, ArrowRight, Sparkles, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const features = [
  {
    icon: Scale,
    title: "Legal Expertise",
    description: "Trained on vast legal databases to provide accurate, context-aware legal guidance.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your conversations are encrypted and never shared. Complete confidentiality guaranteed.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Get instant legal insights anytime — no appointments, no waiting rooms.",
  },
  {
    icon: Zap,
    title: "Instant Answers",
    description: "Complex legal questions simplified in seconds with AI-powered analysis.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg font-[var(--font-heading)]">
              L
            </div>
            <span className="text-xl font-bold text-foreground font-[var(--font-heading)]">
              LawGic<span className="text-gradient">.AI</span>
            </span>
          </div>
          <a
            href="https://lawgicbot.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:brightness-110 transition-all animate-pulse-glow"
          >
            Try Now
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-16">
        <div className="relative min-h-[90vh] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={heroBg}
              alt=""
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
            <div className="animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-muted/60 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-muted-foreground mb-8 border border-border">
                <Sparkles size={14} className="text-primary" />
                AI-Powered Legal Assistant
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 animate-fade-up-delay-1 font-[var(--font-heading)]">
              No Suit, No Tie,
              <br />
              <span className="text-gradient">Just AI Legal Guy</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up-delay-2">
              Meet LawGic.AI — your intelligent legal companion that simplifies complex legal questions into clear, actionable answers. Instantly.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
              <a
                href="https://lawgicbot.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all glow-primary"
              >
                <MessageSquare size={20} />
                Start Chatting
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#features"
                className="flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-muted/50 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-heading)] mb-4">
              Why <span className="text-gradient">LawGic.AI</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Legal help shouldn't be complicated. We make it simple, fast, and accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:glow-accent transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold font-[var(--font-heading)] text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center bg-card border border-border rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground mx-auto mb-6 animate-float">
              <Bot size={30} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-[var(--font-heading)] mb-4">
              Ready to Talk Law?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
              Get instant, AI-powered legal guidance — no jargon, no fees, no hassle.
            </p>
            <a
              href="https://lawgicbot.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all glow-primary"
            >
              <MessageSquare size={20} />
              Launch LawGic.AI
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm font-[var(--font-heading)]">
              L
            </div>
            <span className="font-semibold font-[var(--font-heading)] text-foreground">
              LawGic.AI
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2025 LawGic.AI — No suit, No tie, Just AI legal guy
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
