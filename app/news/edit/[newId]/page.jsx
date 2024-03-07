"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import EditNewsForm from "@/components/news/EditNewsForm";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "@/components/ui/Loading";
import { useSelector } from "react-redux";

const NewsEditPage = () => {
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
        

          setCurrentNews(data);
          setIsLoading(false);
      } catch (error) {
        console.error("An error occurred:", error);
      } 
    };

    fetchData();

  }, [currentId]);
  
  let content;

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    return <p>Access Denied</p>
  }

  if (isLoading) {
    content = <Loading/>
  }

  if (currentNews) {
    content = <EditNewsForm news={currentNews} />
  }


  return (
    <>
    <Header />
      <MainComponent>
        {content}
      </MainComponent>
    <Footer />
  </>  
  );
  
};

export default NewsEditPage;