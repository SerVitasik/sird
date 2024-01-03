"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import NewAnnouncementsForm from "@/components/announcements/NewAnnouncementsForm";
import { useRouter } from "next/navigation";

const NewAnnouncementsPage = () => {
  const router = useRouter();
  async function addAnnouncementsHandler(enteredAnnouncementsData) {
    try {
      const response = await fetch("/api/announcements", {
        method: "POST",
        body: JSON.stringify(enteredAnnouncementsData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message); 
      }
      router.replace("/");
    } catch (error) {  
      console.error("An error occurred:", error);
    }
  }

  return (
    <Wrapper>
      <Header />
      <MainComponent>
        <NewAnnouncementsForm onAddAnnouncements={addAnnouncementsHandler} />
      </MainComponent>
      <Footer />
    </Wrapper>
  );
};

export default NewAnnouncementsPage;
