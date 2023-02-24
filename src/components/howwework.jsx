import { Text, Image, Container, Flex, Box, Heading } from "@chakra-ui/react";
import Person1 from "../images/istockphoto-926230292-612x612.jpg";
import Person2 from "../images/istockphoto-1081755696-612x612.jpg";
import Person3 from "../images/istockphoto-1190297071-612x612.jpg";

export default function Howwework() {
  return (
    <Container mt='5rem' p='1rem'>
      <Heading fontSize='3xl' fontWeight='bold' ml='1.4rem' mb='1rem'>
        How do we work?
      </Heading>
      <Flex gap='2rem' justify='center'>
        <Box w='30%'>
          <Image src={Person1} />
          <Box mt='2rem'>
            <Heading as='h3' fontWeight='Bold' mb='1.3rem'>
              Micheal Solomon
            </Heading>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              totam ullam animi assumenda nihil saepe suscipit veniam hic
              facilis sunt!
            </Text>
          </Box>
        </Box>
        <Box w='30%'>
          <Image src={Person2} />
          <Box mt='2rem'>
            <Heading as='h3' fontWeight='Bold' mb='1.3rem'>
              Barbara Walters
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              sint ipsum necessitatibus tempora optio placeat quos nobis
              repudiandae cumque unde?
            </Text>
          </Box>
        </Box>
        <Box w='30%' h='100%'>
          <Image src={Person3} />
          <Box mt='2rem'>
            <Heading as='h3' fontWeight='Bold' mb='1.3rem'>
              Nigel Saloni
            </Heading>
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
              eaque adipisci vel provident culpa nemo aut obcaecati vitae
              inventore recusandae.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
