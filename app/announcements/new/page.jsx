"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import NewAnnouncementsForm from "@/components/announcements/NewAnnouncementsForm";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const NewAnnouncementsPage = () => {
  const router = useRouter();
  const session = useSession();
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

  if (session.status !== "authenticated") {
    return <p>Access Denied</p>;
  }

  return (
    <>
      <Header />
      <MainComponent>
        <NewAnnouncementsForm onAddAnnouncements={addAnnouncementsHandler} />
      </MainComponent>
      <Footer />
    </>
  );
};

export default NewAnnouncementsPage;
