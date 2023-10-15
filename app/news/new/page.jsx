import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import NewNewsForm from "@/components/NewNewsForm";

const NewNewsPage = () => {

  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('/api/new', {
      method: 'POST',
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);
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
