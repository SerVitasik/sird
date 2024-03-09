"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
        const response = await fetch("/api/announcements", {
          cache: "no-store",
          next: { revalidate: 10 },
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

  let content;

  if (isLoading) {
    content = <Loading />;
  }

  if (data) {
    content = <AnnouncementsList announcements={data.announcements} />;
  }

  return (
    <>
      <Header />
      <MainComponent>
        <Title isCenter>Анонси</Title>
        {content}
      </MainComponent>
      <Footer />
    </>
  );
};

export default Announcements;
