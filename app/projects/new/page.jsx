"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import NewProjectsForm from "@/components/projects/NewProjectsForm";
import { useRouter } from "next/navigation";

const NewProjectsPage = () => {
  const router = useRouter();
  async function addProjectsHandler(enteredProjectsData) {
    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        body: JSON.stringify(enteredProjectsData),
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
        <NewProjectsForm onAddProjects={addProjectsHandler} />
      </MainComponent>
      <Footer />
    </Wrapper>
  );
};

export default NewProjectsPage;
