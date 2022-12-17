import { Box, Button, Center, Heading, HStack, Input, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Checkout = () => {

    const cartProd = useSelector((state) => state.cart.data)

    var totalPrice = 0
    var strPrice = 0
    for(var i=0;i<cartProd.length;i++) 
    {
        totalPrice += cartProd[i].price *cartProd[i].nos
        strPrice += cartProd[i].str_price *cartProd[i].nos
    }
  return (
    <>
        <Box width='60%' margin='auto' border='1px solid grey' padding='20px' borderRadius='10px'>
            <Box>
                <Input placeholder='Enter Address' marginBottom='15px'/>
                <Input placeholder='Enter Address'/>
            </Box>
            <Box width='40%' margin='30px auto' border='1px solid grey' padding='20px' borderRadius='10px'>
                <Center>
                    <Heading fontSize='22px'>Total payable: ₹ {totalPrice.toFixed(2)}</Heading>
                </Center>
            </Box>
            <Box width='40%' margin='30px auto' border='1px solid grey' padding='20px' borderRadius='10px'>
                <VStack gap={4}>
                    <Input placeholder='Card number'/>
                <HStack>
                    <Input placeholder='MM/YY'/>
                    <Input placeholder='CVV'/>
                </HStack>
                <Link to='/complete'>
                    <Button color='white' bgColor='green.500'>Proceed to pay</Button>
                </Link>
                </VStack>
            </Box>
        </Box>
    </>
  )
}

export default Checkout