import type { NextPage } from "next";
import type { NextComponentType } from "next/dist/next-server/lib/utils";

declare module "next" {
  export declare type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    // eslint-disable-next-line no-unused-vars
    getLayout?: (component: NextComponentType) => JSX.Element;
  };
}
