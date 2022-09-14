import { Toaster } from "react-hot-toast";

import "../styles/globals.scss";
import Navbar from "components/Navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
