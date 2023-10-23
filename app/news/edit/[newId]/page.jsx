"use client"
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import EditNewsForm from "@/components/EditNewsForm";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NewsEditPage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const currentId = pathname.split("/").pop();
  const [prevData, setPrevData] = useState(null);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/news/${currentId}`, {
          cache: 'no-store',
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }

        const data = await response.json();
        console.log("data", data);
        

        setPrevData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchData();

  }, [currentId]);

  async function editNewsHandler(enteredNewsData) {
    try {
      const response = await fetch(`/api/news/${currentId}`, {
        method: "PUT",
        body: JSON.stringify(enteredNewsData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message); 
      }
  
      const data = await response.json();
      console.log(data);
      router.replace("/");
    } catch (error) {  
      console.error("An error occurred:", error);
    }
  }

  console.log(prevData);

  if (isLoading) {
    return (
      <Wrapper>
        <Header />
        <MainComponent>
          <p>Loading...</p>
        </MainComponent>
        <Footer />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Header />
      <MainComponent>
        <EditNewsForm onEditNews={editNewsHandler} prevNewsData={prevData} />
      </MainComponent>
      <Footer />
    </Wrapper>
  );
  
};

export default NewsEditPage;