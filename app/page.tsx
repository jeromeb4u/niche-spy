"use client";

import { useState } from "react";
import {
  Eye,
  Search,
  Zap,
  BarChart3,
  Users,
  TrendingUp,
  Target,
  Bell,
  ChevronRight,
  Star,
  Check,
  Menu,
  X,
  Twitter,
  Youtube,
  Instagram,
  ArrowRight,
  Database,
  BrainCircuit,
  FileSearch,
  PieChart,
} from "lucide-react";

// ─── NavBar ───────────────────────────────────────────────
function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#1e293b] bg-[#030712]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#8b5cf6] flex items-center justify-center">
              <Eye size={18} className="text-white" />
            </div>
            <span className="font-bold text-xl text-[#f9fafb]">NicheSpy</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-[#6b7280] hover:text-[#f9fafb] text-sm transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-[#6b7280] hover:text-[#f9fafb] text-sm transition-colors">
              Use Cases
            </a>
            <a href="#pricing" className="text-[#6b7280] hover:text-[#f9fafb] text-sm transition-colors">
              Pricing
            </a>
            <a href="#" className="text-[#6b7280] hover:text-[#f9fafb] text-sm transition-colors">
              Login
            </a>
            <button className="btn-primary text-sm px-5 py-2">
              Try Free
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#f9fafb]"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-[#1e293b] py-4 flex flex-col gap-4">
            <a href="#how-it-works" className="text-[#6b7280] hover:text-[#f9fafb] text-sm" onClick={() => setOpen(false)}>How It Works</a>
            <a href="#features" className="text-[#6b7280] hover:text-[#f9fafb] text-sm" onClick={() => setOpen(false)}>Use Cases</a>
            <a href="#pricing" className="text-[#6b7280] hover:text-[#f9fafb] text-sm" onClick={() => setOpen(false)}>Pricing</a>
            <a href="#" className="text-[#6b7280] hover:text-[#f9fafb] text-sm">Login</a>
            <button className="btn-primary text-sm px-5 py-2 w-fit">Try Free</button>
          </div>
        )}
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center pt-16 px-4 overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#8b5cf6]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#06b6d4]/8 blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#8b5cf6]/40 bg-[#8b5cf6]/10 text-xs text-[#8b5cf6] font-medium mb-6 animate-fade-in">
          <Zap size={12} />
          AI-Powered Creator Intelligence
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up">
          Know exactly what's{" "}
          <span className="text-gradient">working</span>
          <br />for any creator
        </h1>

        <p className="text-lg md:text-xl text-[#6b7280] max-w-2xl mx-auto mb-10 animate-fade-up stagger-1">
          Paste a channel URL. Get a full intelligence report — top content,
          winning keywords, audience demographics, and content gaps — in 30
          seconds.
        </p>

        {/* Search Demo */}
        <div className="animate-fade-up stagger-2">
          <SearchDemo />
        </div>

        {/* Social proof micro */}
        <p className="mt-6 text-sm text-[#6b7280] animate-fade-up stagger-3">
          Trusted by{" "}
          <span className="text-[#f9fafb] font-medium">12,000+ creators</span>{" "}
          across YouTube and TikTok
        </p>
      </div>
    </section>
  );
}

// ─── Search Demo ───────────────────────────────────────────
function SearchDemo() {
  const [state, setState] = useState<"idle" | "loading" | "results">("idle");

  function handleAnalyze() {
    if (!state || state === "results") {
      setState("loading");
      setTimeout(() => setState("results"), 2200);
    } else if (state === "idle") {
      setState("loading");
      setTimeout(() => setState("results"), 2200);
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Input bar */}
      <div className="flex items-center gap-3 bg-[#0f172a] border border-[#1e293b] rounded-2xl p-2 pl-4">
        <Search size={18} className="text-[#6b7280] flex-shrink-0" />
        <input
          type="text"
          placeholder="Enter any YouTube channel URL"
          className="flex-1 bg-transparent text-[#f9fafb] placeholder-[#6b7280] text-sm outline-none"
          defaultValue="https://youtube.com/@MrBeast"
        />
        <button
          onClick={handleAnalyze}
          className="btn-primary flex-shrink-0 flex items-center gap-2 text-sm px-5 py-2.5"
        >
          {state === "loading" ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Analyzing
            </>
          ) : (
            <>
              Analyze
              <ArrowRight size={14} />
            </>
          )}
        </button>
      </div>

      {/* Results / Loading */}
      {(state === "loading" || state === "results") && (
        <div className="mt-4 animate-fade-up">
          {state === "loading" ? (
            <LoadingSkeleton />
          ) : (
            <ResultCard />
          )}
        </div>
      )}
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-6 space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#1e293b] animate-pulse-skeleton" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-[#1e293b] rounded animate-pulse-skeleton w-1/2" />
          <div className="h-3 bg-[#1e293b] rounded animate-pulse-skeleton w-1/3" />
        </div>
      </div>
      <div className="space-y-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-3 bg-[#1e293b] rounded animate-pulse-skeleton" style={{ width: `${85 - i * 8}%` }} />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 mt-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-16 bg-[#1e293b] rounded-xl animate-pulse-skeleton" />
        ))}
      </div>
    </div>
  );
}

function ResultCard() {
  const topVideos = [
    { title: "I Spent 50 Hours in a Cave", views: "28M", rank: "#1" },
    { title: "$1 vs $100,000 Hotel Room", views: "22M", rank: "#2" },
    { title: "I Adopted Every Dog in a Shelter", views: "19M", rank: "#3" },
  ];

  const keywords = ["challenge", "survival", "money", "luxury", "extreme"];
  const demographics = [
    { label: "18-24", pct: 38, color: "#8b5cf6" },
    { label: "25-34", pct: 34, color: "#06b6d4" },
    { label: "35-44", pct: 18, color: "#10b981" },
    { label: "45+", pct: 10, color: "#6b7280" },
  ];

  return (
    <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-6 text-left">
      {/* Channel header */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4] flex items-center justify-center text-white font-bold text-sm">
          MB
        </div>
        <div>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-[#f9fafb]">MrBeast</p>
            <span className="text-xs px-2 py-0.5 rounded-full bg-[#8b5cf6]/20 text-[#8b5cf6] border border-[#8b5cf6]/30">
              Verified
            </span>
          </div>
          <p className="text-sm text-[#6b7280]">@MrBeast · 34M subscribers</p>
        </div>
        <div className="ml-auto text-right hidden sm:block">
          <p className="text-xs text-[#6b7280]">Analysis time</p>
          <p className="text-sm font-medium text-[#10b981]">28 seconds</p>
        </div>
      </div>

      {/* Top Videos */}
      <div className="mb-5">
        <p className="text-xs text-[#6b7280] uppercase tracking-wider mb-2 font-medium">
          Top Performing Content
        </p>
        <div className="space-y-2">
          {topVideos.map((v) => (
            <div
              key={v.rank}
              className="flex items-center gap-3 bg-[#030712] rounded-xl p-3"
            >
              <span className="text-xs font-bold text-[#8b5cf6] w-6">{v.rank}</span>
              <span className="flex-1 text-sm text-[#f9fafb] truncate">{v.title}</span>
              <span className="text-xs text-[#10b981] font-medium">{v.views} views</span>
            </div>
          ))}
        </div>
      </div>

      {/* Keywords */}
      <div className="mb-5">
        <p className="text-xs text-[#6b7280] uppercase tracking-wider mb-2 font-medium">
          Winning Keywords
        </p>
        <div className="flex flex-wrap gap-2">
          {keywords.map((k) => (
            <span
              key={k}
              className="text-xs px-3 py-1 rounded-full bg-[#06b6d4]/15 text-[#06b6d4] border border-[#06b6d4]/30"
            >
              #{k}
            </span>
          ))}
        </div>
      </div>

      {/* Demographics */}
      <div>
        <p className="text-xs text-[#6b7280] uppercase tracking-wider mb-2 font-medium">
          Audience Demographics
        </p>
        <div className="space-y-2">
          {demographics.map((d) => (
            <div key={d.label} className="flex items-center gap-3">
              <span className="text-xs text-[#6b7280] w-8 text-right">{d.label}</span>
              <div className="flex-1 h-2 bg-[#030712] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${d.pct}%`, backgroundColor: d.color }}
                />
              </div>
              <span className="text-xs text-[#f9fafb] w-8 font-medium">{d.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Features Grid ─────────────────────────────────────────
const features = [
  {
    icon: Eye,
    title: "Channel Intelligence",
    desc: "Get a complete profile of any creator — subscriber count, total views, engagement rate, and posting frequency at a glance.",
  },
  {
    icon: BarChart3,
    title: "Top Content Analysis",
    desc: "Identify the top 20 videos by views. See what's actually resonating, not just what's recent.",
  },
  {
    icon: Search,
    title: "Keyword Extraction",
    desc: "AI extracts winning keywords from titles, descriptions, and tags. Know exactly what to optimize for.",
  },
  {
    icon: Users,
    title: "Audience Demographics",
    desc: "Age, gender, geography, and viewer interests. Build content that hits the target every time.",
  },
  {
    icon: Target,
    title: "Content Gap Finder",
    desc: "Find topics your competitors haven't covered. Steal the blueprint and fill the void before anyone else.",
  },
  {
    icon: Bell,
    title: "Trend Alerts",
    desc: "Get notified when a competitor posts viral content. React fast, replicate smarter.",
  },
];

function Features() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-[#8b5cf6] font-semibold mb-3">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to dominate your niche
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto">
            One tool. Complete intelligence. No more guessing what works.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`card-surface p-6 card-hover animate-fade-up stagger-${i + 1}`}
            >
              <div className="w-11 h-11 rounded-xl bg-[#8b5cf6]/15 flex items-center justify-center mb-4">
                <f.icon size={20} className="text-[#8b5cf6]" />
              </div>
              <h3 className="font-semibold text-[#f9fafb] mb-2">{f.title}</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ───────────────────────────────────────────
const steps = [
  {
    num: "01",
    title: "Paste the URL",
    desc: "Drop any YouTube or TikTok channel link. No sign-up needed to start.",
  },
  {
    num: "02",
    title: "AI Analyzes",
    desc: "Our AI crawls the channel, scrapes top videos, extracts keywords, and builds a full report.",
  },
  {
    num: "03",
    title: "Get Your Report",
    desc: "Receive a structured intelligence report: top content, demographics, and winning keywords.",
  },
  {
    num: "04",
    title: "Steal What's Working",
    desc: "Use the insights to replicate what's proven, fill content gaps, and grow faster.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-[#06b6d4] font-semibold mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            4 steps to full competitor intel
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto">
            From URL to actionable insights in under 30 seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line desktop */}
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-px bg-gradient-to-r from-[#8b5cf6] via-[#06b6d4] to-[#10b981]" />

          {steps.map((s, i) => (
            <div key={s.num} className="relative text-center animate-fade-up stagger-{i+1}">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#030712] border border-[#1e293b] mb-5 relative z-10">
                <span className="text-2xl font-black text-[#8b5cf6]">{s.num}</span>
              </div>
              <h3 className="font-semibold text-[#f9fafb] mb-2">{s.title}</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats Bar ──────────────────────────────────────────────
function StatsBar() {
  const stats = [
    { value: "2.4M+", label: "Channels Analyzed" },
    { value: "48M+", label: "Videos Scraped" },
    { value: "94%", label: "Accuracy Rate" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-[#1e293b]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-4xl md:text-5xl font-black text-gradient mb-1">{s.value}</p>
            <p className="text-sm text-[#6b7280]">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Testimonials ──────────────────────────────────────────
const testimonials = [
  {
    name: "Sarah Chen",
    handle: "@sarahchenvlogs",
    quote:
      "I spent weeks manually researching competitors. NicheSpy gave me the same data in 30 seconds. My views went up 3x in two months.",
    stars: 5,
  },
  {
    name: "Marcus Torres",
    handle: "@marcustorresfit",
    quote:
      "The content gap finder is unreal. I found 6 video ideas nobody in my niche had covered. Two of them went viral.",
    stars: 5,
  },
  {
    name: "Aiko Tanaka",
    handle: "@aikotanaka",
    quote:
      "Finally a tool that actually delivers. The keyword extraction alone saved me 20 hours of research every week.",
    stars: 5,
  },
];

function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-[#10b981] font-semibold mb-3">
            Creators Love It
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't take our word for it
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`card-surface p-6 card-hover animate-fade-up stagger-${i + 1}`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} className="text-[#f59e0b] fill-[#f59e0b]" />
                ))}
              </div>
              <p className="text-[#f9fafb] text-sm leading-relaxed mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#06b6d4] flex items-center justify-center text-white text-xs font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-medium text-[#f9fafb]">{t.name}</p>
                  <p className="text-xs text-[#6b7280]">{t.handle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ───────────────────────────────────────────────
const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "/mo",
    desc: "Perfect for creators just getting started with competitor research.",
    features: [
      "5 channels/mo",
      "Top 20 videos per channel",
      "Keyword extraction",
      "Basic demographics",
      "Email support",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    price: "$49",
    period: "/mo",
    desc: "For growing creators who need deeper intel and gap analysis.",
    features: [
      "25 channels/mo",
      "Top 20 videos per channel",
      "Full keyword extraction",
      "Audience demographics",
      "Content Gap Finder",
      "Trend alerts",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/mo",
    desc: "For serious creators and agencies managing multiple channels.",
    features: [
      "Unlimited channels",
      "API access",
      "CSV export",
      "Full demographics",
      "Content Gap Finder",
      "Trend alerts",
      "Dedicated support",
      "Custom reports",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-[#8b5cf6] font-semibold mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Scale your intelligence
          </h2>
          <p className="text-[#6b7280] max-w-xl mx-auto">
            All plans include a 7-day free trial. No credit card required.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`card-surface p-6 flex flex-col relative animate-fade-up stagger-${i + 1} ${
                p.popular
                  ? "border-[#8b5cf6] glow-primary"
                  : "hover:border-[#8b5cf6]/50"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#8b5cf6] text-xs font-bold text-white">
                  Most Popular
                </div>
              )}

              <div className="mb-5">
                <p className="text-sm font-semibold text-[#f9fafb] mb-1">{p.name}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-[#f9fafb]">{p.price}</span>
                  <span className="text-sm text-[#6b7280]">{p.period}</span>
                </div>
                <p className="text-sm text-[#6b7280] mt-2">{p.desc}</p>
              </div>

              <ul className="space-y-2.5 mb-6 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check size={15} className="text-[#10b981] flex-shrink-0 mt-0.5" />
                    <span className="text-[#f9fafb]">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${
                  p.popular
                    ? "bg-[#8b5cf6] text-white hover:bg-[#7c3aed]"
                    : "bg-[#030712] border border-[#1e293b] text-[#f9fafb] hover:border-[#8b5cf6]/50"
                }`}
              >
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ───────────────────────────────────────────────────
function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="card-surface p-10 md:p-14 border-[#8b5cf6]/30 glow-primary relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[#8b5cf6]/10 blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to spy on the competition?
            </h2>
            <p className="text-[#6b7280] mb-8 max-w-md mx-auto">
              Join 12,000+ creators who use NicheSpy to build content that
              actually wins.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="btn-primary px-8 py-3.5 text-base flex items-center justify-center gap-2">
                Try Free for 7 Days
                <ArrowRight size={16} />
              </button>
              <button className="px-8 py-3.5 text-base rounded-xl font-semibold text-[#f9fafb] bg-[#030712] border border-[#1e293b] hover:border-[#1e293b]/80 transition-all">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-[#1e293b] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-[#8b5cf6] flex items-center justify-center">
                <Eye size={14} className="text-white" />
              </div>
              <span className="font-bold text-[#f9fafb]">NicheSpy</span>
            </div>
            <p className="text-xs text-[#6b7280] leading-relaxed">
              Spy on any channel in 30 seconds. AI-powered competitor
              intelligence for YouTube and TikTok creators.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-xs font-semibold text-[#f9fafb] uppercase tracking-wider mb-3">
              Product
            </p>
            <ul className="space-y-2">
              {["Features", "Pricing", "Changelog", "API Docs"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-[#6b7280] hover:text-[#f9fafb] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-xs font-semibold text-[#f9fafb] uppercase tracking-wider mb-3">
              Resources
            </p>
            <ul className="space-y-2">
              {["Blog", "YouTube Tutorials", "Creator Guide", "Community"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-[#6b7280] hover:text-[#f9fafb] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-xs font-semibold text-[#f9fafb] uppercase tracking-wider mb-3">
              Company
            </p>
            <ul className="space-y-2">
              {["About", "Privacy Policy", "Terms of Service", "Contact"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-[#6b7280] hover:text-[#f9fafb] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#1e293b] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#6b7280]">
            © 2025 NicheSpy. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[#6b7280] hover:text-[#f9fafb] transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" className="text-[#6b7280] hover:text-[#f9fafb] transition-colors">
              <Youtube size={16} />
            </a>
            <a href="#" className="text-[#6b7280] hover:text-[#f9fafb] transition-colors">
              <Twitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────
export default function Page() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Features />
      <HowItWorks />
      <StatsBar />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
