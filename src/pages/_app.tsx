import "styles/globals.css";

import { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import HeadMetaTag from "components/utilities/HeadMetaTag";

const queryClient = new QueryClient();

function rootApp({ Component, pageProps }: AppProps) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  // TODO: Need a loader for page transitions
  return getLayout(
    <div>
      <SessionProvider session={pageProps.session}>
        <QueryClientProvider client={queryClient}>
          <HeadMetaTag />
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </SessionProvider>
    </div>
  );
}

export default rootApp;
