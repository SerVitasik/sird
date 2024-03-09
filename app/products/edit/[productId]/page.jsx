"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import EditProductsForm from "@/components/products/EditProductsForm";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "@/components/ui/Loading";
import { useSession } from "next-auth/react";

const ProductsEditPage = () => {
  const session = useSession();
  const pathname = usePathname();
  const currentId = pathname.split("/").pop();
  const [currentProducts, setCurrentProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/products/${currentId}`, {
          cache: "no-store",
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }

        const data = await response.json();

        setCurrentProducts(data);
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

  if (currentProducts) {
    content = <EditProductsForm products={currentProducts} />;
  }

  return (
    <>
      <Header />
      <MainComponent>{content}</MainComponent>
      <Footer />
    </>
  );
};

export default ProductsEditPage;
