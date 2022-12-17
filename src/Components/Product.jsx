import React, { useEffect } from 'react'
import { Box, Button, Center, Flex, Grid, Image, Select, Tag, Text, Tooltip } from '@chakra-ui/react'
import { MdOutlineDeliveryDining } from "react-icons/md";
import { Icon } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { addTocart, getCart } from '../Redux/cart/action';

const Product = ({up,setUp,item}) => {
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        addTocart(({
            item,
            dispatch
        })).then(()=>  dispatch(getCart()))
    }

  return (
    <>
        <Box boxShadow='md' backgroundColor='white' borderRadius='10px' padding='8px'>
            <Box border='1px solid #EEEEEE' borderRadius='9px'>
                <Flex sx={{position: 'absolute'}}  >
                    <Box padding='5px 8px' fontSize='12px' color='white' background={'#476E01'} borderTopLeftRadius={'10px'} borderBottomRightRadius={'10px'}>
                        {item.discount}% OFF
                    </Box>
                </Flex>
                <Image borderRadius='9px' src={item.img_url}/>
            </Box>
            <Flex direction='row-reverse'>
                <Tooltip fontSize='10px' label='Get it in 5 hrs'>
                    <Box p='1'>
                        <Tag >
                            <Icon as={MdOutlineDeliveryDining} fontSize='16px' color='grey'/>&nbsp;
                            <Text sx={{fontSize: '12px'}} color='grey'>5 hrs</Text>
                        </Tag>
                    </Box>
                </Tooltip>
            </Flex>
            <Flex>
                <Text color='grey' fontSize='13px'>
                    Fresho
                </Text>
            </Flex>
            <Flex>
                <Box width='200px' height='50px'>
                <Text fontSize='15px' noOfLines={2}>
                    {item.name}
                </Text>
                </Box>
            </Flex>
            <Box border='1px solid #EEEEEE' color='grey' padding='5px' borderRadius='5px' fontSize='13px'>
                {item.quantity}
            </Box>
            <Flex margin='4px 0'>
                <Text fontSize='14px' fontWeight='bold' color='black'>
                    ₹{item.price}
                </Text>&nbsp;
                <Text fontSize='10px' textDecoration='line-through' color='grey'>
                    ₹{item.str_price}
                </Text>
            </Flex>
            <Button onClick={handleAddToCart} variant='outline' colorScheme='red' width='100%' marginTop='10px'>
                Add
            </Button>
        </Box>
    </>
  )
}

export default Product