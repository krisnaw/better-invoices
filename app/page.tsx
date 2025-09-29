import {Eye, FileStack, Sparkles} from "lucide-react";

import {HeroSection, type Metric} from "@/components/landing/hero-section";
import {type Feature} from "@/components/landing/features-section";
import {type WorkflowStep} from "@/components/landing/workflow-section";
import {type Review} from "@/components/landing/reviews-section";
import {type FaqItem} from "@/components/landing/faq-section";
import {LandingHeader, type NavLink} from "@/components/landing/header";
import {type FooterSection, LandingFooter} from "@/components/landing/footer";

const metrics: Metric[] = [
  { value: "2.8x", label: "Faster payments after switching" },
  { value: "96%", label: "Invoices paid before the due date" },
  { value: "12h", label: "Weekly finance hours given back" },
];

const features: Feature[] = [
  {
    title: "Launch invoices in under a minute",
    description:
      "Reuse saved services, currencies, and tax presets so every invoice ships polished and on-brand without spreadsheet gymnastics.",
    icon: FileStack,
  },
  {
    title: "Know exactly who opened what",
    description:
      "Real-time view timelines show every open, download, and click so you can follow up with context instead of guesswork.",
    icon: Eye,
  },
  {
    title: "Follow-up automations clients appreciate",
    description:
      "Schedule polite nudges, late-fee escalations, and payment receipts that speak in your brand voice and keep cash moving.",
    icon: Sparkles,
  },
];

const workflows: WorkflowStep[] = [
  {
    title: "Draft",
    description:
      "Start from an approved template, pull in products, and personalize terms with guardrails for your team.",
  },
  {
    title: "Send & track",
    description:
      "Share a single client link with embedded payments and know the moment it’s reviewed, approved, and paid.",
  },
  {
    title: "Reconcile automatically",
    description:
      "Sync payouts to your ledger, trigger project kickoffs, and keep finance reports updated without manual entry.",
  },
];

const highlights = [
  "One client portal for invoices, proposals, and receipts",
  "Instant notifications when decision-makers view",
  "Late fees and retainers collected on autopilot",
  "Exports built for your accounting stack",
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
      "We collapsed three tools into Better Invoices and cut our payment cycle from 18 days to 6—clients love the portal.",
    name: "Sasha Grant",
    role: "Founder, Tidepool Studio",
    initials: "SG",
    avatarSeed: 47,
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&h=160&q=80",
  },
  {
    quote:
      "Our ops team tracks every approval without asking. Read receipts plus automated nudges keep cashflow predictable.",
    name: "Jordan Lee",
    role: "Fractional COO",
    initials: "JL",
    avatarSeed: 32,
  },
  {
    quote:
      "Seeing exactly who opened what means we follow up with context—and we recovered four overdue retainers in the first month.",
    name: "Priya Desai",
    role: "Owner, Lumen Accounting",
    initials: "PD",
    avatarSeed: 64,
  },
];

const faqs: FaqItem[] = [
  {
    question: "How fast can we launch?",
    answer:
      "Most teams ship their first live invoice the same day. Import branding, taxes, and product catalogs with guided onboarding from our team.",
  },
  {
    question: "Can you migrate our existing invoices and clients?",
    answer:
      "Yes. Upload CSVs or connect QuickBooks/Xero and we’ll migrate your client directory, product catalog, and historical invoices at no additional cost.",
  },
  {
    question: "Will clients need an account to pay?",
    answer:
      "No. Clients receive a branded link where they can review, download, and pay via card, ACH, or transfer without creating an account.",
  },
  {
    question: "Do you support global taxes and currencies?",
    answer:
      "Absolutely. Configure per-client currencies, add region-specific tax presets, and let Better Invoices handle the calculations for each line item.",
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
    <div className="flex min-h-screen flex-col bg-white">
      <LandingHeader links={navLinks} />

      <main className="flex-1">
        <HeroSection metrics={metrics} />
        {/*<ClientsSection logos={clientLogos} />*/}
        {/*<FeaturesSection features={features} />*/}
        {/*<MidCtaSection />*/}
        {/*<WorkflowSection steps={workflows} highlights={highlights} />*/}
        {/*<ReviewsSection reviews={reviews} />*/}
        {/*<FinalCtaSection />*/}
        {/*<FaqSection faqs={faqs} />*/}
      </main>

      <LandingFooter sections={footerSections} currentYear={currentYear} />
    </div>
  );
}
