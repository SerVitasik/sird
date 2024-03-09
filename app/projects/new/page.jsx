"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import NewProjectsForm from "@/components/projects/NewProjectsForm";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const NewProjectsPage = () => {
  const router = useRouter();
  const session = useSession();
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

  if (session.status !== "authenticated") {
    return <p>Access Denied</p>;
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
