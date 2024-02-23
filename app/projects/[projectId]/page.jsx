"use client"
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import ProjectsDetail from "@/components/projects/ProjectsDetail";
import { usePathname } from "next/navigation";
import Loading from "@/components/ui/Loading";

const ProjectsDetailPage = () => {
  const pathname = usePathname();
  const currentId = pathname.split("/").pop();
  const [currentProjects, setCurrentProjects] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/projects/${currentId}`, {
          cache: 'no-store',
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

  let content;

  if (isLoading) {
    content = <Loading/>
  }

  if (currentProjects) {
    content = <ProjectsDetail projects={currentProjects} />
  }


  return (
    <>
      <Header />
        <MainComponent>
          {content}
        </MainComponent>
      <Footer />
    </>
  );
};

export default ProjectsDetailPage;