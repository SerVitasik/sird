"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import EditProductsForm from "@/components/products/EditProductsForm";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "@/components/ui/Loading";

const ProductsEditPage = () => {
  const pathname = usePathname();
  const currentId = pathname.split("/").pop();
  const [currentProducts, setCurrentProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/products/${currentId}`, {
          cache: 'no-store',
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
  
  let content;

  if (isLoading) {
    content = <Loading/>
  }

  if (currentProducts) {
    content = <EditProductsForm products={currentProducts} />
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

export default ProductsEditPage;