import Head from "next/head";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import Container from "../components/Container";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

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
  SimpleGrid,
  Highlight,
  VStack,
  StackDivider,
  List,
  ListIcon,
  ListItem,
  HStack,
} from "@chakra-ui/react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import TypeWriter from "../components/typewriter";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function Index() {
  const { colorMode } = useColorMode();
  const colorSecondary = {
    light: "black.700",
    dark: "black.400",
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
            Hi, i'm <Text color="#34e4ea">Jamie Hughes</Text>
          </Heading>
          <Text mb={5} color={colorSecondary[colorMode]}>
            Full Stack Developer ( Developer / Designer )
          </Text>

          <Heading as="u" fontSize={32} mt={7} mb={0}>
            About
          </Heading>
          <Text color={colorSecondary[colorMode]} m="auto">
            I am a Full Stack developer currently in my final year for my
            Bachelors of Science majoring in Computer Science.
          </Text>
          <Heading as="u" fontSize={32} mt={12} mb={4}>
            My skills
          </Heading>

          <HStack spacing="12px">
            <Box
              w={{ xs: "120px", sm: "170px", md: "190px", lg: "220px" }}
              h="200px"
            >
              <Heading as="u" fontSize={18} mt={4} mb={2}>
                Front-End
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  HTML/CSS
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Javascript
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  React JS
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Next JS
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Typescript{" "}
                </ListItem>
              </List>
            </Box>
            <Box
              w={{ xs: "120px", sm: "170px", md: "190px", lg: "220px" }}
              h="200px"
            >
              <Heading as="u" fontSize={18} mt={4} mb={2}>
                Back-End
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Node JS
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  C++
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Firebase
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Sanity IO
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Mongo DB
                </ListItem>
              </List>
            </Box>
            <Box
              w={{ xs: "120px", sm: "170px", md: "190px", lg: "220px" }}
              h="200px"
            >
              <Heading as="u" fontSize={18} mt={4} mb={2}>
                Tools{" "}
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Github{" "}
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  Figma
                </ListItem>
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  NPM
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={CheckCircleIcon} color="green.500" />
                  WebFlow
                </ListItem>
              </List>
            </Box>
          </HStack>
        </Flex>
      </Stack>
    </Container>
  );
}
