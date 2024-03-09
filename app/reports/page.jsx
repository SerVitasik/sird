"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import ReportsList from "@/components/reports/ReportsList";
import Title from "@/components/ui/Title";
import { useState, useEffect } from "react";
import Loading from "@/components/ui/Loading";

const Reports = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getReports = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/reports", {
          cache: "no-store",
          next: { revalidate: 10 },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }

        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
    getReports();
  }, []);

  let content;

  if (isLoading) {
    content = <Loading />;
  }

  if (data) {
    content = <ReportsList reports={data.reports} />;
  }

  return (
    <>
      <Header />
      <MainComponent>
        <Title isCenter>Звіти</Title>
        {content}
      </MainComponent>
      <Footer />
    </>
    // <Wrapper>
    //   <Header />
    //   <MainComponent>
    //     <Title isCenter >Звіти</Title>
    //     {content}
    //   </MainComponent>
    //   <Footer />
    // </Wrapper>
  );
};

export default Reports;
