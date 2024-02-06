"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import EditReportsForm from "@/components/reports/EditReportsForm";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "@/components/ui/Loading";

const NewsEditPage = () => {
  const pathname = usePathname();
  const currentId = pathname.split("/").pop();
  const [currentReport, setCurrentReport] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/reports/${currentId}`, {
          cache: 'no-store',
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }

        const data = await response.json();
        console.log("data", data);
        

          setCurrentReport(data);
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

  if (currentReport) {
    content =  <EditReportsForm report={currentReport} />
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

export default NewsEditPage;