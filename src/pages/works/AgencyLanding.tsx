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
import agency from "../works/nxt-agency.png";

const Work = () => (
  <Layout title="Agency">
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
        Agency Landing page <Badge>2022-</Badge>
      </Title>
      <P>Here is the landing page for my agency</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://next-agency-seven.vercel.app/">
            Vercel Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Javascript, Framer motion, Vercel</span>
        </ListItem>
      </List>
      <Image src={agency}></Image>
    </Container>
  </Layout>
);

export default Work;
