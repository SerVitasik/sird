"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import EditNewsForm from "@/components/news/EditNewsForm";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "@/components/ui/Loading";
import { useSession } from "next-auth/react";

const NewsEditPage = () => {
  const pathname = usePathname();
  const currentId = pathname.split("/").pop();
  const [currentNews, setCurrentNews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();

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
  
  if (session.status !== "authenticated") {
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