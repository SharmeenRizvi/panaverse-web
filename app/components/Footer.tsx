"use client";
import {
  Box,
  Grid,
  Flex,
  Container,
  SimpleGrid,
  Text,
  Heading,
  Image, Stack, useColorModeValue, IconButton, Input,  
} from "@chakra-ui/react";
import Link from "next/link";
import { BiMailSend } from "react-icons/bi";
import { FaInstagram, FaTwitter, FaYoutube, FaGithub } from "react-icons/fa";


export default function Footer() {
  return (
    <Box
      // height={"500"}
      bgImage={
        "https://img.myloview.com/posters/wide-light-blue-gradient-background-dark-blue-radial-gradient-effect-wallpaper-400-256160061.jpg"
      }
      // bgImage="https://videohive.img.customer.envatousercontent.com/files/7ba59abf-a544-43cc-82a1-f30e648ef11f/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=fce6accd6c9fc2fd5364c328c407cc7e"
      // bgGradient="linear(to-tl, #01032B, #010279)"
      bgSize={"cover"} 
    >
      <Container maxW={1400}>
        <SimpleGrid
          textAlign={{ lg: "start", base: "center" }}
          spacing="30px"
          py="60px"
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(4, 1fr)" }}
        >
          <Box alignContent={{ base: "center" }}>
            <Heading size={"sm"} pb="20px" color={"white"}>
              FOLLOW US
            </Heading>
            <Image
              m={{ base: "auto", lg: "0" }}
              src="/logo.png"
              alt={"panaverse logo"}
              height={73}
            />

            <Flex
              mt="5"
              color="white"
              gap={"6"}
              justifyContent={{ lg: "initial", base: "center" }}
            >
              <Link href="https://www.instagram.com/piaicofficial/">
                <FaInstagram />
              </Link>
              <Link href="https://twitter.com/piaicofficial?s=20&t=S4-z5_47QCTP1rZtDRY3iA">
                <FaTwitter />
              </Link>
              <Link href="https://www.youtube.com/@panaverse">
                <FaYoutube />
              </Link>
              <Link href="https://github.com/panaverse">
                <FaGithub />
              </Link>
            </Flex>
            <Text mt="5" fontSize={"x-small"} color={"white"}>
              Designed by Sharmeen Fatima
            </Text>
          </Box>

          <Box>
            <Heading size={"sm"} color={"white"}>
              NAVIGATE
            </Heading>
            <Grid pt={"40px"} color={"white"} fontSize="sm">
              <Link href="/blog">Blog</Link>

              <Link href="/">Home</Link>
              <Link href="/programs">Syllabus</Link>
              <Link href="/about">About Us</Link>
              <Link href="/contact">Contact Us</Link>
            </Grid>
          </Box>

          <Box>
            <Heading size={"sm"} color={"white"}>
              SUPPORT
            </Heading>
            <Grid pt="40px" color="white" fontSize={"sm"}>
              <Link href="/">Legal</Link>
              <Link href="/about">Our Vision</Link>
              <Link href="/contact"> Help Center</Link>
              <Link href="/">Privacy Policy</Link>
              <Link href="/">Terms of Service</Link>
            </Grid>
          </Box>
          <Stack align={{ lg: "flex-start", base: "center" }}>
            <Heading size={"sm"} color={"white"} mb={"5"}>
              STAY CONNECTED
            </Heading>

            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("grayAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("#010A6D", "#0100F4")}
                color={useColorModeValue("white", "gray.100")}
                _hover={{
                  bg: "#28E1E7",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
