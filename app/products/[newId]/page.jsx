"use client"
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import NewsDetail from "@/components/news/NewsDetail";
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
        const response = await fetch(`/api/news/${currentId}`, {
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

  let content;

  if (isLoading) {
    content = <Loading/>
  }

  if (currentNews) {
    content = <NewsDetail news={currentNews} />
  }


  return (
    <Wrapper>
      <Header />
      <MainComponent>
        {content}
      </MainComponent>
      <Footer />
    </Wrapper>
  );
};

export default NewsDetailPage;