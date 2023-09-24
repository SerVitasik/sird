import Header from "@/components/Header";
import News from "@/components/News";
import { News as DUMMY_NEWS } from "@/store/news";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
const NewsPage = () => {
  return (
    <Wrapper>
      <Header />
      <MainComponent>
        <News news={DUMMY_NEWS} />
      </MainComponent>
      <Footer />
    </Wrapper>
  );
};

export default NewsPage;
