import { Box, Button, Center, Flex, Image, Text, VStack } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from '../Components/CartItem';
import { getCart } from '../Redux/cart/action';

const Cart = () => {
    const [up,setUp] = useState(1)
    const dispatch = useDispatch();
    
    const cartProd = useSelector((state) => state.cart.data)
    const loading = useSelector((state) => state.cart.loading)
    
    useEffect(() => {
        dispatch(getCart())
    },[up])

    
    

    var totalPrice = 0
    var strPrice = 0
    for(var i=0;i<cartProd.length;i++) 
    {
        totalPrice += cartProd[i].price *cartProd[i].nos
        strPrice += cartProd[i].str_price *cartProd[i].nos
    }
    var discount = strPrice - totalPrice
    console.log(totalPrice,strPrice,discount)
    
  return (
    <>
        <Box width='72%' margin='auto'>
            <Flex>
                <Text fontWeight='bold' fontSize='22px'>
                    Your Basket
                </Text>
            </Flex>
            <Box width='100%' backgroundColor='#202121' borderRadius='15px' padding='15px 25px' marginTop='10px'>
                <Flex justifyContent='space-between'>
                    <VStack>
                        <Text color='white' fontWeight='600' fontSize='15px'>
                            Total ({cartProd.length} items): ₹ {totalPrice.toFixed(2)}
                        </Text>
                        <Text color='#84C633' fontSize='15px'>
                            Savings: ₹ {discount.toFixed(2)}
                        </Text>
                    </VStack>
                    <Center>
                        <Link to='/checkout'>
                        <Button bgColor='red.500' fontSize='14px' color='white' padding='0 30px'>
                            Checkout
                        </Button>
                        </Link>
                    </Center>
                </Flex>
            </Box>
            <TableContainer>
            <Table variant='simple'>
                <Thead>
                <Tr>
                    <Th fontSize='16px'>Items</Th>
                    <Th fontSize='16px'>Quantity</Th>
                    <Th isNumeric fontSize='16px'>Sub-total</Th>
                </Tr>
                </Thead>
                <Tbody>
                    {cartProd.map((item,ind) => (
                        <CartItem up={up} setUp={setUp} item={item} key={ind}/>
                    ))}
                </Tbody>
            </Table>
            </TableContainer>
        </Box>
    </>
  )
}

export default Cart