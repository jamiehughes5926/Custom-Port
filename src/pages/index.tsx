import Head from "next/head";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import Container from "../components/Container";
import {
  Text,
  useColorMode,
  Heading,
  Flex,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Highlight,
} from "@chakra-ui/react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import TypeWriter from "../components/typewriter";

export default function Index() {
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
          <Heading mb={0}>
            Hi, im <Text color="#34e4ea">Jamie Hughes</Text>
          </Heading>
          <Text mb={-10} color={colorSecondary[colorMode]}>
            Full Stack Developer ( Developer / Designer )
          </Text>

          <Heading as="u" fontSize={32} mt={20} mb={2}>
            About
          </Heading>
          <Text color={colorSecondary[colorMode]}>
            I am a Full Stack developer currently in my final year for my
            Bachelors of Science majoring in Computer Science.
          </Text>
          <Heading as="u" fontSize={32} mt={20} mb={2}>
            Technologies
          </Heading>
          <Text color={colorSecondary[colorMode]}>
            <Flex
              pt="10"
              h="345px"
              w={{ base: "400px", md: "700px" }}
              flexDirection="row"
              justifyContent="center"
            ></Flex>
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}
