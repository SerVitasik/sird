import Header from "../components/Header";
import Sird from "@/components/Sird";
import MainNews from "@/components/MainNews";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import Wrapper from "@/components/ui/Wrapper";

const getNews = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/news", {
      cache: 'no-store'
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


export default async function HomePage() {
  const {news} = await getNews();
  return (
    <Wrapper>
      <Header />
      <MainComponent>
        <Sird />
        <MainNews news={news}/>
        <Partners />
      </MainComponent>
      <Footer />
    </Wrapper>
  );
}
