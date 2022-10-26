import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Layout from "../layouts/article";
import P from "../../components/paragraph";
import TypeWriter from "../../components/typewriter";
import { useColorMode, Button, Flex, Box } from "@chakra-ui/react";
import Image from "next/image";
import twenty from "../works/2048.png";
import social from "./social.jpeg";
const Work = () => (
  <Layout title="Social">
    <Flex
      justifyContent="center"
      flexDirection="row"
      px={[0, 4, 4]}
      mt={0}
      mb={20}
    >
      <TypeWriter />
    </Flex>
    <Container>
      <Title>
        Social Media Clone <Badge>2022-</Badge>
      </Title>
      <P>I created a fullstack social Media application</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="/">
            Vercel Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, TypeScript, Vercel, FireBase</span>
        </ListItem>
      </List>
      <Image src={social}></Image>
    </Container>
  </Layout>
);

export default Work;
