"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import NewNewsForm from "@/components/news/NewNewsForm";
import { useRouter } from "next/navigation";

const NewNewsPage = () => {
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

  return (
    <Wrapper>
      <Header />
      <MainComponent>
        <NewNewsForm onAddNews={addNewsHandler} />
      </MainComponent>
      <Footer />
    </Wrapper>
  );
};

export default NewNewsPage;
