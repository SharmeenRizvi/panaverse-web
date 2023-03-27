'use client'
import { Container, Box, Center, Heading, Text, Flex, Image } from '@chakra-ui/react';
import React from 'react'
import Home from '../components/Home'
import { cards } from '../components/database';
import { RevealList } from "next-reveal";
import coding from '../../public/coding.png'

import {RevealWrapper} from 'next-reveal'
export default function page() {
  return (
    <>
      {/* <Home title="Programs" src="https://media.zicxa.com/1186033" />; */}
      <Box>
        <Container maxW={"1400"}> <RevealWrapper
                origin="top"
                delay={100}
                duration={1200}
                distance="200px"
                reset={true}
              >
          <Box mx={{lg:"150", base:'0'}}>
            <Image
              src={'/coding.png'}
              alt="coding"
              width={{ lg: "1000", base: "500" }}
              height={{ lg: " 500", base: "200" }}
            />
          </Box>
          <Heading mt={{lg:'3'}}
            size={{ lg: "2xl", base: "xl" }}
            color={"black.700"}
            lineHeight='1.5'
            textAlign={"center"}
          >
            Programs Available
          </Heading>{" "} </RevealWrapper>
        </Container>
        <Container maxWidth={"1400"}>
          <RevealList interval={300} delay={600} reset={true}>
            <Center flexDir="column">
              {/* <Heading size="2xl">Programs Offered</Heading> */}
              <Text
                mt="20px"
                px={{ lg: "130px", base: "10px" }}
                textAlign={{ lg: "justify", base: "start" }}
              >
                This curriculum is intended for beginners who want to learn
                software development from the ground up. The first two quarters
                are shared by all specialities and are dedicated to studying
                Object-Oriented Programming and cutting-edge Full-Stack Web 2.0
                development. It is going to be a year-long hybrid programme that
                includes both onsite and online classes and is divided into four
                quarters of 13 weeks each. The emphasis will be on hands-on
                learning by educating students to produce projects.
              </Text>
            </Center>
          </RevealList>
          <Center flexDir="column" mt="20px">
            <RevealList interval={300} delay={600} reset={true}>
              <Heading size="xl" textAlign={"center"}>
                Core Courses
              </Heading>
              <Text
                mt="20px"
                px={{ lg: "130px", base: "10px" }}
                textAlign={{ lg: "justify", base: "start" }}
              >
                Every participant of the program will start by completing the
                following three compulsory core courses.
              </Text>
            </RevealList>
          </Center>
          <Center>
            <RevealList interval={350} delay={650} reset={true}>
              <Flex mt="30px" gap="30px" display={{ lg: "flex", base: "grid" }}>
                <Box
                  bgGradient="linear(to-bl, #2AECE9, #0201B5)"
                  textAlign={"center"}
                  p="30px"
                  width={"300px"}
                  boxShadow={"dark-lg"}
                  borderRadius="20px"
                >
                  <Heading color={"darkblue"} size="md" mb="10px">
                    Quarter I
                  </Heading>
                  <Text color={"white"} pt="5px" fontSize={"small"}>
                    Quarter I (Core) CS-101: Object-Oriented Programming using
                    TypeScript
                  </Text>
                </Box>
                <Box
                  bgGradient="linear(to-br, #2AECE9, #0201B5)"
                  textAlign={"center"}
                  p="30px"
                  width={"300px"}
                  boxShadow={"dark-lg"}
                  borderRadius="20px"
                >
                  <Heading color={"darkblue"} size="md" mb="10px">
                    Quarter II
                  </Heading>
                  <Text color={"white"} pt="5px" fontSize={"small"}>
                    Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0
                    Serverless Cloud Cloud Apps and APIs using Next.js 13 and
                    Cloud Development Kit (CDK) for Terraform
                  </Text>
                </Box>
                <Box
                  bgGradient="linear(to-br, #2AECE9, #0201B5)"
                  textAlign={"center"}
                  p="30px"
                  width={"300px"}
                  boxShadow={"dark-lg"}
                  borderRadius="20px"
                >
                  <Heading color={"darkblue"} size="md" mb="10px">
                    Quarter III
                  </Heading>
                  <Text color={"white"} pt="5px" fontSize={"small"}>
                    $-101: Dollar Making Bootcamp - Full-Stack Template and API
                    Product Development
                  </Text>
                </Box>
              </Flex>
            </RevealList>
          </Center>
          <Center flexDir="column" mt="30px">
            <RevealList interval={300} delay={600} reset={true}>
              <Heading textAlign={"center"} size="xl">
                Specialized Tracks
              </Heading>
              <Text
                mt="20px"
                px={{ lg: "130px", base: "10px" }}
                textAlign={{ lg: "justify", base: "start" }}
              >
                After completing the first two quarters the participants will
                select one or more specializations consisting of two courses
                each:
              </Text>
            </RevealList>
          </Center>
        </Container>

        <Container maxW={"1400px"} mb="30px">
          <RevealList interval={300} delay={500} reset={true}>
            {cards.map((elem) => (
              <Box key={elem.id}>
                <Center flexDir="column" mt="50px">
                  <Heading color={"darkblue"} size="lg">
                    {elem.heading1}
                  </Heading>
                  <Text
                    mt="20px"
                    px={{ lg: "130px", base: "10px" }}
                    textAlign={{ lg: "center", base: "start" }}
                  >
                    {elem.text1}
                  </Text>
                </Center>

                <Center>
                  <Flex
                    mt="30px"
                    gap="30px"
                    display={{ lg: "flex", base: "grid" }}
                  >
                    <Box
                      bgGradient="linear(to-bl, #2AECE9, #0201B5)"
                      textAlign={"center"}
                      p="30px"
                      width={"350px"}
                      boxShadow={"dark-lg"}
                      borderRadius="20px"
                    >
                      <Heading color={"darkblue"} size="md">
                        {elem.heading2}
                      </Heading>
                      <Text color={"white"} pt="5px" fontSize={"small"}>
                        {elem.text2}
                      </Text>
                    </Box>
                    <Box
                      bgGradient="linear(to-br, #2AECE9, #0201B5)"
                      textAlign={"center"}
                      p="30px"
                      width={"350px"}
                      boxShadow={"dark-lg"}
                      borderRadius="20px"
                    >
                      <Heading color={"darkblue"} size="md">
                        {elem.heading3}
                      </Heading>
                      <Text color={"white"} pt="5px" fontSize={"small"}>
                        {elem.text3}
                      </Text>
                    </Box>
                  </Flex>
                </Center>
              </Box>
            ))}
          </RevealList>
        </Container>
      </Box>
    </>
  );
}
