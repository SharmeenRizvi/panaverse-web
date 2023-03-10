'use client'
import { Box, Container, Flex, Heading, Image, Text, Button } from '@chakra-ui/react';
import React from 'react'
import Home from '../components/Home'
import { RevealWrapper } from "next-reveal";



export default function page() {
  return (
    <>
      <Box>
        <Home title="About" src="https://media.zicxa.com/1186033" />
        <Container maxWidth={"1400"}>
          <Box>
            <Container maxW={"1400"}>
              <Flex
                gap="20px"
                my="50px"
                px={{ lg: "50px", base: "20px" }}
                display={{ lg: "flex", base: "grid" }}
              >
                <Box flexBasis={"50%"}>
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
                      height={{ lg: "400", base: "300" }}
                    />{" "}
                  </RevealWrapper>
                </Box>
                <Box
                  flexBasis={"50%"}
                  bg={"blue.100"}
                  p="5"
                  borderRadius={"lg"}
                >
                  <RevealWrapper
                    origin="top"
                    delay={100}
                    duration={1200}
                    distance="80px"
                    reset={true}
                  >
                    <Heading size={"lg"}> Dr. Arif Alvi</Heading>
                    <Text mt="5" size={"sm"}>
                      Dr. Arif Alvi was sworn in as the 13th President of
                      Islamic Republic of Pakistan on 9th September 2018.
                    </Text>
                    <Text mt="5" size={"sm"}>
                      Dr. Arif Alvi was born in 1949 and completed his early
                      education in Karachi. He did his Bachelor of Dental
                      Surgery (BDS) from De’ Montmorency College of Dentistry,
                      Lahore where he was declared the “Best Graduate”. He
                      completed his Masters of Science in the field of
                      Prosthodontics from University of Michigan (1975) and in
                      Orthodontics from University of Pacific, San Francisco
                      (1982). He was awarded fellowship ‘Diplomatic American
                      Board of Orthodontists (1995)’.
                    </Text>
                  </RevealWrapper>
                  {/* <Text mt="5" size={"sm"}>
                President Dr. Arif Alvi has been a renowned professional and has
                held many important positions in the field of Dentistry. He
                remained Dean of Orthodontics, College of Physicians and
                Surgeons of Pakistan, President, Pakistan Dental Association
                (1997-2001), Pakistan Association of Orthodontists (2005), Asia
                Pacific Dental Federation (2006-07) and Councilor of the World
                Dental Federation (2007-2013). Through his sheer hard work in
                the World Dental Federation, he was able to get the declaration
                of 20th March as World Oral Health Day. He is also an author of
                a book, theses, and many articles.
              </Text> */}
                </Box>
              </Flex>
            </Container>
          </Box>
          <Box>
            <Container maxW={"1400"}>
              <Flex
                gap="20px"
                my="50px"
                px={{ lg: "50px", base: "20px" }}
                display={{ lg: "flex", base: "grid" }}
              >
                <Box
                  flexBasis={"50%"}
                  bg={"blue.100"}
                  p="5"
                  borderRadius={"lg"}
                >
                  <RevealWrapper
                    origin="left"
                    delay={100}
                    duration={1200}
                    distance="80px"
                    reset={true}
                  >
                    <Heading size={"lg"}> Panaverse DAO </Heading>
                    <Text mt={5} size={"sm"}>
                      Panaverse DAO is a community of Web 3 and Metaverse
                      developers, designers, trainers, startup founders and
                      service providers. Panaverse DAO is struggling to produce
                      professional metaverse developers from Pakistan for the
                      upcoming Era of Internet
                    </Text>{" "}
                  </RevealWrapper>
                  {/* <Text mt={5} size={"sm"}>
                President Dr. Arif Alvi has been a renowned professional and has
                held many important positions in the field of Dentistry. He
                remained Dean of Orthodontics, College of Physicians and
                Surgeons of Pakistan, President, Pakistan Dental Association
                (1997-2001), Pakistan Association of Orthodontists (2005), Asia
                Pacific Dental Federation (2006-07) and Councilor of the World
                Dental Federation (2007-2013). Through his sheer hard work in
                the World Dental Federation, he was able to get the declaration
                of 20th March as World Oral Health Day. He is also an author of
                a book, theses, and many articles.
              </Text> */}
                </Box>
                <Box flexBasis={"50%"}>
                  <RevealWrapper
                    origin="left"
                    delay={100}
                    duration={1200}
                    distance="80px"
                    reset={true}
                  >
                    <Image
                      src="/logo5.webp"
                      alt="Panaverse-DAO"
                      ml={{ lg: "150", base: "3" }}
                      height={{ lg: "200", base: "150" }}
                      mt="10"
                    />
                  </RevealWrapper>
                </Box>
              </Flex>
            </Container>
          </Box>
          <Box>
            <Container maxW={"1400"}>
              <Flex
                gap="20px"
                my="50px"
                px={{ lg: "50px", base: "20px" }}
                display={{ lg: "flex", base: "grid" }}
              >
                <Box flexBasis={"50%"}>
                  <RevealWrapper
                    origin="left"
                    delay={100}
                    duration={1200}
                    distance="80px"
                    reset={true}
                  >
                    <Image
                      mt={"10"}
                      src="/Ziakhan.webp"
                      alt="Sir Zia Khan"
                      mx="auto"
                      height={{ lg: "300", base: "200" }}
                    />{" "}
                  </RevealWrapper>
                </Box>
                <Box
                  flexBasis={"50%"}
                  bg={"blue.100"}
                  p="5"
                  borderRadius={"lg"}
                >
                  <RevealWrapper
                    origin="bottom"
                    delay={100}
                    duration={1200}
                    distance="80px"
                    reset={true}
                  >
                    <Heading size={"lg"}>Zia Khan</Heading>
                    <Text mt={5} size={"sm"}>
                      CEO of Panacloud, the world’s first Integrated API
                      Ownership Economy, Crowdfunding, and Development Platform.
                      Volunteer COO of PIAIC, an initiative by the President of
                      Pakistan for AI and computing mass education. Mentor and
                      software developer with 20+ years of expertise in cloud
                      and serverless computing, software design, project
                      management, and API and App development. Expert in
                      concept, business modeling & strategy development for
                      startups, specializing in DeFi and token economics.
                      Mentored and trained hundreds of thousands of developers.
                      Triple masters degrees in business administration,
                      engineering, and finance from Arizona State University.
                      Master in Economics from KU. Certified Public Accountant
                      and Certified Management Accountant in USA.
                    </Text>
                  </RevealWrapper>
                  {/* <Text mt={5} size={"xs"}>
                Extensive experience in software architecture, design,
                development, implementation, and integration. Worked as a
                developer in Silicon Valley for 7 years. Hands-on work including
                thousands of hours of development work logged recently resulting
                in multiple successful projects for cutting edge startups like
                Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy,
                Cloudspot, OnSeen, Unicharts, etc.
              </Text> */}
                </Box>
              </Flex>

              <Text>
                {" "}
                The mission of PIAIC is to reshape Pakistan by revolutionizing
                education, research, and business by adopting latest,
                cutting-edge technologies. Experts are calling this the 4th
                industrial revolution. We want Pakistan to become a global hub
                for AI, data science, cloud native computing, edge computing,
                blockchain, augmented reality, and internet of things.
              </Text>
            </Container>
          </Box>
        </Container>
      </Box>
    </>
  );
}
