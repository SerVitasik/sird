"use client";
import Header from "../components/Header";
import Sird from "@/components/Sird";
import MainNews from "@/components/MainNews";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import Wrapper from "@/components/ui/Wrapper";
import { useEffect, useState } from "react";
import Loading from "@/components/ui/Loading";

export default function HomePage() {
  const [news, setNews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getNews = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/news", {
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
        <Sird />
        {isLoading ? <Loading/> : news ? <MainNews news={news} /> : <Loading/>}
        <Partners />
      </MainComponent>
      <Footer />
    </Wrapper>
  );
}
