import Head from "next/head";
import Background from "../components/epk-section/Background";
import Logo from "../components/Logo";
import Overlay from "../components/epk-section/Overlay";
import Navbar from "../components/Navbar";
import SocialBar from "../components/SocialBar";

export default function Main() {
  return (
    <>
      <Head>
        <title>Lazarus Lake</title>
        <meta name="description" content="Lazarus Lake" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Background />
      <Logo />
      <Navbar />
      <SocialBar />
      <Overlay />
    </>
  );
}
