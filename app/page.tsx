import Link from "next/link";
import {ArrowRight, Eye, FileStack, Sparkles} from "lucide-react";

import {HeroSection, type Metric} from "@/components/landing/hero-section";
import {ClientsSection} from "@/components/landing/clients-section";
import {type Feature, FeaturesSection} from "@/components/landing/features-section";
import {MidCtaSection} from "@/components/landing/mid-cta-section";
import {WorkflowSection, type WorkflowStep} from "@/components/landing/workflow-section";
import {type Review, ReviewsSection} from "@/components/landing/reviews-section";
import {FinalCtaSection} from "@/components/landing/final-cta-section";
import {type FaqItem, FaqSection} from "@/components/landing/faq-section";
import {LandingHeader, type NavLink} from "@/components/landing/header";
import {LandingFooter, type FooterSection} from "@/components/landing/footer";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";

const metrics: Metric[] = [
  { value: "2.8x", label: "Faster payment turnaround" },
  { value: "96%", label: "Invoices paid on time" },
  { value: "12h", label: "Finance hours saved weekly" },
];

const features: Feature[] = [
  {
    title: "Invoice management that feels effortless",
    description:
      "Create, duplicate, and organize invoices with product catalogs, localized tax logic, and saved client preferences in one clean workspace.",
    icon: FileStack,
  },
  {
    title: "See when clients open and view",
    description:
      "Real-time read receipts and status timelines show exactly when customers opened, downloaded, and paid every invoice.",
    icon: Eye,
  },
  {
    title: "Automations that stay polite",
    description:
      "Smart nudges escalate automatically while keeping your brand voice, so you get paid without chasing manually.",
    icon: Sparkles,
  },
];

const workflows: WorkflowStep[] = [
  {
    title: "Compose in seconds",
    description:
      "Brand-aligned templates with product catalogs, tax logic, and multi-currency support baked in.",
  },
  {
    title: "Automate follow-ups",
    description:
      "Gentle nudges escalate to firm reminders, while your team stays focused on work that matters.",
  },
  {
    title: "Collect and reconcile",
    description:
      "Card, ACH, and bank transfer support with auto-ledger reconciliation for your ERP.",
  },
];

const highlights = [
  "Multi-entity ready from day one",
  "Realtime status sync into your tools",
  "Late fees and renewals auto-applied",
  "Global tax compliance handled",
];

const clientLogos = [
  "Linear",
  "Polar",
  "Superhuman",
  "Arc",
  "Mercury",
  "Pitch",
  "Vercel",
  "Figma",
  "Webflow",
];

const reviews: Review[] = [
  {
    quote:
      "We replaced three different tools with Better Invoices and now ship every retainer invoice in under five minutes.",
    name: "Sasha Grant",
    role: "Founder, Tidepool Studio",
    initials: "SG",
    avatarSeed: 47,
  },
  {
    quote:
      "My clients pay faster because they can see the whole timeline and pay in a single click—no more chasing awkwardly.",
    name: "Jordan Lee",
    role: "Fractional COO",
    initials: "JL",
    avatarSeed: 32,
  },
  {
    quote:
      "The read receipts and automation rules are a lifesaver. I finally know who opened what and when to follow up.",
    name: "Priya Desai",
    role: "Owner, Lumen Accounting",
    initials: "PD",
    avatarSeed: 64,
  },
];

const faqs: FaqItem[] = [
  {
    question: "Can I import my existing invoices and clients?",
    answer:
      "Yes. Upload CSVs or connect QuickBooks/Xero and we’ll migrate your client directory, product catalog, and historical invoices at no additional cost.",
  },
  {
    question: "Will my clients need an account to pay?",
    answer:
      "No. Clients receive a branded link where they can review, download, and pay via card, ACH, or transfer without creating an account.",
  },
  {
    question: "Do you support multiple currencies and taxes?",
    answer:
      "Absolutely. Configure per-client currencies, add region-specific tax presets, and let Better Invoices handle the calculations for each line item.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "You get a 14-day free trial with full access. No credit card required until you’re ready to go live.",
  },
];

const navLinks: NavLink[] = [
  { label: "Product", href: "#features" },
  { label: "Clients", href: "#clients" },
  { label: "Workflow", href: "#workflow" },
  { label: "Reviews", href: "#reviews" },
  { label: "Security", href: "#workflow" },
  { label: "FAQ", href: "#faq" },
  { label: "Pricing", href: "/register" },
  { label: "Resources", href: "mailto:founders@betterinvoices.app" },
];

const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "#hero" },
      { label: "Features", href: "#features" },
      { label: "Workflow", href: "#workflow" },
      { label: "Roadmap", href: "mailto:founders@betterinvoices.app" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "mailto:founders@betterinvoices.app" },
      { label: "Careers", href: "mailto:founders@betterinvoices.app" },
      { label: "Press", href: "mailto:founders@betterinvoices.app" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Customer stories", href: "#features" },
      { label: "Support", href: "mailto:support@betterinvoices.app" },
      { label: "Status", href: "https://status.betterinvoices.app" },
    ],
  },
];

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <LandingHeader links={navLinks} />

      <main className="flex-1">
        <HeroSection metrics={metrics} />
        <ClientsSection logos={clientLogos} />
        <FeaturesSection features={features} />
        <MidCtaSection />
        <WorkflowSection steps={workflows} highlights={highlights} />
        <ReviewsSection reviews={reviews} />
        <FinalCtaSection />
        <FaqSection faqs={faqs} />
      </main>

      <LandingFooter sections={footerSections} currentYear={currentYear} />
    </div>
  );
}
