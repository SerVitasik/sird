import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import Contacts from "@/components/Contacts";

const ContactsPage = () => {
  return (
    <Wrapper>
      <Header />
      <MainComponent>
        <Contacts/>
      </MainComponent>
      <Footer withoutContent />
    </Wrapper>
  );
};

export default ContactsPage;
