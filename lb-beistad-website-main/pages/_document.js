import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Climate+Crisis&family=Montserrat+Alternates:wght@300;400;500;600;800&display=swap"
          rel="stylesheet"
        />
        {/* Favicon */}
        <link rel="icon" href="/images/favicon.ico" />
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        {/* OG Protocol Meta Tags */}
        <meta property="og:url" content="https://www.lbbeistad.com" />
                  
        <meta property="og:title" content="LB Beistad" />
                  
        <meta
          property="og:description"
          content="Southern New Wave and Indie Pop artist out of Nashville, TN."
        />
                  
        <meta
          property="og:image"
          content="/images/lbbeistad_background_halftone.jpg"
        />
                  
        <meta property="og:site_name" content="LB Beistad" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
