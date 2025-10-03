import {Header} from "@/components/landing/header";
import {HeroSection} from "@/components/landing/hero.section";
import {PrimaryFeature} from "@/components/landing/primary-feature";
import {Footer} from "@/components/landing/footer";
import {CallToAction} from "@/components/landing/call-to-action";
import {SecondaryFeature} from "@/components/landing/secondary-feature";
import {Testimonials} from "@/components/landing/testimonials";
import {Pricing} from "@/components/landing/pricing";
import {Faqs} from "@/components/landing/faqs";

export default function Page() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <PrimaryFeature />
        <SecondaryFeature />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </div>
  )
}