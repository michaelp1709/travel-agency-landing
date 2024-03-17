import { Layout } from "../../components/Layout/Layout";
import { Navbar } from "../../components/Navbar/Navbar";
import Decore from "../../assets/images/Decore.svg";
import { HeroContent } from "../../components/HeroContent/HeroContent";
import { Services } from "../../components/Services/Services";
import { Destinations } from "../../components/Destinations/Destinations";
import { BookTrip } from "../../components/BookTrip/BookTrip";
import { Testimonials } from "../../components/Testimonials/Testimonials";
import { Logos } from "../../components/Logos/Logos";
import { SuscribeSection } from "../../components/SuscribeSection/SuscribeSection";
import { Footer } from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <div className="bg-no-repeat bg-right-top" style={{ backgroundImage: `url(${Decore})` }}>
      <Layout>
        <Navbar />
        <HeroContent />
        <Services />
        <Destinations />
        <BookTrip />
        <Testimonials />
        <Logos />
        <SuscribeSection />
        <Footer />
      </Layout>
    </div>
  );
};
