"use client";
import React from "react";
import { Authorizer } from "@authorizerdev/authorizer-react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login / Signup</h1>
      <br />
      <Authorizer
        onLogin={(loginResponse) => {
          console.log(loginResponse);
          // router.push("/");
          localStorage.setItem("access_token", `${loginResponse?.id_token}`);
        }}
        onMagicLinkLogin={(magicLinkResponse) => {}}
        onSignup={(signupResponse) => {
          console.log({ signupResponse });
        }}
        // onForgotPassword={(forgotPasswordResponse = {})}
      />
    </div>
  );
};

export default LoginPage;
