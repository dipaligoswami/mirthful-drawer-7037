import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const Boxes = ({arr,title}) => {
  return (
    <>
        <Flex padding='15px'>
            <Text fontSize='24px' fontWeight='900'>
                {title}
            </Text>
        </Flex>
        <Flex justifyContent='space-between' gap={6}>
            {arr.map((item,ind) => (
                <Box >
                    <Center>
                        <Image src={`/${arr[0]}/${ind+1}.webp`} width='100%' cursor={'pointer'} borderRadius='15px' boxShadow='md' _hover={{boxShadow: '2xl'}}/>
                    </Center>
                </Box>
            ))}
        </Flex>
    </>
  )
}

export default Boxes