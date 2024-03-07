"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import NewProjectsForm from "@/components/projects/NewProjectsForm";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

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

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    return <p>Access Denied</p>
  }

  return (
    <>
      <Header />
        <MainComponent>
          <NewProjectsForm onAddProjects={addProjectsHandler} />
        </MainComponent>
      <Footer />
    </>
  );
};

export default NewProjectsPage;
