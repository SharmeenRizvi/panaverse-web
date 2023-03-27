'use client'
import React from 'react'
// import Home from '../components/Home'
import { Box, Card, CardBody, Stack, Heading, Flex, Divider, Text,  CardFooter, SimpleGrid, Container, Center } from '@chakra-ui/react'
import zia from '../../public/Ziakhan.webp'
import hira from '../../public/hirakhan.jpeg'
import daniyal from '../../public/daniyal.png'
import adil from '../../public/adilaltaf.jpeg'
import zeeshan from '../../public/zeeshanhanif.jpeg'
import asif from '../../public/asifshah.png'
import { FaLinkedin, FaTwitterSquare, FaGithubSquare } from "react-icons/fa";
import { RevealWrapper } from "next-reveal";
import blue from '../../public/blue.png'
import hero from '../../public/hero.jpg'
 
import Image from 'next/image'

import Link from "next/link";

export default function page() {
  return (
    <>
      <Box>
        {/* <Home
          title="Meet the Team"
          src="https://cdn.pixabay.com/photo/2015/04/28/07/27/gradient-743134_960_720.jpg"
        /> */}
        <Container maxW={"1400"}>
          <Flex
            display={{ lg: "flex", base: "grid" }}
            pt={{ lg: "80px", base: "30px" }}
            pb={{ lg: "100px", base: "10px" }}
            // px={{ lg: "15px", base: "5px" }}
          >
            <Box flexBasis={"35%"} ml="5">  <RevealWrapper
                origin="left"
                delay={100}
                duration={1200}
                distance="200px"
                reset={true}
              >
              <Heading
                size={{ lg: "2xl", base: "2xl" }}
                color={"black.700"}
                lineHeight='taller'
              >
                It’s possible with teamwork
              </Heading>
              <Text size="xl" color={"black.700"} pt={"20px"}>
                Together we will take Pakistan to new heights inshaAllah.
              </Text>
              </RevealWrapper>
            </Box>
            <Box
             // mt={{ lg: "-20px", base: "0" }}
              // pl={{ lg: "55px", base: "10px" }}
              flexBasis={"65%"}
            > <RevealWrapper
                origin="top"
                delay={100}
                duration={1200}
                distance="200px"
                reset={true}
              >
              <Image
                src={hero}
                alt="possible with teamwork"
                // width={{ lg: "1000", base: "500" }}
                // height={{ lg: " 500", base: "200" }}
              /> </RevealWrapper>
            </Box>
          </Flex>
        </Container>
        <Container
          maxW={"1400"}
          alignContent="center"
          bgGradient="linear(to-b, #74ebd5, #ACB6E5)"
          py="15"
          px="15"
          boxShadow={"dark-lg"}
          mb="5"
          mt={{ base: "10" }}
        >
          <Box ml={{ lg: "150px" }} mr={{ lg: "150px" }}>
            <Heading
              m="5"
              textAlign={"center"}
              size={{ lg: "2xl", base: "xl" }}
            >
              Meet the Team
            </Heading>
            <Text textAlign={"center"} size="lg">
              Our team, the ones who work tirelessly to empower our students.
            </Text>
            <SimpleGrid
              ml={{ lg: "0", base: "7.9" }}
              mt={{ lg: "16", base: "6" }}
              alignItems={"center"}
              alignContent="center"
              templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(1, 1fr)" }}
            >
              <RevealWrapper
                origin="left"
                delay={200}
                duration={1000}
                distance="100px"
                reset={true}
              >
                <Card
                  maxW={{ lg: "2xs", base: "xs" }}
                  minHeight={"500"}
                  mb={"3"}
                  mr="3"
                  ml={{ base: "3" }}
                  shadow={"md"}
                  // bgGradient="linear(to-b, #09C6F9, #150fd0)"
                  bgGradient="linear(to-br, #2AECE9, #0201B5)"
                >
                  <CardBody pl={{ base: "8" }} mx={{ lg: "1", base: "5" }}>
                    <Image
                      src={zia}
                      alt="Sir Zia Khan"
                      width={"200"}
                      height={"200"}
                    />
                    <Stack mt="4" spacing="1">
                      <Heading color="darkblue" size="md">
                        Zia Khan
                      </Heading>
                      <Text fontSize={"sm"} color="white">
                        CEO of Panacloud, the world’s first Integrated API
                        Economy, Crowdfunding & Development Platform. Volunteer COO of
                        PIAIC.
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />

                  <Flex
                    mt="2"
                    mb="2"
                    mr="2"
                    ml={{ lg: "5", base: "0" }}
                    color="white"
                    gap={"2"}
                    justifyContent={{ lg: "right", base: "center" }}
                  >
                    <Link href="https://twitter.com/ziakhan">
                      <FaTwitterSquare size={"40"} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/ziaukhan/">
                      <FaLinkedin size={"40"} />
                    </Link>
                    <Link href="https://github.com/panaverse">
                      <FaGithubSquare size={"40"} />
                    </Link>
                  </Flex>
                </Card>
              </RevealWrapper>
              <RevealWrapper
                origin="top"
                delay={200}
                duration={1000}
                distance="100px"
                reset={true}
              >
                <Card
                  maxW={{ lg: "2xs", base: "xs" }}
                  minHeight={"500"}
                  mb={"3"}
                  mr="3"
                  ml={{ base: "3" }}
                  shadow={"md"}
                  // bgGradient="linear(to-b, #09C6F9, #150fd0)"
                  bgGradient="linear(to-br, #2AECE9, #0201B5)"
                >
                  <CardBody pl={{ base: "8" }} mx={{ lg: "1", base: "5" }}>
                    <Image
                      src={hira}
                      alt="Ms Hira Khan"
                      width={"200"}
                      height={"200"}
                    />
                    <Stack mt="4" spacing="1">
                      <Heading color="darkblue" size="md">
                        Hira Khan
                      </Heading>
                      <Text color="white" fontSize={"sm"}>
                        Director of the Women Empowerment of the Presidential
                        Initiative for Artificial Intelligence & Computing.
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />

                  <Flex
                    mt="2"
                    mb="2"
                    mr="2"
                    ml={{ lg: "5", base: "0" }}
                    color="white"
                    gap={"2"}
                    justifyContent={{ lg: "right", base: "center" }}
                  >
                    <Link href="">
                      <FaTwitterSquare size={"40"} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/hira-khan-76523540/">
                      <FaLinkedin size={"40"} />
                    </Link>
                    <Link href="">
                      <FaGithubSquare size={"40"} />
                    </Link>
                  </Flex>
                </Card>
              </RevealWrapper>
              <RevealWrapper
                origin="left"
                delay={200}
                duration={1000}
                distance="100px"
                reset={true}
              >
                <Card
                  maxW={{ lg: "2xs", base: "xs" }}
                  minHeight={"500"}
                  mb={"3"}
                  mr="3"
                  ml={{ base: "3" }}
                  shadow={"md"}
                  // bgGradient="linear(to-b, #09C6F9, #150fd0)"
                  bgGradient="linear(to-br, #2AECE9, #0201B5)"
                >
                  <CardBody pl={{ base: "8" }} mx={{ lg: "1", base: "5" }}>
                    <Image
                      src={adil}
                      alt="Sir Adil Altaf"
                      width={"200"}
                      height={"200"}
                    />
                    <Stack mt="4" spacing="1">
                      <Heading color="darkblue" size="md">
                        Adil Altaf
                      </Heading>
                      <Text color="white" fontSize={"sm"}>
                        Working in the software industry for over a decade in
                        Full Stack SDLC ,internet-scale apps with MERN Stack and
                        JAMstack technologies.
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />

                  <Flex
                    mt="2"
                    mb="2"
                    mr="2"
                    ml={{ lg: "5", base: "0" }}
                    color="white"
                    gap={"2"}
                    justifyContent={{ lg: "right", base: "center" }}
                  >
                    <Link href="">
                      <FaTwitterSquare size={"40"} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/adilaltaf/">
                      <FaLinkedin size={"40"} />
                    </Link>
                    <Link href="https://github.com/adil-innovation-lab">
                      <FaGithubSquare size={"40"} />
                    </Link>
                  </Flex>
                </Card>
              </RevealWrapper>
              <RevealWrapper
                origin="left"
                delay={200}
                duration={1000}
                distance="100px"
                reset={true}
              >
                <Card
                  maxW={{ lg: "2xs", base: "xs" }}
                  minHeight={"500"}
                  mb={"3"}
                  ml={{ base: "3" }}
                  mr="3"
                  shadow={"md"}
                  // bgGradient="linear(to-b, #09C6F9, #150fd0)"
                  bgGradient="linear(to-br, #2AECE9, #0201B5)"
                >
                  <CardBody pl={{ base: "8" }} mx={{ lg: "1", base: "5" }}>
                    <Image
                      src={zeeshan}
                      alt="Sir Zeeshan Hanif"
                      width={"200"}
                      height={"200"}
                    />
                    <Stack mt="4" spacing="1">
                      <Heading color="darkblue" size="md">
                        Zeeshan Hanif
                      </Heading>
                      <Text color="white" fontSize={"sm"}>
                        Full-stack cloud and blockchain developer with over a
                        decade of experience in development using MERN Stack and
                        JAMstack.
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />

                  <Flex
                    mt="2"
                    mb="2"
                    mr="2"
                    ml={{ lg: "5", base: "0" }}
                    color="white"
                    gap={"2"}
                    justifyContent={{ lg: "right", base: "center" }}
                  >
                    <Link href="https://twitter.com/zeeshanhanif">
                      <FaTwitterSquare size={"40"} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/zeeshanhanif/">
                      <FaLinkedin size={"40"} />
                    </Link>
                    <Link href="https://github.com/zeeshanhanif">
                      <FaGithubSquare size={"40"} />
                    </Link>
                  </Flex>
                </Card>
              </RevealWrapper>
              <RevealWrapper
                origin="bottom"
                delay={200}
                duration={1000}
                distance="100px"
                reset={true}
              >
                <Card
                  maxW={{ lg: "2xs", base: "xs" }}
                  minHeight={"500"}
                  mb={"3"}
                  ml={{ base: "3" }}
                  mr="3"
                  shadow={"md"}
                  // bgGradient="linear(to-b, #09C6F9, #150fd0)"
                  bgGradient="linear(to-br, #2AECE9, #0201B5)"
                >
                  <CardBody pl={{ base: "8" }} mx={{ lg: "1", base: "5" }}>
                    <Image
                      src={daniyal}
                      alt="Sir Daniyal Nagori"
                      width={"200"}
                      height={"200"}
                    />
                    <Stack mt="4" spacing="1">
                      <Heading color="darkblue" size="md">
                        Daniyal Nagori
                      </Heading>
                      <Text color="white" fontSize={"sm"}>
                        Full-stack developer and DevOps Architect with
                        certification in most cutting edge technologies.
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />

                  <Flex
                    mt="2"
                    mb="2"
                    mr="2"
                    ml={{ lg: "5", base: "0" }}
                    color="white"
                    gap={"2"}
                    justifyContent={{ lg: "right", base: "center" }}
                  >
                    <Link href="https://twitter.com/daniyalnagori1">
                      <FaTwitterSquare size={"40"} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/daniyalnagori/">
                      <FaLinkedin size={"40"} />
                    </Link>
                    <Link href="">
                      <FaGithubSquare size={"40"} />
                    </Link>
                  </Flex>
                </Card>
              </RevealWrapper>
              <RevealWrapper
                origin="left"
                delay={200}
                duration={1000}
                distance="100px"
                reset={true}
              >
                <Card
                  maxW={{ lg: "2xs", base: "xs" }}
                  minHeight={"500"}
                  mb={"3"}
                  mr="3"
                  ml={{ base: "3" }}
                  shadow={"md"}
                  //bgGradient="linear(to-b, #09C6F9, #150fd0)"
                  bgGradient="linear(to-br, #2AECE9, #0201B5)"
                  alignContent={"center"}
                >
                  <CardBody pl={{ base: "8" }} mx={{ lg: "1", base: "5" }}>
                    <Image
                      src={asif}
                      alt="Sir Asif Shah"
                      width={"200"}
                      height={"200"}
                    />
                    <Stack
                      mt="4"
                      spacing="1"
                      justifyItems={{ lg: "right", base: "center" }}
                    >
                      <Heading color="darkblue" size="md">
                        Asif Shah
                      </Heading>
                      <Text color="white" fontSize={"sm"}>
                        Graphic and Product Designer. Experience of more than a
                        decade. Hold national & international awards.
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />

                  <Flex
                    mt="2"
                    mb="2"
                    mr="2"
                    ml={{ lg: "5", base: "0" }}
                    color="white"
                    gap={"2"}
                    justifyContent={{ lg: "right", base: "center" }}
                  >
                    <Link href="">
                      <FaTwitterSquare size={"40"} />
                    </Link>
                    <Link href="">
                      <FaLinkedin size={"40"} />
                    </Link>
                    <Link href="">
                      <FaGithubSquare size={"40"} />
                    </Link>
                  </Flex>
                </Card>
              </RevealWrapper>
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </>
  );
}
