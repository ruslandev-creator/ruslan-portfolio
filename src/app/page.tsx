import { Hero } from "@/components/sections/Hero";
import { Comparison } from "@/components/sections/Comparison";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { WhyMe } from "@/components/sections/WhyMe";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Comparison />
      <Portfolio />
      <Process />
      <WhyMe />
      <Pricing />
      <FAQ />
      <ContactCTA />
    </>
  );
}
