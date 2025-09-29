import {Header} from "@/components/landing/header";
import {HeroSection} from "@/components/landing/hero.section";
import {PrimaryFeature} from "@/components/landing/primary-feature";
import {Footer} from "@/components/landing/footer";

export default function Page() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <PrimaryFeature />
      </main>
      <Footer />
    </div>
  )
}