import React from 'react'
import { Box, Button, Center, Flex, Image, Text, VStack } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import {Tr,Td} from '@chakra-ui/react'
import { deleteFromcart, patchcart } from '../Redux/cart/action'
import { useDispatch } from 'react-redux'

const CartItem = ({up,setUp,item}) => {
    const dispatch = useDispatch()

    const handlePatchCartAdd = () => {
        const id = item.id
        const num = item.nos + 1
        patchcart(({
            id,
            num,
            dispatch
        })).then(() => setUp(prev => prev+1))
    }

    const handlePatchCartSub = () => {
        if(item.nos > 1){
            const id = item.id
            const num = item.nos - 1
            patchcart(({
                id,
                num,
                dispatch
            })).then(() => setUp(prev => prev+1))
        }
        else {
            handleDeleteItem()
        }
    }

    const handleDeleteItem = () => {
        const id = item.id
        deleteFromcart(({id, dispatch}))
        .then(() => setUp(prev => prev+1))
    }

  return (
    <>
        <Tr>
            <Td width='65%'>
                <Flex gap={4}>
                    <Image width='16%' borderRadius='5px' src={item.img_url}/>
                    <Center>
                        <Text fontSize='15px'>
                            {item.name}
                        </Text>
                    </Center>
                </Flex>
            </Td>
            <Td>
                <Flex>
                    <Flex justifyContent='space-between' width='120px' border='1px solid grey' borderRadius='5px'>
                        <Button onClick={handlePatchCartSub} fontSize='24px' padding='5px 5px'>-</Button>
                        <Center>
                            <Text>{item.nos}</Text>
                        </Center>
                        <Button onClick={handlePatchCartAdd} fontSize='24px' padding='5px 5px'>+</Button>
                    </Flex>
                    <Center padding='0 8px'>
                    <Button onClick={handleDeleteItem} fontSize='18px' padding='5px' colorScheme={'red'}>
                        <DeleteIcon/>
                    </Button>
                    </Center>
                </Flex>
            </Td>
            <Td isNumeric>
                <Box>
                    <Text fontSize='18px' fontWeight='bold' color='black'>
                        ₹{item.nos*item.price}
                    </Text>
                    <Text fontSize='10px' textDecoration='line-through' color='grey'>
                        ₹{item.nos*item.str_price}
                    </Text>
                </Box>
            </Td>
        </Tr>
    </>
  )
}

export default CartItem