import About from "@/components/Home/About";
import CTA from "@/components/Home/CTA";
import Hero from "@/components/Home/Hero";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export const metadata = {
  title: "Home",
  description: "Welcome to CCOG official website.",
};

export default function Home() {
  return (
    <>
     <Hero/>
     <About/>
     <WhyChooseUs/>
     <CTA/>
    </>
  );
}
