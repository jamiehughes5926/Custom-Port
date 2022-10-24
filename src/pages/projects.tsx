import Head from "next/head";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import Container from "../components/Container";
import { Text, useColorMode, Heading, Flex, Stack } from "@chakra-ui/react";

export default function Projects() {
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
          <Heading mb={2}>Projects</Heading>
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
