"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import NewNewsForm from "@/components/news/NewNewsForm";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

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

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
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
