import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import Title from "@/components/ui/Title";

const ReportsPage = () => {
  return (
    <Wrapper>
      <Header />
      <MainComponent>
        <Title>Звіти</Title>
        <a href="https://drive.google.com/drive/folders/1saBrI1aeGq2ZTooA7e-l5g0ZVAY-kzOg?usp=sharing">Посилання на звіти</a>
      </MainComponent>
      <Footer />
    </Wrapper>
  );
};

export default ReportsPage;
