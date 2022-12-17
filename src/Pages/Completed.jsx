import { Box, Button, Center, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Completed = () => {
  return (
    <>
        <Box width='60%' margin='auto' border='1px solid grey' padding='20px' borderRadius='10px'>
            <Box width='40%' margin='30px auto' padding='20px' borderRadius='10px'>
                <Center>
                    <Heading fontSize='22px'>Thankyou for your purchase 😄</Heading>
                </Center>
                <Center marginTop='50px'>
                    <Link to='/'>
                        <Button>Continue shopping</Button>
                    </Link>
                </Center>
            </Box>
        </Box>
    </>
  )
}

export default Completed