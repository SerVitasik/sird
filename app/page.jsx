import Header from "../components/Header";
import Sird from "@/components/Sird";
import MainNews from "@/components/MainNews";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import Wrapper from "@/components/ui/Wrapper";
export default function HomePage() {
  return (
    <Wrapper>
      <Header />
      <MainComponent>
        <Sird />
        <MainNews />
        <Partners />
      </MainComponent>
      <Footer />
    </Wrapper>
  );
}
