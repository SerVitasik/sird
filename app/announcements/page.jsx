"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import AnnouncementsList from "@/components/announcements/AnnouncementsList";
import Title from "@/components/ui/Title";
import { useState, useEffect } from "react";
import Loading from "@/components/ui/Loading";

const Announcements = () => {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAnnouncements = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3000/api/announcements", {
          cache: 'no-store',
          next: { revalidate: 10 }
        });
    
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message); 
        }
    
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
    getAnnouncements();
  }, []);
  console.log(data);

  return (
    <Wrapper>
      <Header />
      <MainComponent>
        <Title isCenter >Анонси</Title>
        {isLoading ? <Loading/> : data ? <AnnouncementsList announcements={data.announcements} /> : <Loading/>}
      </MainComponent>
      <Footer />
    </Wrapper>
  );
};

export default Announcements;
