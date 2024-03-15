import { Layout } from "../../components/Layout/Layout";
import { Navbar } from "../../components/Navbar/Navbar";
import Decore from "../../assets/images/Decore.svg";
import { HeroContent } from "../../components/HeroContent/HeroContent";
import { Services } from "../../components/Services/Services";
import { Destinations } from "../../components/Destinations/Destinations";

export const Home = () => {
  return (
    <div className="bg-no-repeat bg-right-top" style={{ backgroundImage: `url(${Decore})` }}>
      <Layout>
        <Navbar />
        <HeroContent />
        <Services />
        <Destinations />
      </Layout>
    </div>
  );
};
