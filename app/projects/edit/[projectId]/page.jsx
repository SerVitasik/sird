"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import EditProjectsForm from "@/components/projects/EditProjectsForm";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "@/components/ui/Loading";
import { useSession } from "next-auth/react";

const ProjectsEditPage = () => {
  const pathname = usePathname();
  const currentId = pathname.split("/").pop();
  const [currentProjects, setCurrentProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/projects/${currentId}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }

        const data = await response.json();

        setCurrentProjects(data);
        setIsLoading(false);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();
  }, [currentId]);

  if (session.status !== "authenticated") {
    return <p>Access Denied</p>;
  }

  let content;

  if (isLoading) {
    content = <Loading />;
  }

  if (currentProjects) {
    content = <EditProjectsForm projects={currentProjects} />;
  }

  return (
    <>
      <Header />
      <MainComponent>{content}</MainComponent>
      <Footer />
    </>
  );
};

export default ProjectsEditPage;
