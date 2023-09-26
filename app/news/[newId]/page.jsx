"use client"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import NewsDetail from "@/components/NewsDetail";
import { News } from "@/store/news";
import { usePathname } from "next/navigation";
const NewsDetailPage = () => {

  const pathname = usePathname();
  const currentId = pathname.split("/").pop();
console.log(currentId);
  const currentNews = News.find(item => item.id === currentId);
  console.log(currentNews);
  return (
    <Wrapper>
      <Header />
      <MainComponent>
        <NewsDetail news={currentNews}/>
      </MainComponent>
      <Footer />
    </Wrapper>
  );
};

export default NewsDetailPage;
