import React, { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";
import {
  useColorMode,
  Button,
  Flex,
  Box,
  ChakraProvider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  ModalFooter,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import NextLink from "next/link";
import styled from "@emotion/styled";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { motion } from "framer-motion";
import TypeWriter from "./typewriter";
import { useForm } from "react-hook-form";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Container = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "white",
    dark: "#171717",
  };

  const navHoverBg = {
    light: "gray.600",
    dark: "gray.300",
  };

  const color = {
    light: "black",
    dark: "white",
  };

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;

  const { isOpen, onClose, onOpen } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_nroy3th", e.target, "HDqc3mVc7fTUcQvx_")
      .then(
        (result) => {
          console.log(result.text);
          onClose();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="800px"
        minWidth="356px"
        width="100%"
        bg={bgColor[colorMode]}
        as="nav"
        p={[2, 6, 8]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <Box>
          <NextLink href="/" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Home
            </Button>
          </NextLink>

          <NextLink href="/about" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              About
            </Button>
          </NextLink>

          <NextLink href="/projects" passHref>
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
            >
              Projects
            </Button>
          </NextLink>

          <Button
            onClick={onOpen}
            as="a"
            variant="ghost"
            p={[1, 2, 4]}
            _hover={{ backgroundColor: navHoverBg[colorMode] }}
          >
            Contact Me
          </Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                <ModalCloseButton />
              </ModalHeader>
              <ModalBody>
                <form onSubmit={sendEmail}>
                  <FormControl>
                    <FormLabel> Contact Me</FormLabel>

                    <Input type="text" placeholder="Name" name="name" />

                    <Input
                      mt="1"
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                    <Textarea
                      mt="1"
                      placeholder="Your Message"
                      name="message"
                    />
                    <FormHelperText>
                      I'll try to respond as quickly as possible
                    </FormHelperText>
                  </FormControl>
                  <Button
                    justifyContent="flex-end"
                    mt="5"
                    id="submit"
                    type="submit"
                  >
                    Submit
                  </Button>
                </form>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>
        </Box>

        <DarkModeSwitch />
      </StickyNav>
      <Flex
        justifyContent="center"
        flexDirection="row"
        px={[0, 4, 4]}
        mt={0}
        mb={20}
      >
        <TypeWriter />
      </Flex>

      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        <motion.div
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: "linear" }}
        >
          {children}
        </motion.div>
      </Flex>
    </>
  );
};

export default Container;
