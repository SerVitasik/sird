"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import Teachers from "@/components/catalog/Teachers";
import NewTeacher from "@/components/catalog/NewTeacher";
import Loading from "@/components/ui/Loading";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const TeachersCatalogPage = () => {
  const session = useSession();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  async function onAddTeacherHandler(teacherInfo) {
    try {
      const response = await fetch("/api/catalog", {
        method: "POST",
        body: JSON.stringify(teacherInfo),
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

  useEffect(() => {
    const getCatalog = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/catalog", {
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
    getCatalog();
  }, []);

  let content;

  if (isLoading) {
    content = <Loading />;
  }

  if (data) {
    content = <Teachers teachers={data.catalog} />;
  }

  if (session.status !== "authenticated") {
    return <p>Access Denied</p>;
  }

  return (
    <>
      <Header />
      <MainComponent>
        <NewTeacher onAddTeacher={onAddTeacherHandler} />
        {content}
      </MainComponent>
      <Footer />
    </>
  );
};

export default TeachersCatalogPage;
