"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import NewNewsForm from "@/components/news/NewNewsForm";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const NewNewsPage = () => {
  const session = useSession();
  const router = useRouter();
  async function addNewsHandler(enteredNewsData) {
    try {
      const response = await fetch("/api/news", {
        method: "POST",
        body: JSON.stringify(enteredNewsData),
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
    return <p>Access Denied</p>
  }

  return (
    <>
    <Header />
      <MainComponent>
        <NewNewsForm onAddNews={addNewsHandler} />
      </MainComponent>
    <Footer />
  </>  
  );
};

export default NewNewsPage;
