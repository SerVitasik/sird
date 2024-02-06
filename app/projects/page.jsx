"use client";
import Header from "@/components/Header";
import Projects from "@/components/projects/Projects";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import { useEffect, useState } from "react";
import Loading from "@/components/ui/Loading";


const ProjectsPage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProjects = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/projects", {
          cache: 'no-store',
          next: { revalidate: 10 }
        });
    
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message); 
        }
    
        const data = await response.json();
        setData(data);
        
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getProjects();
  }, []);

  let content;

  if (isLoading) {
    content = <Loading/>
  }

  if (data) {
    content = <Projects projects={data.projects} />
  }

  return (
    <Wrapper>
      <Header />
      <MainComponent>
        {content}
      </MainComponent>
      <Footer />
    </Wrapper>
  );
};

export default ProjectsPage;
