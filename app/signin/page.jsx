"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Wrapper from "@/components/ui/Wrapper";
import MainComponent from "@/components/ui/MainComponent";
import LoginForm from "@/components/auth/LoginForm";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const Login = () => {

  return (
    <Wrapper>
      <Header />
      <MainComponent>
        <LoginForm />
      </MainComponent>
      <Footer />
    </Wrapper>
  );
};

export default Login;
