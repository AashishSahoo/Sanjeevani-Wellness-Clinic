import Loader from "@/components/ui/Loader";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Specializations from "@/components/sections/Specializations";
import CtaBanner from "@/components/sections/CtaBanner";
import Facilities from "@/components/sections/Facilities";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import WorkingHours from "@/components/sections/WorkingHours";
import Location from "@/components/sections/Location";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specializations />
        <CtaBanner
          title="Ready to feel heard by your doctor?"
          description="Book a consultation with Dr. Ashford and get a personalized care plan."
        />
        <Facilities />
        <Services />
        <Gallery />
        <Testimonials />
        <WorkingHours />
        <Location />
        <CtaBanner
          title="Same-day appointments available."
          description="Call, message on WhatsApp, or use the form below to reserve your slot."
          variant="ink"
        />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
