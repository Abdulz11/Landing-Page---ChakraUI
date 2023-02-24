import { Container, Heading, Text, Center, VStack } from "@chakra-ui/react";

export default function Connect() {
  return (
    <Container color='white' bgColor='black' mt='5rem' px='2rem' minH='300px'>
      <Center>
        <VStack mt='8rem' pb='4rem' spacing='2rem'>
          <Heading fontSize='4xl' fontWeight='bold' display='block'>
            Want to grow your business?
          </Heading>
          <Heading fontSize='4xl' fontWeight='bold' display='block'>
            We should talk
          </Heading>
          <Text>
            <a href='#'>Lorem ipsum dolor sit amet.</a>
          </Text>
        </VStack>
      </Center>
    </Container>
  );
}
