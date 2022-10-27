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

const Work = () => (
  <Layout title="2048">
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
        2048 <Badge>2022-</Badge>
      </Title>
      <P>I created a working clone of the popular game 2048 using React</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="/" >
            Vercel Link <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, TypeScript, Vercel</span>
        </ListItem>
      </List>
      <Image src={twenty}></Image>
    </Container>
  </Layout>
);

export default Work;
