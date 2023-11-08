"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import EditAnnouncementsForm from "@/components/announcements/EditAnnouncementsForm";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "@/components/ui/Loading";

const NewsEditPage = () => {
  const pathname = usePathname();
  const currentId = pathname.split("/").pop();
  const [currentAnnounce, setCurrentNews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`http://localhost:3000/api/announcements/${currentId}`, {
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
      {isLoading ? <Loading/> : currentAnnounce ? <EditAnnouncementsForm announce={currentAnnounce} /> : <Loading/>}
      </MainComponent>
      <Footer />
    </Wrapper>
  );
  
};

export default NewsEditPage;