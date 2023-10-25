"use client";
import Header from "@/components/Header";
import News from "@/components/News";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import { useEffect, useState } from "react";
import Loading from "@/components/ui/Loading";


const NewsPage = () => {
  const [news, setNews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3000/api/news", {
          cache: 'no-store',
          next: { revalidate: 10 }
        });
    
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message); 
        }
    
        const data = await response.json();
        setNews(data);
        setIsLoading(false);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
    getNews();
  }, []);

  return (
    <Wrapper>
      <Header />
      <MainComponent>
        {isLoading ? <Loading/> : news ? <News news={news} /> : <Loading/>}
      </MainComponent>
      <Footer />
    </Wrapper>
  );
};

export default NewsPage;
