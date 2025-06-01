import AboutUs from "./components/sections/AboutUs";
import ContactUs from "./components/sections/ContactUs";
import Services from "./components/sections/Services";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Hero from "./components/sections/Hero";
export default function Home() {
  return (
    <>
      <section id="home" className="section-offset">
        <Hero />
      </section>

      <section id="about" className="section-offset">
        <AboutUs />
      </section>

      <section id="services" className="section-offset">
        <Services />
      </section>

      <section id="whychooseus" className="section-offset">
        <WhyChooseUs />
      </section>

      <section id="contact" className="section-offset">
        <ContactUs />
      </section>
    </>
  );
}
