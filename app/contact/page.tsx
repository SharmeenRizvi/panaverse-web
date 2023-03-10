"use client";
import { Container, Box, Flex, Heading, Stack, Input, Button} from "@chakra-ui/react";
import React from "react";
import Home from "../components/Home";
import {
  SlSocialInstagram,
  SlSocialTwitter,
  SlSocialYoutube,
  SlSocialFacebook,
  SlSocialLinkedin,
  
} from "react-icons/sl";
import { VscGithubAlt } from "react-icons/vsc";
import Link from "next/link";
import Image from "next/image";
import contact from '../../public/contact.png'
import { RevealList } from "next-reveal";

export default function page() {
  return (
    <>
      <Box>
        <Home title="Contact" src="https://media.zicxa.com/1186033" />;
        <Container my='15' maxWidth={"1400"}>
          {/* <Heading
            m="15px"
            size="2xl"
            color={"darkblue"}
            textAlign="center"
            fontFamily={"monospace"}
          >
            Join our Community{" "}
          </Heading> */}

          {/* <Flex>
            <Box>
              <Image
                src={contact}
                alt="contact"
                width={"800"}
                height="500"
              ></Image>
            </Box>
          </Flex> */}

          <Box
            rounded={"20"}
            bgGradient="linear(to-b, #09C6F9, #150fd0)"
            p={{ lg: "10", base: "5" }}
            m={{ lg: "20", base: "5" }}
                      boxShadow={"dark-lg"}
                    
          >
            <RevealList interval={250} delay={500} reset={true}>
              <Heading color={"white"} mb={{lg:"5", base:'15'}} size={"xl"} textAlign="center">
                Join our Community
              </Heading>
              <Flex
                display={{ lg: "flex", base: 'grid' }}
                mt={{ lg: "50", base:'20' }}
                mb={{ lg: "50" , base:'30'}}
                color="white"
                gap={{ lg: "39", base: "30" }}
                justifyItems={{ lg: "center", base: "center" }}
                justifyContent={{ lg: "center", base: "center" }}
                flexDirection={{ lg: "row", base: "column" }}
                // ml={{ base: "35" }}
              >
                <Link href="https://www.instagram.com/piaicofficial/">
                  <SlSocialInstagram size="80" />
                </Link>
                <Link href="https://twitter.com/piaicofficial?s=20&t=S4-z5_47QCTP1rZtDRY3iA">
                  <SlSocialTwitter size={"80"} />
                </Link>
                <Link href="https://www.youtube.com/@panaverse">
                  <SlSocialYoutube size={"80"} />
                </Link>
                <Link href="https://www.linkedin.com/company/panaverse/">
                  <SlSocialLinkedin size={"80"} />
                </Link>
                <Link href="https://github.com/panaverse">
                  <VscGithubAlt size={"80"} />
                </Link>
                <Link href="https://github.com/panaverse">
                  <SlSocialFacebook size={"80"} />
                </Link>
              </Flex>
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
                <Button m="5" size="sm" colorScheme="whiteAlpha">
                  Subscribe
                </Button>
              </Stack>
            </RevealList>
          </Box>
        </Container>
      </Box>
    </>
  );
}
