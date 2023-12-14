"use client";

import { ReactNode } from "react";
// import { ConvexReactClient, ConvexProvider } from "convex/react";
import {
  AuthorizerProvider,
  Authorizer,
  useAuthorizer,
} from "@authorizerdev/authorizer-react";

// const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export const AuthorizerClientProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    // <ClerkProvider
    //   publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    // >
    <AuthorizerProvider
      config={{
        authorizerURL: "https://authorizer-production-0c5f.up.railway.app",
        redirectURL: "http://localhost:3000",
        clientID: "845feae8-837d-4978-b45d-d7f7f62cb3bb", // obtain your client id from authorizer dashboard
        // extraHeaders: {}, // Optional JSON object to pass extra headers in each authorizer requests.
        // use_refresh_token: true,
      }}
    >
      {/* <Authorizer /> */}
      {children}
    </AuthorizerProvider>
    // </ClerkProvider>
  );
};
