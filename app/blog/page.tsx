'use client'
import React from 'react'
import Home from '../components/Home'
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';
import { RevealList } from "next-reveal";

export default function page() {
  return (
    <>
      <Box mb="30px">
        <Home title="Blog" src="https://media.zicxa.com/1186033" />;
        <Container maxW={"1400"}>
          <Heading as="h1">Building The Metaverse</Heading>
          <RevealList interval={100} delay={500} reset={true}>
            <Box
              marginTop={{ base: "1", sm: "5" }}
              display="flex"
              flexDirection={{ base: "column", sm: "row" }}
              justifyContent="space-between"
            >
              <Box
                display="flex"
                flex="1"
                marginRight="3"
                position="relative"
                alignItems="center"
              >
                <Box
                  width={{ base: "100%", sm: "85%" }}
                  zIndex="2"
                  marginLeft={{ base: "0", sm: "5%" }}
                  marginTop="5%"
                >
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Image
                      borderRadius="lg"
                      src={
                        "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1910&q=80"
                      }
                      alt="some good alt text"
                      objectFit="contain"
                    />
                  </Link>
                </Box>
                <Box zIndex="1" width="100%" position="absolute" height="100%">
                  <Box
                    bgGradient={useColorModeValue(
                      "radial(orange.600 1px, transparent 1px)",
                      "radial(orange.300 1px, transparent 1px)"
                    )}
                    backgroundSize="20px 20px"
                    opacity="0.4"
                    height="100%"
                  />
                </Box>
              </Box>

              <Box
                display="flex"
                flex="1"
                flexDirection="column"
                justifyContent="center"
                marginTop={{ base: "3", sm: "0" }}
              >
                <Heading marginTop="1">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    A Quick Look at the Metaverse
                  </Link>
                </Heading>
                <Text
                  as="p"
                  marginTop="2"
                  color={useColorModeValue("gray.700", "gray.200")}
                  fontSize="lg"
                >
                  Let’s start the Metaverse guide by explaining what
                  themetaverse actually is. The metaverse meaning is flexible
                  and can describe different experiences. The metaverse can be
                  an entire virtual world that you’re immersed in via a VR
                  headset. But the metaverse can also integrate itself into the
                  world around you through a more mobile digital overlay. This
                  augmented reality-based approach recently gained widespread
                  recognition through Pokémon GO.
                </Text>
              </Box>
            </Box>
            <Box
              marginTop={{ base: "1", sm: "5" }}
              display="flex"
              flexDirection={{ base: "column", sm: "row" }}
              justifyContent="space-between"
            >
              <Box
                display="flex"
                flex="1"
                flexDirection="column"
                justifyContent="center"
                marginTop={{ base: "3", sm: "0" }}
              >
                <Heading marginTop="1">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    Who will govern Metaverse?
                  </Link>
                </Heading>
                <Text
                  as="p"
                  marginTop="2"
                  color={useColorModeValue("gray.700", "gray.200")}
                  fontSize="lg"
                >
                  Let’s start the Metaverse guide by explaining what the
                  metaverse actually is. The metaverse meaning is flexible and
                  can describe different experiences. The metaverse can be an
                  entire virtual world that you’re immersed in via a VR headset.
                  But the metaverse can also integrate itself into the world
                  around you through a more mobile digital overlay. This
                  augmented reality-based approach recently gained widespread
                  recognition through Pokémon GO.
                </Text>
              </Box>
              <Box
                display="flex"
                flex="1"
                marginRight="3"
                position="relative"
                alignItems="center"
              >
                <Box
                  width={{ base: "100%", sm: "85%" }}
                  zIndex="2"
                  marginLeft={{ base: "0", sm: "5%" }}
                  marginTop="5%"
                >
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Image
                      borderRadius="lg"
                      src={
                        "https://assets.weforum.org/article/image/responsive_big_webp_dXsu6gnj9xmjdy3uUad69gDGhVy03-S3DBg1ClVf8fI.webp"
                      }
                      alt="some good alt text"
                      objectFit="contain"
                    />
                  </Link>
                </Box>
                <Box zIndex="1" width="100%" position="absolute" height="100%">
                  <Box
                    bgGradient={useColorModeValue(
                      "radial(orange.600 1px, transparent 1px)",
                      "radial(orange.300 1px, transparent 1px)"
                    )}
                    backgroundSize="20px 20px"
                    opacity="0.4"
                    height="100%"
                  />
                </Box>
              </Box>
            </Box>
            <Box
              marginTop={{ base: "1", sm: "5" }}
              display="flex"
              flexDirection={{ base: "column", sm: "row" }}
              justifyContent="space-between"
            >
              <Box
                display="flex"
                flex="1"
                marginRight="3"
                position="relative"
                alignItems="center"
              >
                <Box
                  width={{ base: "100%", sm: "85%" }}
                  zIndex="2"
                  marginLeft={{ base: "0", sm: "5%" }}
                  marginTop="5%"
                >
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Image
                      borderRadius="lg"
                      src={
                        "https://venturebeat.com/wp-content/uploads/2022/03/GettyImages-1372924556.jpg?fit=750%2C422&strip=all"
                      }
                      alt="some good alt text"
                      objectFit="contain"
                    />
                  </Link>
                </Box>
                <Box zIndex="1" width="100%" position="absolute" height="100%">
                  <Box
                    bgGradient={useColorModeValue(
                      "radial(orange.600 1px, transparent 1px)",
                      "radial(orange.300 1px, transparent 1px)"
                    )}
                    backgroundSize="20px 20px"
                    opacity="0.4"
                    height="100%"
                  />
                </Box>
              </Box>

              <Box
                display="flex"
                flex="1"
                flexDirection="column"
                justifyContent="center"
                marginTop={{ base: "3", sm: "0" }}
              >
                <Heading marginTop="1">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    Securing the Metaverse
                  </Link>
                </Heading>
                <Text
                  as="p"
                  marginTop="2"
                  color={useColorModeValue("gray.700", "gray.200")}
                  fontSize="lg"
                >
                  Let’s start the Metaverse guide by explaining what the
                  metaverse actually is. The metaverse meaning is flexible and
                  can describe different experiences. The metaverse can be an
                  entire virtual world that you’re immersed in via a VR headset.
                  But the metaverse can also integrate itself into the world
                  around you through a more mobile digital overlay. This
                  augmented reality-based approach recently gained widespread
                  recognition through Pokémon GO.
                </Text>{" "}
              </Box>
            </Box>
            <Box
              marginTop={{ base: "1", sm: "5" }}
              display="flex"
              flexDirection={{ base: "column", sm: "row" }}
              justifyContent="space-between"
            >
              <Box
                display="flex"
                flex="1"
                flexDirection="column"
                justifyContent="center"
                marginTop={{ base: "3", sm: "0" }}
              >
                <Heading marginTop="1">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    Road to VR
                  </Link>
                </Heading>
                <Text
                  as="p"
                  marginTop="2"
                  color={useColorModeValue("gray.700", "gray.200")}
                  fontSize="lg"
                >
                  Road to VR was founded in 2011 as a world leader in
                  independent news about virtual reality and the metaverse. It’s
                  one of the metaverse blogs that shows how both the hardware
                  and software of the metaverse are growing at a rapid pace.
                  Road to VR obviously deals with virtual reality. But it also
                  covers news about augmented reality and other metaverse
                  related subjects.
                </Text>{" "}
              </Box>
              <Box
                display="flex"
                flex="1"
                marginRight="3"
                position="relative"
                alignItems="center"
              >
                <Box
                  width={{ base: "100%", sm: "85%" }}
                  zIndex="2"
                  marginLeft={{ base: "0", sm: "5%" }}
                  marginTop="5%"
                >
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Image
                      borderRadius="lg"
                      src={
                        "https://assets.weforum.org/article/image/responsive_big_webp_dXsu6gnj9xmjdy3uUad69gDGhVy03-S3DBg1ClVf8fI.webp"
                      }
                      alt="some good alt text"
                      objectFit="contain"
                    />
                  </Link>
                </Box>
                <Box zIndex="1" width="100%" position="absolute" height="100%">
                  <Box
                    bgGradient={useColorModeValue(
                      "radial(orange.600 1px, transparent 1px)",
                      "radial(orange.300 1px, transparent 1px)"
                    )}
                    backgroundSize="20px 20px"
                    opacity="0.4"
                    height="100%"
                  />
                </Box>
              </Box>
            </Box>
           
            <Box 
              marginTop={{ base: "1", sm: "5" }}
              display="flex"
              flexDirection={{ base: "column", sm: "row" }}
              justifyContent="space-between"
            >
              <Box 
                display="flex"
                flex="1"
                marginRight="3"
                position="relative"
                alignItems="center"
              >
                <Box 
                  width={{ base: "100%", sm: "85%" }}
                  zIndex="2"
                  marginLeft={{ base: "0", sm: "5%" }}
                  marginTop="5%"
                >
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Image
                      borderRadius="lg"
                      src={
                        "https://venturebeat.com/wp-content/uploads/2022/03/GettyImages-1372924556.jpg?fit=750%2C422&strip=all"
                      }
                      alt="some good alt text"
                      objectFit="contain"
                    />
                  </Link>
                </Box>
                <Box zIndex="1" width="100%" position="absolute" height="100%" >
                  <Box 
                    bgGradient={useColorModeValue(
                      "radial(orange.600 1px, transparent 1px)",
                      "radial(orange.300 1px, transparent 1px)"
                    )}
                    backgroundSize="20px 20px"
                    opacity="0.4"
                    
                    height="100%"
                  />
                </Box>
              </Box>

              <Box
                display="flex"
                flex="1"
                flexDirection="column"
                justifyContent="center"
                marginTop={{ base: "3", sm: "0" }}
              >
                <Heading marginTop="1">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    Securing the Metaverse
                  </Link>
                </Heading>
                <Text
                  as="p"
                  marginTop="2"
                  color={useColorModeValue("gray.700", "gray.200")}
                  fontSize="lg"
                >
                  You’ve seen that metaverse blogs cover a wide range of
                  different topics. Business, branding, and economics are
                  particularly common subjects. But there’s a lot more to learn
                  about how various brands are creating and selling products
                  within the metaverse. Some of the most innovative companies
                  are taking their metaverse growth into directions nobody could
                  have seen coming. This includes cross-platform marketing and
                  events which cross the boundary between the online and offline
                  worlds.
                </Text>
              </Box>
            </Box>
            
            <Box
              marginTop={{ base: "1", sm: "5" }}
              display="flex"
              flexDirection={{ base: "column", sm: "row" }}
              justifyContent="space-between"
            >
              <Box
                display="flex"
                flex="1"
                flexDirection="column"
                justifyContent="center"
                marginTop={{ base: "3", sm: "0" }}
              >
                <Heading marginTop="1">
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    Road to VR
                  </Link>
                </Heading>
                <Text
                  as="p"
                  marginTop="2"
                  color={useColorModeValue("gray.700", "gray.200")}
                  fontSize="lg"
                >
                  Road to VR was founded in 2011 as a world leader in
                  independent news about virtual reality and the metaverse. It’s
                  one of the metaverse blogs that shows how both the hardware
                  and software of the metaverse are growing at a rapid pace.
                  Road to VR obviously deals with virtual reality. But it also
                  covers news about augmented reality and other metaverse
                  related subjects.
                </Text>
              </Box>
              <Box
                display="flex"
                flex="1"
                marginRight="3"
                position="relative"
                alignItems="center"
              >
                <Box
                  width={{ base: "100%", sm: "85%" }}
                  zIndex="2"
                  marginLeft={{ base: "0", sm: "5%" }}
                  marginTop="5%"
                >
                  <Link
                    textDecoration="none"
                    _hover={{ textDecoration: "none" }}
                  >
                    <Image
                      borderRadius="lg"
                      src={
                        "https://assets.weforum.org/article/image/responsive_big_webp_dXsu6gnj9xmjdy3uUad69gDGhVy03-S3DBg1ClVf8fI.webp"
                      }
                      alt="some good alt text"
                      objectFit="contain"
                    />
                  </Link>
                </Box>
                <Box zIndex="1" width="100%" position="absolute" height="100%">
                  <Box
                    bgGradient={useColorModeValue(
                      "radial(orange.600 1px, transparent 1px)",
                      "radial(orange.300 1px, transparent 1px)"
                    )}
                    backgroundSize="20px 20px"
                    opacity="0.4"
                    height="100%"
                  />
                </Box>
              </Box>
            </Box>
          </RevealList>
        </Container>
      </Box>
    </>
  );
  
}
