"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import LoginForm from "@/components/auth/LoginForm";
const Login = () => {
  
  return (
    <Wrapper>
      <Header />
      <MainComponent>
        <LoginForm/>
      </MainComponent>
      <Footer />
    </Wrapper>
  );
};

export default Login;
