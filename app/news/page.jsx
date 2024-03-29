"use client";
import Header from "@/components/Header";
import News from "@/components/news/News";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import { useEffect, useState } from "react";
import Loading from "@/components/ui/Loading";

const NewsPage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/news", {
          cache: "no-store",
          next: { revalidate: 10 },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getNews();
  }, []);

  let content;

  if (isLoading) {
    content = <Loading />;
  }

  if (data) {
    content = <News news={data.news} />;
  }

  return (
    <>
      <Header />
      <MainComponent>{content}</MainComponent>
      <Footer />
    </>
  );
};

export default NewsPage;
