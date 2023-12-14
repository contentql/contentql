"use client";

import { ReactNode, useCallback, useMemo } from "react";
import {
  ConvexReactClient,
  ConvexProvider,
  ConvexProviderWithAuth,
} from "convex/react";
import {
  AuthorizerProvider,
  Authorizer,
  useAuthorizer,
} from "@authorizerdev/authorizer-react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export const ConvexClientProvider = ({ children }: { children: ReactNode }) => {
  const useAuthFromAuthorizer = () => {
    const {
      loading,
      user,
      authorizerRef: { getToken },
      token,
    } = useAuthorizer();
    // console.log({ token });
    const fetchAccessToken = useCallback(
      async ({ forceRefreshToken }: { forceRefreshToken: Boolean }) => {
        // const { id_token } = await getToken({});
        // console.log({ token });
        return token?.id_token ?? null;
        // return token?.id_token;
        // return localStorage.getItem("access_token");
      },
      [token]
    );

    return useMemo(
      () => ({
        // Whether the auth provider is in a loading state
        // isLoading: isLoading,
        isLoading: loading,
        // Whether the auth provider has the user signed in
        // isAuthenticated: isAuthenticated ?? false,
        isAuthenticated: Boolean(user),
        // The async function to fetch the ID token
        fetchAccessToken,
      }),
      // [loading, user, fetchAccessToken]
      [fetchAccessToken]
    );
  };

  return (
    // <ClerkProvider
    //   publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    // >
    // <AuthorizerProvider
    //   config={{
    //     authorizerURL: "http://localhost:8080",
    //     redirectURL: window.location.origin,
    //     clientID: "845feae8-837d-4978-b45d-d7f7f62cb3bb", // obtain your client id from authorizer dashboard
    //     // extraHeaders: {}, // Optional JSON object to pass extra headers in each authorizer requests.
    //   }}
    // >
    <ConvexProviderWithAuth client={convex} useAuth={useAuthFromAuthorizer}>
      {children}
    </ConvexProviderWithAuth>
    // </AuthorizerProvider>
    // </ClerkProvider>
  );
};
