import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";

const NewsDetailPage = (props) => {
  return (
    <Wrapper>
      <Header />
      <MainComponent>
        <NewsDetail />
      </MainComponent>
      <Footer />
    </Wrapper>
  );
};

export default NewsDetailPage;
