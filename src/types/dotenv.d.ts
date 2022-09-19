/* eslint-disable no-unused-vars */

declare namespace NodeJS {
  interface ProcessEnv {
    PROVIDER_GITHUB_SECRET: string;
    PROVIDER_GITHUB_ID: string;
    AUTH_SECRET: string;
    MONGODB_URI: string;
  }
}
