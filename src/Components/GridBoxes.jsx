import React from 'react'
import { Box, Center, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'


const GridBoxes = ({title,fname}) => {
  return (
    <>
         <Flex padding='15px'>
            <Text fontSize='24px' fontWeight='900'>
                {title}
            </Text>
        </Flex>
        <Grid templateRows='repeat(2, 1fr)' templateColumns='repeat(4, 1fr)' gap={6}>
            <GridItem rowSpan={2} colSpan={2}>
                <Box >
                    <Center >
                        <Image src={`/${fname}/1.webp`} width='100%' cursor={'pointer'} borderRadius='15px' boxShadow='md' _hover={{boxShadow: '2xl'}}/>
                    </Center>
                </Box>
            </GridItem>
            <GridItem>
                <Box >
                    <Center >
                        <Image src={`/${fname}/2.webp`} width='100%' cursor={'pointer'} borderRadius='15px' boxShadow='md' _hover={{boxShadow: '2xl'}}/>
                    </Center>
                </Box>
            </GridItem>
            <GridItem>
                <Box >
                    <Center >
                        <Image src={`/${fname}/3.webp`} width='100%' cursor={'pointer'} borderRadius='15px' boxShadow='md' _hover={{boxShadow: '2xl'}}/>
                    </Center>
                </Box>
            </GridItem>
            <GridItem>
                <Box >
                    <Center >
                        <Image src={`/${fname}/4.webp`} width='100%' cursor={'pointer'} borderRadius='15px' boxShadow='md' _hover={{boxShadow: '2xl'}}/>
                    </Center>
                </Box>
            </GridItem>
            <GridItem>
                <Box >
                    <Center >
                        <Image src={`/${fname}/5.webp`} width='100%' cursor={'pointer'} borderRadius='15px' boxShadow='md' _hover={{boxShadow: '2xl'}}/>
                    </Center>
                </Box>
            </GridItem>
        </Grid>
    </>
  )
}

export default GridBoxes