import Head from "next/head";

export default function HeadMetaTag() {
  return (
    <Head>
      <title>Hackfest</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta
        name="description"
        content="A Modern full-fledged Admin and User Control based Blogging web application"
      />
      <meta
        name="keywords"
        content="nextjs,reactjs,typescript,eslint,prettier,husky,commitlint,pwa"
      />

      {/* Tap highlighting  */}
      <meta name="msapplication-tap-highlight" content="no" />

      {/* Layout mode */}
      <meta name="layoutmode" content="fitscreen/standard" />

      {/* imagemode - show image even in text only mode  */}
      <meta name="imagemode" content="force" />

      {/* Orientation  */}
      <meta name="screen-orientation" content="portrait" />

      {/*  Others */}
      <link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />

      {/*  Manifest.json  */}
      <link href="manifest.json" rel="manifest" />
    </Head>
  );
}
