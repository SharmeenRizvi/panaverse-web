"use client";
import { Container, Box, Flex, Heading, Stack, Input, Button, Text, Center, VStack, SimpleGrid, Image, HStack} from "@chakra-ui/react";
import React from "react";
import Home from "../components/Home";
import { RevealWrapper } from 'next-reveal';
import {
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialYoutube,
  SlSocialFacebook,
  SlSocialLinkedin,
  SlLocationPin,
  SlCallOut,
} from "react-icons/sl";
import {AiOutlineMail} from "react-icons/ai"
  import { VscGithubAlt} from "react-icons/vsc";
import Link from "next/link";
//import Image from "next/image";
//import team from '../../public/group-discussion-scaled.jpg'
import { RevealList } from "next-reveal";

export default function page() {
  return (
    <>
      <Box>
        {/* <Home title="Contact" src="https://media.zicxa.com/1186033" />; */}
        <Container maxWidth={"1400"} mt="10">

          <Box>
          <RevealList interval={200} delay={500} reset={true}>
          <Image
            ml={{ lg: "20", base: "0" }}
            mt={{ lg: "-17" }}
            src={"/teamwork.png"}
            alt="team"
            width={{ lg: "1200" }}
            height={{ lg: "480" }}
          />
          <Heading
            textAlign={"center"}
            size={{ lg: "2xl", base: "xl" }}
            mt={{ lg: "-1" }}
          >
           
            Our teams are here to help
          </Heading>
          <Text mt="3" textAlign={"center"} size="lg" mb={{ lg: "10" }}>
            Questions, career counselling, feedback — we’re here for it all.
              </Text>
          </RevealList>
          </Box>
          




          <Box maxWidth={'1200'}
            rounded={"20"}
            bgGradient="linear(to-b, #2AECE9, #0201B5)"
            // bgGradient="linear(to-b, #09C6F9, #150fd0)"
            p={{ lg: "10", base: "5" }}
            my={{ lg: "19", base: "5" }}
            mx={{ lg: "40", base: "5" }}
            boxShadow={"dark-lg"}
          >
            <RevealList interval={250} delay={500} reset={true}>
              <Heading
                color={"white"}
                mb={{ lg: "5", base: "15" }}
                size={{ lg: "xl", base: "lg" }}
                textAlign="center"
              >
                Join our Community
              </Heading>
              <Flex
                display={{ lg: "flex", base: "none" }}
                mt={{ lg: "30", base: "20" }}
                mb={{ lg: "50", base: "30" }}
                color="white"
                gap={{ lg: "39", base: "5" }}
                justifyItems={{ lg: "center", base: "center" }}
                justifyContent={{ lg: "center", base: "center" }}
                flexDirection={{ lg: "row", base: "column" }}
                // ml={{ base: "35" }}
              >
                <Link href="https://www.instagram.com/piaicofficial/">
                  <SlSocialInstagram size="80" />
                </Link>
                <Link href="https://twitter.com/piaicofficial?s=20&t=S4-z5_47QCTP1rZtDRY3iA">
                  <SlSocialTwitter size="80" />
                </Link>
                <Link href="https://www.youtube.com/@panaverse">
                  <SlSocialYoutube size="80" />
                </Link>
                <Link href="https://www.linkedin.com/company/panaverse/">
                  <SlSocialLinkedin size="80" />
                </Link>
                <Link href="https://github.com/panaverse">
                  <VscGithubAlt size="80" />
                </Link>
                <Link href="https://www.facebook.com/groups/panaverse">
                  <SlSocialFacebook size="80" />
                </Link>
              </Flex>
              <Center display={{ lg: "none", base: "grid" }}>
                <Box
                  // boxShadow={"md"}
                  // bgColor={"blue.100"}
                  // rounded="20"
                  p="15"
                  // mb="20"
                  mx={{ lg: "300", base: "5" }}
                  maxWidth={"800"}
                  justifyContent="space-between"
                >
                  <SimpleGrid
                    gap={{lg:"25", base:'5'}}
                    templateColumns={{
                      base: "repeat(3, 1fr)",
                    }}
                  >
                    <RevealWrapper
                      origin="left"
                      delay={100}
                      duration={1200}
                      distance="80px"
                      reset={true}
                    >
                      <VStack
                        bgGradient="linear(to-tr, #2AECE9, #0201B5)"
                        //bgGradient="linear(to-b, #09C6F9, #150fd0)"
                        p="5"
                        justifyContent={"center"}
                        rounded={"25"}
                      >
                        <Link href="https://www.instagram.com/piaicofficial/">
                          <SlSocialInstagram size="30" color="white" />
                        </Link>
                      </VStack>
                    </RevealWrapper>
                    <RevealWrapper
                      origin="left"
                      delay={300}
                      duration={1200}
                      distance="80px"
                      reset={true}
                    >
                      <VStack
                        bgGradient="linear(to-tr, #2AECE9, #0201B5)"
                        // bgGradient="linear(to-b, #09C6F9, #150fd0)"
                        p="5"
                        rounded={"25"}
                      >
                        <Link href="https://twitter.com/piaicofficial?s=20&t=S4-z5_47QCTP1rZtDRY3iA">
                          <SlSocialTwitter size="30" color="white" />
                        </Link>
                      </VStack>
                    </RevealWrapper>
                    <RevealWrapper
                      origin="left"
                      delay={500}
                      duration={1200}
                      distance="80px"
                      reset={true}
                    >
                      <VStack
                        bgGradient="linear(to-tr, #2AECE9, #0201B5)"
                        //bgGradient="linear(to-b, #09C6F9, #150fd0)"
                        p="5"
                        rounded={"25"}
                      >
                        <Link href="https://www.youtube.com/@panaverse">
                          <SlSocialYoutube size="30" color="white" />
                        </Link>
                      </VStack>
                    </RevealWrapper>
                    <RevealWrapper
                      origin="left"
                      delay={500}
                      duration={1200}
                      distance="80px"
                      reset={true}
                    >
                      <VStack
                        bgGradient="linear(to-tr, #2AECE9, #0201B5)"
                        //bgGradient="linear(to-b, #09C6F9, #150fd0)"
                        p="5"
                        rounded={"25"}
                      >
                        <Link href="https://www.linkedin.com/company/panaverse/">
                          <SlSocialLinkedin size="30" color="white" />
                        </Link>
                      </VStack>
                    </RevealWrapper>
                    <RevealWrapper
                      origin="left"
                      delay={500}
                      duration={1200}
                      distance="80px"
                      reset={true}
                    >
                      <VStack
                        bgGradient="linear(to-tr, #2AECE9, #0201B5)"
                        //bgGradient="linear(to-b, #09C6F9, #150fd0)"
                        p="5"
                        rounded={"25"}
                      >
                        <Link href="https://github.com/panaverse">
                          <VscGithubAlt size="30" color="white" />
                        </Link>
                      </VStack>
                    </RevealWrapper>
                    <RevealWrapper
                      origin="left"
                      delay={500}
                      duration={1200}
                      distance="80px"
                      reset={true}
                    >
                      <VStack
                        bgGradient="linear(to-tr, #2AECE9, #0201B5)"
                        //bgGradient="linear(to-b, #09C6F9, #150fd0)"
                        p="5"
                        rounded={"25"}
                      >
                        <Link href="https://www.facebook.com/groups/panaverse">
                          <SlSocialFacebook size="30" color="white" />
                        </Link>
                      </VStack>
                    </RevealWrapper>
                  </SimpleGrid>
                </Box>
              </Center>
              <Stack spacing={3} mt="5">
                {/* <Heading color={"white"} mb="5" size={"lg"} textAlign="center">
                Subscribe to our Newsletter
              </Heading> */}

                <Input
                  placeholder="Name"
                  variant="filled"
                  size={{ lg: "md", base: "sm" }}
                />
                <Input
                  placeholder="Email"
                  variant="filled"
                  size={{ lg: "md", base: "sm" }}
                />
                <Button m="5" size="md" colorScheme="whiteAlpha">
                  Subscribe
                </Button>
              </Stack>
            </RevealList>
          </Box>
          <Center>
            <Box
              boxShadow={"md"}
              bgColor={"blue.100"}
              rounded="20"
              p="15"
              mb="10"
              mx={{ lg: "300", base: "5" }}
              maxWidth={{ lg: "1000", base: "500" }}
              justifyContent="space-between"
            >
              <Flex gap="25" flexDir={{ lg: "row", base: "column" }}>
                <RevealWrapper
                  origin="left"
                  delay={100}
                  duration={1200}
                  distance="80px"
                  reset={true}
                >
                  <HStack
                    dir="row"
                    bgGradient="linear(to-tr, #2AECE9, #0201B5)"
                    //bgGradient="linear(to-b, #09C6F9, #150fd0)"
                    p="5"
                    justifyContent={"center"}
                    rounded={"25"}
                  >
                    <SlLocationPin size={"40"} color="white" />
                    <Text color={"white"} size="sm">
                      Khi,Pakistan.
                    </Text>
                  </HStack>
                </RevealWrapper>
                <RevealWrapper
                  origin="left"
                  delay={300}
                  duration={1200}
                  distance="80px"
                  reset={true}
                >
                  <HStack
                    bgGradient="linear(to-tr, #2AECE9, #0201B5)"
                    // bgGradient="linear(to-b, #09C6F9, #150fd0)"
                    p="5"
                    rounded={"25"}
                  >
                    <SlCallOut size="40" color="white" />
                    <Text color={"white"} size="sm">
                      +923082220203{" "}
                    </Text>
                  </HStack>
                </RevealWrapper>
                <RevealWrapper
                  origin="left"
                  delay={500}
                  duration={1200}
                  distance="80px"
                  reset={true}
                >
                  <HStack
                    bgGradient="linear(to-tr, #2AECE9, #0201B5)"
                    //bgGradient="linear(to-b, #09C6F9, #150fd0)"
                    p="5"
                    rounded={"25"}
                  >
                    <AiOutlineMail size="40" color="white" />
                    <Text color={"white"} size="sm">
                      notify@piaic.org
                    </Text>
                  </HStack>
                </RevealWrapper>
              </Flex>
            </Box>
          </Center>
          
        </Container>
      </Box>
    </>
  );
}
