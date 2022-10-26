import Head from "next/head";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import Container from "../components/Container";
import {
  Text,
  useColorMode,
  Heading,
  Flex,
  Stack,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import { WorkGridItem } from "../components/griditem";
import Section from "../components/section";
import thumbInkdrop from "../inkdrop_01.png";
import twenty from "../2048.png";
import social from "../social.jpeg";

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
            Here are a few case studies aswell as projects that I have been
            working on
          </Text>
        </Flex>
      </Stack>
      <SimpleGrid columns={[1, 2, 1]} gap={100}>
        <Section>
          <WorkGridItem id="2048" title="2048 Clone" thumbnail={twenty}>
            I created a working clone of the popular game 2048 using React
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="Social"
            title="Full Stack Social Media"
            thumbnail={social}
          >
            I created a full stack social Media application
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
}
