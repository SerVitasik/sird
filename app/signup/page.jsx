"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import RegisterForm from "@/components/auth/RegisterForm";

const SignUp = () => {
  
  // const router = useRouter();
  // async function addUserHandler(enteredUserData) {
  //   try {
  //     const response = await fetch("/api/auth/signup", {
  //       method: "POST",
  //       body: JSON.stringify(enteredUserData),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
      
  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       throw new Error(errorData.message); 
  //     }
  
  //     const data = await response.json();
  //     router.replace("/");
  //   } catch (error) {  
  //     console.error("An error occurred:", error);
  //   }
  // }
//onRegister={addUserHandler}
  return (
    <Wrapper>
      <Header />
      <MainComponent>
        <RegisterForm />
      </MainComponent>
      <Footer />
    </Wrapper>
  );
};

export default SignUp;
