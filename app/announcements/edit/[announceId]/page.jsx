"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import EditAnnouncementsForm from "@/components/announcements/EditAnnouncementsForm";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "@/components/ui/Loading";
import { useSelector } from "react-redux";

const NewsEditPage = () => {
  const pathname = usePathname();
  const currentId = pathname.split("/").pop();
  const [currentAnnounce, setCurrentNews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/announcements/${currentId}`, {
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

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    return <p>Access Denied</p>
  }

  let content;

  if (isLoading) {
    content = <Loading/>
  }

  if (currentAnnounce) {
    content =  <EditAnnouncementsForm announce={currentAnnounce} />
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