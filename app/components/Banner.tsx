"use client";
import { RevealWrapper } from 'next-reveal'
import { Container, Box, Flex, Heading, Text, Button, VStack } from "@chakra-ui/react";
import Image from "next/image";
import image1 from "../../public/tech.png";
import image2 from "../../public/tech2.webp";
import image3 from "../../public/techh.webp";
import { RevealList } from "next-reveal";



export default function Banner() {
  return (
    <>
      <Box>
        <Box
          bgAttachment={"fixed"}
          bgImage="https://images.hdqwalls.com/download/green-blue-purple-blur-4k-68-1366x768.jpg"
          bgSize={"cover"}
          shadow={"lg"}
        >
          <RevealWrapper
            origin="top"
            delay={100}
            duration={1200}
            distance="80px"
            reset={true}
          >
            <Container maxW={"1400"}>
              <Flex
                display={{ lg: "flex", base: "grid" }}
                pt={{ lg: "150px", base: "30px" }}
                pb={{ lg: "100px", base: "10px" }}
                px={{ lg: "40px", base: "5px" }}
              >
                <Box flexBasis={"50%"}>
                  <Heading color={"white"}>
                    Prepare yourself with the Next Generation of Internet with
                    Panaverse
                  </Heading>
                  <Text color={"white"} pt={"10px"}>
                    One Year Panaverse DAO Earn as you Learn Program.
                    Consolidating Web 3.0, Metaverse, Artificial Intelligence
                    (AI), Cloud, Edge, and Ambient Computing/IoT Technologies
                  </Text>
                  <Button
                    mt={"30px"}
                    colorScheme={"blue"}
                    bgGradient="linear(to-b, #2AECE9, #0201B5)"
                    //bgGradient="linear(to-l, #09C6F9, #150fd0)"
                    size={"lg"}
                    color="white"
                  >
                    More Info
                  </Button>
                </Box>
                <Box
                  mt={{ lg: "-50px", base: "0" }}
                  pl={{ lg: "100px", base: "10px" }}
                  flexBasis={"50%"}
                >
                  <Image
                    src={image1}
                    alt="panaverse-intro"
                    // width={{ lg: '500', base: '400' }}
                    // height={{ lg:' 200px', base:'100px' }}
                  />
                </Box>
              </Flex>
            </Container>
          </RevealWrapper>
        </Box>

        <Box>
          <Container
            mt={{lg:"100", base:'70'}}
            shadow={"dark-lg"}
            bgGradient="linear(to-b, #2AECE9, #0201B5)"
            alignItems={"center"}
            maxW={"1000"}
            maxHeight={"500"}
            color={"white"}
            borderRadius={"xl"}
            mb={{lg:"100", base:'50'}}
            pb="10"
          >
            <VStack spacing={"2"} align={"center"}>
              <RevealList interval={200} delay={500} reset={true}>
                <Heading
                  mx={{ lg: "220", base: "10px" }}
                  mt={"8"}
                  size={"lg"}
                  fontWeight="bold"
                >
                  The Program in a Nutshell:
                </Heading>
                <Heading mx={{ lg: "280", base: "10px" }} size={"lg"}>
                  Earn While You Learn
                </Heading>
                <Text align={"center"}>
                  In this brand-new type of curriculum, students will learn how
                  to make money and boost exports in the classroom and will
                  begin doing so within six months of the program’s beginning.
                  It resembles a cross between a corporate venture and an
                  educational project.
                </Text>
              </RevealList>
            </VStack>
          </Container>
        </Box>
        <Box>
          <Container maxW={"1400px"}>
            <Flex gap="100px" display={{ lg: "flex", base: "grid" }}>
              <Box
                flexBasis={"50%"}
                mt={{ lg: "0", base: "0px" }}
                ml={{ base: "10px" }}
                mb={{ base: "-100px" }}
              >
                <RevealWrapper
                  origin="left"
                  delay={100}
                  duration={1200}
                  distance="80px"
                  reset={true}
                >
                  <Image
                    src={image3}
                    alt="panaverse-intro"
                    width={"600"}
                    height={"500"}
                  />
                </RevealWrapper>
              </Box>
              <Box
                flexBasis={"50%"}
                pt={{ lg: "30px", base: "-100px" }}
                pl={{ lg: "10px", base: "20px" }}
              >
                <RevealWrapper
                  origin="left"
                  delay={200}
                  duration={1000}
                  distance="100px"
                  reset={true}
                >
                  <Heading size={"lg"}>
                    Certified Web 3.0 and Metaverse Developer
                  </Heading>

                  <Text pt={"20px"} pr={"50px"}>
                    The Future of the Web is Web 3.0, Metaverse, and Edge
                    Computing. Panaverse DAO is a movement to spread these
                    technolgies globally. It is community of Web 3 and Metaverse
                    developers, designers, trainers, startup founders and
                    service providers.
                  </Text>
                  <Button
                    mb={{ lg: "20px", base: "5px" }}
                    mt={"10px"}
                    size={"lg"}
                    colorScheme={"blue"}
                    bgGradient="linear(to-b, #2AECE9, #0201B5)"
                    //bgGradient="linear(to-l, #09C6F9, #150fd0)"
                  >
                    Read More
                  </Button>
                </RevealWrapper>
              </Box>
            </Flex>
          </Container>
        </Box>

        <Box>
          <Container maxW={"1400px"}>
            <Flex display={{ lg: "flex", base: "grid" }}>
              <Box
                flexBasis={"50%"}
                pt={{ lg: "80px", base: "40px" }}
                pl={{ lg: "40px", base: "20px" }}
              >
                {" "}
                <RevealWrapper
                  origin="left"
                  delay={100}
                  duration={1200}
                  distance="80px"
                  reset={true}
                >
                  <Heading size={"lg"}>Program of Studies</Heading>
                  <Text pt={{ lg: "20px", base: "5px" }} pr={"50px"}>
                    This curriculum is intended for beginners who want to learn
                    software development from the ground up. It is going to be a
                    fifteen-month-long hybrid program that includes both onsite
                    and online classes and is divided into five quarters of 13
                    weeks each. The emphasis will be on hands-on learning by
                    educating students to produce projects.
                  </Text>
                  <Button
                    mb={"20px"}
                    mt={"10px"}
                    size={"lg"}
                    colorScheme={"blue"}
                    bgGradient="linear(to-b, #2AECE9, #0201B5)"
                    //bgGradient="linear(to-l, #09C6F9, #150fd0)"
                  >
                    Read More
                  </Button>
                </RevealWrapper>
              </Box>
              <Box
                flexBasis={"50%"}
                mt={{ lg: "10px", base: "5px" }}
                ml={{ lg: "100px", base: "5px" }}
                mb={{ lg: "30px", base: "8px" }}
              >
                <RevealWrapper
                  origin="left"
                  delay={100}
                  duration={1200}
                  distance="80px"
                  reset={true}
                >
                  <Image
                    src={image2}
                    alt="panaverse-intro"
                    width={"1400"}
                    height ='1300'
                  />
                </RevealWrapper>
              </Box>
            </Flex>
          </Container>
        </Box>
      </Box>
    </>
  );
}
