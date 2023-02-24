import { ChakraBaseProvider, Container } from "@chakra-ui/react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import Howwework from "./components/howwework";
import Recommendations from "./components/recommendations";
import Connect from "./components/connect";

function App() {
  return (
    <>
      <ChakraBaseProvider>
        <Container mt='0' bg='blue.900' height='540px'>
          <Header />
          <Hero />
          <Features />
          <Howwework />
          <Recommendations />
          <Connect />
        </Container>
      </ChakraBaseProvider>
    </>
  );
}

export default App;
