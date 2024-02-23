import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import AboutUs from "@/components/AboutUs";
const AboutUsPage = () => {
  return (
    <>
    <Header />
      <MainComponent>
        <AboutUs />
      </MainComponent>
    <Footer />
  </>  
  );
};

export default AboutUsPage;
