import Header from "@/components/Header";
import News from "@/components/News";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";

const getNews = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/news", {
      cache: 'no-store',
      next: { revalidate: 10 }
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message); 
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("An error occurred:", error);
  }
};


const NewsPage = async () => {
  const {news} = await getNews();
  return (
    <Wrapper>
      <Header />
      <MainComponent>
        <News news={news} />
      </MainComponent>
      <Footer />
    </Wrapper>
  );
};

export default NewsPage;
