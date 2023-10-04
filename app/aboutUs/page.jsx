import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import AboutUs from "@/components/AboutUs";
const AboutUsPage = () => {
  return (
    <Wrapper>
      <Header />
      <MainComponent>
        <AboutUs />
      </MainComponent>
      <Footer />
    </Wrapper>
  );
};

export default AboutUsPage;
