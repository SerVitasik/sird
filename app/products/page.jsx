"use client";
import Header from "@/components/Header";
import Products from "@/components/products/Products";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import { useEffect, useState } from "react";
import Loading from "@/components/ui/Loading";

const ProductsPage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/products", {
          cache: "no-store",
          next: { revalidate: 10 },
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
    getProducts();
  }, []);

  let content;

  if (isLoading) {
    content = <Loading />;
  }

  if (data) {
    content = <Products products={data.products} />;
  }

  return (
    <>
      <Header />
      <MainComponent>{content}</MainComponent>
      <Footer />
    </>
  );
};

export default ProductsPage;
