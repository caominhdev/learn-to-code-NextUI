import "@/styles/globals.css";
import { NextUIProvider, createTheme } from "@nextui-org/react";

import type { AppProps } from "next/app";

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {}, // override dark theme colors
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
