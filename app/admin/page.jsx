"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainComponent from "@/components/ui/MainComponent";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <>
      <Header />
      <MainComponent>
        <LoginForm />
      </MainComponent>
      <Footer />
    </>
  );
};

export default Login;
