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
          <Heading mb={2}>Hi, im Jamie Hughes</Heading>
          <Text mb={0} color={colorSecondary[colorMode]}>
            Front End Dev ( Developer / Designer )
          </Text>

          <Heading as="u" fontSize={32} mt={20} mb={2}>
            Work
          </Heading>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            aspernatur, laudantium ad at illum iusto voluptas dicta unde
            tempora, impedit a vel dolorem est quo possimus iste nesciunt!
            Alias, placeat!
          </Text>
          <Heading as="u" fontSize={32} mt={20} mb={2}>
            Skills
          </Heading>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            aspernatur, laudantium ad at illum iusto voluptas dicta unde
            tempora, impedit a vel dolorem est quo possimus iste nesciunt!
            Alias, placeat!
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}
