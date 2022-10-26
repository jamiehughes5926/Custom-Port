import Head from "next/head";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import Container from "../components/Container";
import { Text, useColorMode, Heading, Flex, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import React from "react";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function resume() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <Container>
      <Head>
        <title>Home - Jamie Hughes</title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        px="2"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Resume</Heading>
          <Text color={colorSecondary[colorMode]}>
            Here is a copy of my resume
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}
