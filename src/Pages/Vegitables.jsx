import { Box, Button, Center, Flex, Grid, Image, Select, Tag, Text, Tooltip, Spinner  } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ReCar from '../Components/ReCar'
import Product from '../Components/Product';
import { getPosts } from '../Redux/app/action';
import { Pagination } from "@mui/material";

const Vegitables = () => {
    const veg = ['veg',1,2,3,4,5,6,7]

    const [up,setUp] = useState(1)
    const [page,setPage] = useState(1)
    const [sor,setSor] = useState(null)
    const [ord,setOrd] = useState(null)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts(page,sor,ord))
    },[page,sor,ord])

    const products = useSelector((state) => state.app.data)
    const loading = useSelector((state) => state.app.loading)
    console.log(products)

    const handleChange = (event, value) => {
        setPage(value);
      };
     
      const handleSel = (e) => {
        const selected = e.target.value
        if(selected === 'option1')
        {
            setSor(null)
            setOrd(null)
            setPage(1)
        }
        if(selected === 'option2')
        {
            setSor('price')
            setOrd('asc')
            setPage(1)
        }
        if(selected === 'option3')
        {
            setSor('price')
            setOrd('desc')
            setPage(1)
        }
        if(selected === 'option4')
        {
            setSor('str_price')
            setOrd('asc')
            setPage(1)
        }
        if(selected === 'option5')
        {
            setSor('str_price')
            setOrd('desc')
            setPage(1)
        }
      }

  return (
    <>
    <Box backgroundColor='#F6F7F6'>
        <Box width='72%' margin='auto' borderRadius='20px' boxShadow='lg' >
            <ReCar arr={veg}/>
        </Box>
        <Box width='72%' margin='10px auto'>
            <Image src='fnv.webp'/>
        </Box>
        <Box width='72%' margin='10px auto'>
            <Flex>
                <Text fontSize='22px'>
                    Fruits & Vegitables
                </Text>
            </Flex>
            <Flex direction='row-reverse' padding='20px 0' borderBottom='1px dashed grey'>
                <Select onChange={handleSel} width='300px' backgroundColor='white'>
                    <option value='option1'>Relevance</option>
                    <option value='option2'>Pice - Low to High</option>
                    <option value='option3'>Pice - High to Low</option>
                    <option value='option4'>Rupee Saving - Low to High</option>
                    <option value='option5'>Rupee Saving - High to Low</option>
                </Select>
            </Flex>
        </Box>
        <Box width='72%' margin='10px auto'>
            {loading ? <><Box padding='100px'><Center><Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='blue.500' size='xl'/></Center></Box></> : 
            <>
            <Grid templateColumns='repeat(4, 1fr)' gap={6}>
                {products.map((item,ind) => (
                    <Product up={up} setUp={setUp} item={item} key={ind}/>
                ))}
            </Grid>
            <Box padding='10px' marginBottom='30px'>
                <Center>
                    <Pagination count={3} page={page} onChange={handleChange} />
                </Center>
            </Box>
            </>}
        </Box>
    </Box>
    </>
  )
}

export default Vegitables