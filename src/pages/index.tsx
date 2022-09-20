import Layout from "components/Layout";
import type { NextPageWithLayout } from "next";
import React, { ReactElement } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

const Landing: NextPageWithLayout = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  if (loading) {
    return (
      <div className="flex justify-center mt-8 text-center">
        <div className="flex-auto">
          <div className="text-lg mb-2">Loading...</div>
        </div>
      </div>
    );
  }
  if (session) {
    return (
      <div className="flex justify-center mt-8 text-center">
        <div className="flex-auto">
          <div className="text-lg mb-2">{JSON.stringify(session)}</div>
          <button type="button" className="btn-green" onClick={() => signOut()}>
            Sign out
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center mt-8 text-center">
        <div className="flex-auto">
          <div className="text-lg mb-2">You are not logged in!</div>
          <button type="button" className="btn-green" onClick={() => signIn()}>
            Sign in
          </button>
        </div>
      </div>
    );
  }
};

Landing.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Landing;
