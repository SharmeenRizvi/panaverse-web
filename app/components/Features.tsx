
"use client";
import {
  Container,
  Box,
  Flex,
  Heading,
  Text,
  Button,
  VStack, SimpleGrid, Card, CardFooter, CardHeader, CardBody
} from "@chakra-ui/react";
import Image from "next/image";
import {RevealWrapper} from 'next-reveal'
//import image1 from "../../public/class.png";
import image3 from "../../public/tech11.webp";
import image1 from "../../public/tech12.jpg";
import image2 from "../../public/techa.jpg";
export default function Features() {
  return (
    <>
      <Box bgGradient="linear(to-r, #2AECE9, #0201B5)" mt="10" py="50">
        <Container maxW={"1000px"}>
          <Heading
            textAlign={"center"}
            mb="10"
            color={"white"}
            fontFamily="serif"
            fontWeight="bold"
          >
            Why choose Us?
          </Heading>
          <SimpleGrid
            ml="50"
            mr="50"
            spacing={5}
            templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
          >
            <RevealWrapper
              origin="left"
              delay={100}
              duration={1000}
              distance="100px"
              reset={true}
            >
              {" "}
              <Card shadow={"lg"}>
                <Image
                  src={image2}
                  alt="panaverse-intro"
                  // width={{ lg: '500'}}
                  // height={{ lg:' 200px' }}
                />
                <CardHeader>
                  <Heading size="md"> Online & Offline classes</Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur laudantium nihil enim nisi accusantium!
                  </Text>
                </CardBody>
              </Card>{" "}
            </RevealWrapper>

            <RevealWrapper
              origin="top"
              delay={100}
              duration={1000}
              distance="100px"
              reset={true}
            >
              {" "}
              <Card shadow={"lg"}>
                <Image
                  src={image1}
                  alt="panaverse-intro"
                  // width={{ lg: '500', base: '400' }}
                  // height={{ lg:' 200px', base:'100px' }}
                />
                <CardHeader>
                  <Heading size="md">Experienced Faculty</Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur laudantium nihil enim nisi accusantium!
                  </Text>
                </CardBody>
              </Card>{" "}
            </RevealWrapper>

            <RevealWrapper
              origin="left"
              delay={100}
              duration={1000}
              distance="100px"
              reset={true}
            >
              <Card shadow={"lg"}>
                <Image
                  src={image3}
                  alt="panaverse-intro"
                  // width={{ lg: '500', base: '400' }}
                  // height={{ lg:' 200px', base:'100px' }}
                />
                <CardHeader>
                  <Heading size="md"> Weekly Helpdesk Sessions</Heading>
                </CardHeader>
                <CardBody>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur laudantium nihil enim nisi accusantium!
                  </Text>
                </CardBody>
              </Card>
            </RevealWrapper>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
}
