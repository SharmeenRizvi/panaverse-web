"use client";

import { Box, Container, SimpleGrid, Flex, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { HamburgerIcon } from "@chakra-ui/icons";
export default function Header() {
  return (
    <Box boxShadow={"lg"}>
      <Container maxW={"1400"}>
        <SimpleGrid
          templateColumns={{ lg: "repeat(3, 1fr)", base: "repeat(2, 1fr)" }}
        >
          <Box>
            <Link href={"/"}>
              <Image src={logo} alt={"panaverse-logo"} height={"70"} />
            </Link>
          </Box>

          <Flex
            display={{
              lg: "flex",
              base: "none",
            }}
            placeItems={"center"}
            color={"black"}
            fontSize={18}
            fontWeight={"bold"}
            gap={10}
          >
            <Link href={"/"}> Home </Link>
            <Link href={"/about"}> About </Link>
            <Link href={"/programs"}> Programs </Link>
            {/* <Link href={"/blog"}> Blog </Link> */}
            <Link href={"/faculty"}> Faculty </Link>
            <Link href={"/contact"}> Contact </Link>
          </Flex>
          <Box
            display={{
              lg: "initial",
              base: "none",
            }}
          >
            <Button
              mt={"10px"}
              size={"md"}
              colorScheme={"blue"}
              bgGradient="linear(to-b, #2AECE9, #0201B5)"
              //bgGradient="linear(to-l, #09C6F9, #150fd0)"
              color="white"
              float={"right"}
            >
              <Link href={"https://portal.piaic.org/signup"}> Apply</Link>
            </Button>
          </Box>
          <Box pt="10px" display={{ base: "initial", lg: "none" }}>
            <Menu>
              <MenuButton
                float="right"
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem>
                  <Link href={"/"}> Home </Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"/about"}> About </Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"/programs"}> Programs </Link>
                </MenuItem>
                {/* <MenuItem>
                  <Link href={"/blog"}> Blog </Link>
                </MenuItem> */}
                <MenuItem>
                  <Link href={"/faculty"}> Faculty </Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"/contact"}> Contact </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
