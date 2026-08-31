import Header from "@/components/Header";
import ScrollIndicator from "@/components/ScrollIndicator";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Quote from "@/components/Quote";
import Founders from "@/components/Founders";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <ScrollIndicator />
      <Header />
      <main id="main-content">
        <span id="top" />
        <Hero />
        <Marquee />
        <Mission />
        <Services />
        <Work />
        <Quote />
        <Founders />
        <Newsletter />
      </main>
      <Footer />
      <ScrollReveal />
    </>
  );
}
