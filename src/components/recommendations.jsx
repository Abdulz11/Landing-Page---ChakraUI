import {
  Container,
  Heading,
  SimpleGrid,
  Box,
  Text,
  HStack,
  Image,
  Center,
} from "@chakra-ui/react";
import avatar from "../images/avatar photo.avif";

const people = [
  { name: "Monica Geller", comment: "Lorem ipsum dolor sit amet." },
  { name: "Racheal Seals", comment: "Lorem ipsum dolor sit amet." },
  { name: "Mike Myers", comment: "Lorem ipsum dolor sit amet." },
  { name: "Cody Gakpo", comment: "Lorem ipsum dolor sit amet." },
  { name: "Jonathan Lundstrum", comment: "Lorem ipsum dolor sit amet." },
  { name: "Nathan Kerr", comment: "Lorem ipsum dolor sit amet." },
];
export default function Recommendations() {
  return (
    <Container mt='10rem' mx='2rem'>
      <Heading fontSize='3xl' fontWeight='bold' ml='1.4rem' mb='3rem'>
        The people have spoken
      </Heading>
      <Center>
        <SimpleGrid columns={3} spacing='7rem'>
          {people.map(({ name, comment }, index) => (
            <Box key={index} bg='yellow.200' maxW='15rem'>
              <Box p='0.8rem'>
                <HStack>
                  <Box h='50px' w='50px' overflow='hidden' borderRadius='50%'>
                    <Image src={avatar} w='100%' h='100%' objectFit='cover' />
                  </Box>
                  <Box>
                    <Heading as='h5' fontWeight='semibold'>
                      {name}
                    </Heading>
                    <Text as='small' color='gray.500'>
                      {comment.slice(0, 15)}
                    </Text>
                  </Box>
                </HStack>
              </Box>
              <Text p='0.8rem' fontSize='13px'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                ipsum corporis atque fugit ducimus aut maxime non ex.
                Voluptates, vitae.
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Center>
    </Container>
  );
}
