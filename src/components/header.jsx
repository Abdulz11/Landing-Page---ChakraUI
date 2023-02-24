import {
  Box,
  Container,
  Flex,
  Spacer,
  Heading,
  HStack,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
export function Header() {
  let logo = "My Logo";
  let LogoArr = logo.split("");

  const [letterState, setLetterState] = useState(" ");
  console.log(letterState);
  useEffect(() => {
    // let num = -1;
    // let id = setInterval(function () {
    //   num += 1;
    //   if (num >= LogoArr.length) {
    //     setLetterState("");
    //     num = -1;
    //     return;
    //   }
    //   setLetterState((prev) => {
    //     return prev + LogoArr[num];
    //   });
    //   console.log(letterState);
    // }, 300);
    // return () => {
    //   clearTimeout(id);
    // };
  }, []);

  return (
    <>
      <Container mb='3rem'>
        <Flex
          as='nav'
          p='30px 30px 20px'
          color='white'
          align='center'
          justify='between'
          maxW='100%'
        >
          <Heading
            as='h1'
            mr={10}
            fontSize='1.6rem'
            fontWeight='bold'
            w='200px'
            h='50px'
          >
            {letterState}
          </Heading>
          <HStack fontSize='1.2rem' spacing='2rem'>
            <List ml='130px'>
              <HStack spacing='40px'>
                <ListItem>Home</ListItem>
                <ListItem>About</ListItem>
                <ListItem>Register</ListItem>
              </HStack>
            </List>
          </HStack>
          <Spacer />
          <Box fontSize='1.2rem'>Sign-up</Box>
        </Flex>
      </Container>
    </>
  );
}
