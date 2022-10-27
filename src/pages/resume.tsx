import Head from "next/head";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import Container from "../components/Container";
import {
  Text,
  useColorMode,
  Heading,
  Flex,
  Stack,
  Box,
  Button,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Resume from "./resume.png";
import Image from "next/image";

import React from "react";
import { Footer } from "../components/Footer";

export default function resume() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "gray.700",
    dark: "gray.400",
  };

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
        <Heading mb="0" pb="0">
          Resume
        </Heading>
        <Text> Click the image to download</Text>
        <Link href="https://drive.google.com/uc?export=download&id=1E3lM7DvPl8M0ZaFYsueEjgBdC1PsRoLZ">
        <Box boxSize="sm">
            <Image src={Resume}></Image>
          </Box>
        </Link>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
        
        </Flex>
      </Stack>
      <Footer />
    </Container>
  );
}
