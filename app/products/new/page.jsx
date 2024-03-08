"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import NewProductsForm from "@/components/products/NewProductsForm";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const NewProductsPage = () => {
  const router = useRouter();
  const session = useSession();
  async function addProductsHandler(enteredProductsData) {
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        body: JSON.stringify(enteredProductsData),
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
    return <p>Access Denied</p>
  }

  return (
    <>
    <Header />
      <MainComponent>
        <NewProductsForm onAddProducts={addProductsHandler} />
      </MainComponent>
    <Footer />
  </>
  );
};

export default NewProductsPage;
