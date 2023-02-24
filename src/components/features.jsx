import {
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  Image,
  Box,
  Center,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Spacer,
  List,
  ListItem,
  VStack,
  Icon,
} from "@chakra-ui/react";

import { EditIcon, CheckIcon } from "@chakra-ui/icons";
import { SlScreenDesktop } from "react-icons/sl";
// move images to public folder

export function Features() {
  return (
    <>
      <Container mt='2.5rem'>
        <Flex
          color='blue.600'
          alignItems='center'
          justify='center'
          px='20px'
          pt='2rem'
          gap='5rem'
        >
          <Box w='40%'>
            <Heading
              fontSize='3xl'
              w='17ch'
              fontWeight='bold'
              letterSpacing='1.2px'
              color='blue.900'
            >
              What we can provide you
            </Heading>
          </Box>
          <Box w='40%'>
            <Text color='blue.900'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, modi. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Voluptates quaerat asperiores adipisci, at iusto
              unde dolor culpa voluptatem nisi odit. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Rerum, iste?
            </Text>
          </Box>
        </Flex>
        <Flex
          alignItems='center'
          justify='space-around'
          px='20px'
          pt='2rem'
          gap='10rem'
        >
          <Card bgColor='yellow.200' maxW='400px'>
            <Icon as={SlScreenDesktop} boxSize='100px' ml='0.7rem' />
            <CardHeader p='0.5rem 1rem'>
              <Heading fontWeight='bold' fontSize='1.3rem'>
                Web design
              </Heading>
            </CardHeader>
            <CardBody p='0.5rem 1rem'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem harum
              aliquid incidunt magnam necessitatibus minima? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Culpa, voluptate.
            </CardBody>
            <Spacer />
            <CardFooter p='1rem'>See more</CardFooter>
          </Card>
          <Card bgColor='yellow.200' maxW='400px'>
            <EditIcon boxSize='100px' ml='0.7rem' />
            <CardHeader p='0.5rem 1rem'>
              <Heading fontWeight='bold' fontSize='1.3rem'>
                Content Writing
              </Heading>
            </CardHeader>
            <CardBody p='0.5rem 1rem'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
              dolorem aliquid accusantium totam, neque aspernatur! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Culpa, voluptate.
            </CardBody>
            <CardFooter p='1rem'>See more</CardFooter>
          </Card>
        </Flex>
      </Container>

      {/* section */}
      <Container mt='5rem' as='section'>
        <Flex bg='blue.900' color='white'>
          <Center mx='6rem'>
            <Box w='100%' textAlign='left'>
              <Heading fontSize='5xl' fontWeight='semibold' mb='1rem' w='17ch'>
                Commited to your success
              </Heading>
              <List>
                <VStack spacing='1.3rem'>
                  <ListItem>
                    <HStack spacing='2rem'>
                      <CheckIcon />
                      <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus, aperiam cum error ipsa ullam ad quas officia!
                      </Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack spacing='2rem'>
                      <CheckIcon />
                      <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus, aperiam cum error ipsa ullam ad quas officia!
                      </Text>
                    </HStack>
                  </ListItem>
                  <ListItem>
                    <HStack spacing='2rem'>
                      <CheckIcon />
                      <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus, aperiam cum error ipsa ullam ad quas officia!
                      </Text>
                    </HStack>
                  </ListItem>
                </VStack>
              </List>
            </Box>
          </Center>
          <Spacer />
          <Box w='70%' maxHeight='500px'>
            <Image
              src='https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGdyb3VwJTIwb2YlMjBwZW9wbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              w='100%'
              h='100%'
              objectFit='cover'
            />
          </Box>
        </Flex>
      </Container>
    </>
  );
}
