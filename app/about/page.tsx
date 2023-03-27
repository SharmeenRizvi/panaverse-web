'use client'
import { Box, Container, Flex, Heading,  Center, Text, Image } from '@chakra-ui/react';
import React from 'react'

import { RevealWrapper } from "next-reveal";
import {ImQuotesRight, ImQuotesLeft} from "react-icons/im"




export default function page() {
  return (
    <>
      <Box>
        {/* <Home title="About" src="https://media.zicxa.com/1186033" /> */}

        <Container maxW={"1400"}>
          <Flex 
            pt={{ lg: "20", base: "5" }}
            mb="15"
            display={{ lg: "flex", base: "grid" }}
          >
            <Box flexBasis={"55%"} ml="5">
              <RevealWrapper
                origin="left"
                delay={100}
                duration={1200}
                distance="200px"
                reset={true}
              >
                <Heading
                  mb="10"
                  mt="30"
                  size={{ lg: "2xl", base: "xl" }}
                  color={"black.700"}
                  lineHeight="1.2"
                >
                  Mission Statement
                </Heading>{" "}
                <Text
                  size={{ lg: "lg", base: "md" }}
                  color={"black.700"}
                  pt={"10px"}
                  textAlign={{ lg: "justify", base: "left" }}
                >
                  <ImQuotesLeft color="#1A8A8F" />
                  The mission of PIAIC is to reshape Pakistan by revolutionizing
                  education, research, and business by adopting latest,
                  cutting-edge technologies. Experts are calling this the 4th
                  industrial revolution. We want Pakistan to become a global hub
                  for AI, data science, cloud native computing, edge computing,
                  blockchain, augmented reality, and internet of things.{" "}
                  <ImQuotesRight color="#1A8A8F" />
                </Text>{" "}
              </RevealWrapper>
            </Box>
            <Box
              mt={{ lg: "-10", base: "5" }}
              ml={{ lg: "100", base: "3" }}
              flexBasis={"55%"}
            >
              <RevealWrapper
                origin="top"
                delay={100}
                duration={1200}
                distance="200px"
                reset={true}
              >
                <Image
                  src={"/mission5.png"}
                  alt="possible with teamwork"
                  width={{ lg: "800", base: "800" }}
                  height={{ lg: " 500", base: "300" }}
                />{" "}
              </RevealWrapper>
            </Box>
          </Flex>
        </Container>
        <Box
          mt="100"
          bgGradient="linear(to-bl, #2AECE9, #0201B5)"
          boxShadow={"dark-lg"}
        >
          <Container maxW={"1400"} >
            <Center>
              <Box borderRadius={"lg"}>
                <Container maxW={"1400"}>
                  <Flex
                    gap="20px"
                    // px={{ lg: "50px", base: "20px" }}
                    display={{ lg: "flex", base: "grid" }}
                  >
                    <Box flexBasis={"35%"}>
                      <RevealWrapper
                        origin="left"
                        delay={100}
                        duration={1200}
                        distance="80px"
                        reset={true}
                      >
                        <Image
                          src="/President.webp"
                          alt="President-Alvi"
                          mx="auto"
                          pt="5"
                          height={{ lg: "510", base: "400" }}
                        />{" "}
                      </RevealWrapper>
                    </Box>
                    <Box
                      flexBasis={"65%"}
                      p={{ lg: "8", base: "0" }}
                      color="white"
                      borderRadius={"lg"}
                      ml={{ base: "3" }}
                    >
                      <RevealWrapper
                        origin="top"
                        delay={100}
                        duration={1200}
                        distance="80px"
                        reset={true}
                      >
                        <Heading size={"xl"}> Dr. Arif Alvi</Heading>
                        <Text
                          mt="3"
                          size={"sm"}
                          textAlign={{ lg: "justify", base: 'start' }}
                        >
                          Dr. Arif Alvi was sworn in as the 13th President of
                          Islamic Republic of Pakistan on 9th September 2018.
                        </Text>
                        <Text
                          mt="3"
                          size={"sm"} pb={{base:'15'}}
                          textAlign={{ lg: "justify", base: "start" }}
                        >
                          Dr. Arif Alvi was born in 1949 and completed his early
                          education in Karachi. He did his Bachelor of Dental
                          Surgery (BDS) from De’ Montmorency College of
                          Dentistry, Lahore where he was declared the “Best
                          Graduate”. He completed his Masters of Science in the
                          field of Prosthodontics from University of Michigan
                          (1975) and in Orthodontics from University of Pacific,
                          San Francisco (1982). He was awarded fellowship
                          ‘Diplomatic American Board of Orthodontists (1995)’.
                          Dr. Arif Alvi has keen interest in education and
                          health sectors. He considers people of Pakistan as the
                          most precious asset and, therefore, accords special
                          focus to human resource development in the country.
                        </Text>
                      </RevealWrapper>
                    </Box>
                  </Flex>
                </Container>
              </Box>
            </Center>
          </Container>
        </Box>
        <Box
          bgGradient="linear(to-tr, #2AECE9, #0201B5)" mt={{base:'10'}}
          boxShadow={"dark-lg"}
          mb="20"
        >
          <Container maxW={"1400"} mt={{ lg: "20", base: "15" }}>
            <Flex
              gap="20"
              mb={{ lg: "15", base: "10" }}
              display={{ lg: "flex", base: "grid" }}
            >
              <Box
                flexBasis={"70%"}
                ml={{lg:"5"}}
                mx={{ base: "5" }}
                color={"white"}
                p={{ lg: "8", base: "0" }}
              >
                <RevealWrapper
                  origin="left"
                  delay={100}
                  duration={1200}
                  distance="200px"
                  reset={true}
                >
                  <Heading
                    mb="7"
                    pt={{ base: "25" }}
                    size={{ lg: "xl", base: "xl" }}
                    color={"black.700"} 
                  >
                    Sir Zia Khan
                  </Heading>
                  <Text
                    size={{ lg: "sm", base: "sm" }}
                    color={"black.700"}
                    pt={{ lg: "10px", base: "0" }}
                    textAlign={{ lg: "justify", base: "start" }}
                  >
                    CEO of Panacloud, the world’s first Integrated API Ownership
                    Economy, Crowdfunding, and Development Platform. Volunteer
                    COO of PIAIC, an initiative by the President of Pakistan for
                    AI and computing mass education. Mentor and software
                    developer with 20+ years of expertise in cloud and
                    serverless computing, software design, project management,
                    and API and App development. Expert in concept, business
                    modeling & strategy development for startups, specializing
                    in DeFi and token economics. Mentored and trained hundreds
                    of thousands of developers. Triple masters degrees in
                    business administration, engineering, and finance from
                    Arizona State University. Master in Economics from KU.
                    Certified Public Accountant and Certified Management
                    Accountant in USA.
                  </Text>{" "}
                </RevealWrapper>
              </Box>
              <Box
                mt={{ lg: "38", base: "-20" }}
               
                flexBasis={"30%"}
               pl={{base:"90", lg:'-10'}}
              >
                <RevealWrapper
                  origin="top"
                  delay={100}
                  duration={1200}
                  distance="200px"
                  reset={true}
                >
                  <Image
                    src={"/sirzia.png"}
                    alt="possible with teamwork"
                    height={{ lg: "510", base: "400" }}
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
