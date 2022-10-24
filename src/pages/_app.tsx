import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/react";
import { Global, css } from "@emotion/react";
import theme from "../theme";
import customTheme from "../theme";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Global
        styles={css`
          ::selection {
            background-color: #90cdf4;
            color: #fefefe;
          }
          ::-moz-selection {
            background: #ffb7b7;
            color: #fefefe;
          }
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === "light" ? "white" : "#171717"};
          }
        `}
      />
      {children}
    </>
  );
};
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider
        options={{
          initialColorMode: "light",
          useSystemColorMode: true,
        }}
      >
        <GlobalStyle>
          <AnimatePresence
            exitBeforeEnter
            initial={true}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} />
          </AnimatePresence>
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default MyApp;
