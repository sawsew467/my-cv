import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {

  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script id="my-script">

        </Script>
      </body>
    </Html>
  );
}
