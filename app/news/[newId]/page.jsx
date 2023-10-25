"use client"
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import NewsDetail from "@/components/NewsDetail";
import { usePathname } from "next/navigation";
import Loading from "@/components/ui/Loading";

const NewsDetailPage = () => {
  const pathname = usePathname();
  const currentId = pathname.split("/").pop();
  const [currentNews, setCurrentNews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:3000/api/news/${currentId}`, {
          cache: 'no-store',
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }

        const data = await response.json();
        console.log("data", data);
        

          setCurrentNews(data);
          setIsLoading(false);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();

  }, [currentId]);

  return (
    <Wrapper>
      <Header />
      <MainComponent>
        {isLoading ? <Loading/> : currentNews ? <NewsDetail news={currentNews} /> : <Loading/>}
      </MainComponent>
      <Footer />
    </Wrapper>
  );
};

export default NewsDetailPage;