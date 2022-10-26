import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Text } from "@chakra-ui/react";

type Props = {};

export default function TypeWriter({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Jamie Hughes", "<h1> Jamie Hughes <h1/>"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div>
      <Text fontSize={{ xs: "4xl", sm: "5xl", md: "6xl", xl: "7xl" }}>
        {text}
        <Cursor cursorColor="#F7AB01" />
      </Text>
    </div>
  );
}
