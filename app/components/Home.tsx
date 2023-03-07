import { Container, Heading, Box } from '@chakra-ui/react'
import React from 'react'


export default function Home(hello:  any) {
    return (
        <Box bgImage={hello.src} py='200px' bgSize='cover' bgAttachment='fixed'>
          <Container maxW={1100}>
                <Heading color='white' size='2xl'>
                {hello.title}
              </Heading>
          </Container>
   </Box>
  )
}
