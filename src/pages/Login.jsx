import React from "react";
import { LoginForm } from "../sections";

const Login = () => {
  return (
    <div class="flex flex-col pt-10 sm:pt-20">
      <h2 class="font-bold text-3xl sm:text-[40px] text-[#111827] max-w-[410px] mx-auto leading-[130%] tracking-[-1.4px] text-center mb-[18px]">
        Log in to Talently.ai
      </h2>
      <p class="text-[#445E7C] text-center text-base max-w-[420px] mx-auto leading-[150%] mb-6">
        Enter your account credentials
      </p>
      <LoginForm />
    </div>
  );
};

export default Login;
