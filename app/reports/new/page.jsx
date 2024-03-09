"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import NewReportsForm from "@/components/reports/NewReportsForm";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const NewReportsPage = () => {
  const router = useRouter();
  const session = useSession();
  async function addReportsHandler(enteredReportsData) {
    try {
      const response = await fetch("/api/reports", {
        method: "POST",
        body: JSON.stringify(enteredReportsData),
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
        <NewReportsForm onAddReports={addReportsHandler} />
      </MainComponent>
      <Footer />
    </>
  );
};

export default NewReportsPage;
