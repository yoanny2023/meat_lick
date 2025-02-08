import "@/styles/globals.css"; 
import type { AppProps } from "next/app";
/* import { forum } from "@/styles/fonts"; // Import the font */
import { NavbarProvider } from "@/data/context/NavbarProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <NavbarProvider>
    <Component {...pageProps} /> 
  </NavbarProvider> 
);
}
