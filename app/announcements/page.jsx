import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import AnnouncementsList from "@/components/announcements/AnnouncementsList";
import Title from "@/components/ui/Title";

const Announcements = () => {
  return (
    <Wrapper>
      <Header />
      <MainComponent>
        <Title isCenter>Анонси</Title>
        <AnnouncementsList/>
      </MainComponent>
      <Footer />
    </Wrapper>
  );
};

export default Announcements;
