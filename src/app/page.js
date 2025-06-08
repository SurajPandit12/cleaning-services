import AboutUs from "./(frontend)/components/sections/AboutUs";
import ContactUs from "./(frontend)/components/sections/ContactUs";
import Hero from "./(frontend)/components/sections/Hero";
import CleaningServices from "./(frontend)/components/sections/Services";
import WhyChooseUs from "./(frontend)/components/sections/WhyChooseUs";
export const metadata = {
  metadataBase: new URL("https://besteverhospitality.com.au/"),

  title:
    "Top Cleaning Services | Home,Apartment, Office & Commercial Cleaning Near You",
  keywords:
    "cleaning service, house cleaning services, home cleaning services, cleaning services home cleaning, home cleaning services melbourne, house cleaning cleaning services, house cleaning services melbourne, maid service cleaning, cleaning services cleaners, commercial cleaning services near me, house cleaning services near me, house cleaning services sydney, cleaning services services, commercial cleaning cleaning services, commercial cleaning services, house cleaning service, residential cleaning services near me, cleaning services adelaide, commercial office cleaning services, house cleaning maid services near me, ndis cleaning services, cleaning and servicing, office cleaning services, air conditioner cleaning service, business cleaning services near me, clean maid service, cleaning maid service, cleaning services award, cleaning services in brisbane, cleaning services in sydney, commercial cleaning services perth, home cleaning services perth, cleaning aircon services, cleaning and services, cleaning service near me, cleaning services for sale, home cleaning service, home cleaning services near me, household cleaning services near me, cleaning services for office, domestic cleaning services, deep cleaning service, professional cleaning services, residential cleaning, commercial cleaning services, home cleaning company, apartment cleaning service, best cleaning company, move in move out cleaning, post renovation cleaning, airbnb cleaning services, end of lease cleaning, spring cleaning services, eco-friendly cleaning service, one time house cleaning, recurring cleaning service, same day cleaning service, janitorial services, industrial cleaning services, green cleaning certifications, facility cleaning management",
  description:
    "Discover professional cleaning services tailored for homes, offices, and commercial spaces. From deep cleaning to Airbnb and end of lease cleans—trusted, affordable, and available near you in Melbourne, Sydney, Brisbane, and more.",
  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Top Cleaning Services | Home,Apartment, Office & Commercial Cleaning Near You",
    description:
      "Discover professional cleaning services tailored for homes, offices, and commercial spaces. From deep cleaning to Airbnb and end of lease cleans—trusted, affordable, and available near you in Melbourne, Sydney, Brisbane, and more.",
    images: "/",
    url: "/",
  },
};

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
        <CleaningServices />
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
