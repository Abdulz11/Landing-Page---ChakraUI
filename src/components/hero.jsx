import {
  Container,
  Flex,
  Heading,
  Text,
  Image,
  Box,
  Center,
} from "@chakra-ui/react";
import heroimage from "../images/helena-lopes-e3OUQGT9bWU-unsplash - Copy.jpg";

export function Hero() {
  return (
    <>
      <Container px='20px' color='white'>
        <Flex alignItems='center' justify='space-around'>
          <Heading
            fontSize='2.3rem'
            fontWeight='bold'
            w='40%'
            letterSpacing='8px'
          >
            People who care about your growth.
          </Heading>
          <Text maxWidth='40%' lineHeight='1.4rem'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Laudantium, officia modi sed laborum labore eius tenetur eos at ex
            accusantium sapiente nam similique. Vitae accusantium accusamus
            magnam mollitia corrupti distinction.
          </Text>
        </Flex>
        <Box mt='3rem'>
          <Center>
            <Image
              objectFit='cover'
              boxSize='400px'
              width='90%'
              alt='bridge scenery'
              src={heroimage}
            />
          </Center>
        </Box>
      </Container>
    </>
  );
}
