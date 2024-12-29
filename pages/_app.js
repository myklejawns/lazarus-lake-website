import "../styles/styles.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script charset="utf-8" src="https://widgetv3.bandsintown.com/main.min.js"></Script>
      <Component {...pageProps} />
    </>
  );
}
