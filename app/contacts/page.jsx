import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import Contacts from "@/components/Contacts";

const ContactsPage = () => {
  return (
    <>
    <Header />
      <MainComponent>
      <Contacts/>
      </MainComponent>
    <Footer withoutContent />
  </>  
  );
};

export default ContactsPage;
