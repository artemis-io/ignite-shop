import { AppProps } from "next/app";

import logoImg from "../assets/logo.svg";

import Image from "next/image";
import { Container, Header } from "@/styles/pages/app";
import { globalStyles } from "@/styles/global";

globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}

export default App;
