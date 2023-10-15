"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import NewNewsForm from "@/components/NewNewsForm";
import { useRouter } from "next/navigation";

const NewNewsPage = () => {
  const router = useRouter();
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch("/api/news/new", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    router.replace("/");
  }

  return (
    <Wrapper>
      <Header />
      <MainComponent>
        <NewNewsForm onAddMeetup={addMeetupHandler} />
      </MainComponent>
      <Footer />
    </Wrapper>
  );
};

export default NewNewsPage;
