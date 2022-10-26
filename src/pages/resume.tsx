import Head from "next/head";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import Container from "../components/Container";
import { Text, useColorMode, Heading, Flex, Stack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Link from "next/link";

import React from "react";

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
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Resume</Heading>
          <Link href="/">
            <Text color={colorSecondary[colorMode]}>Here is a copy</Text>
          </Link>
        </Flex>
      </Stack>
    </Container>
  );
}
