import { Box, Center, Flex, HStack, Image, List, ListItem, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Icon } from '@chakra-ui/react'
import { BsTelephone } from 'react-icons/bs' 
import { IoIosPin, IoIosBasket } from "react-icons/io"; 
import { FiUser } from "react-icons/fi";
import { ChevronDownIcon, Search2Icon } from '@chakra-ui/icons'
import { Button, Popover } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const [it,setIt] = useState(0)
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const items = useSelector((state) => state.cart.data)
    // const tot = items.length

    useEffect(() => {
        var tot = items.length
        setIt((prev)=> prev=tot)
    },[items,setIt])

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const isAuth = useSelector((state) => state.auth.isAuth)

  return (
    <>
    <Box sx={{position: 'sticky', top: 0, width: '100%', zIndex: 2}}>
        <Box backgroundColor='white'>
            <Flex gap="6" direction='row-reverse' width='70%' margin='0 auto' fontSize='13px' color='#4A4A4A'>
                <Center>
                    <Icon as={FiUser} /> &nbsp; {isAuth ? 'User':<Link to='/login'>Login</Link>}
                </Center>
                <Center>
                    <Icon as={IoIosPin} /> &nbsp; Bangalore
                </Center>
                <Center>
                    <Icon as={BsTelephone} /> &nbsp; 1860 123 1000
                </Center>
            </Flex>
        </Box>
        <Box padding='5px' borderBottom='3px solid #FAFAFA' backgroundColor='white' marginBottom='30px'>
            <Flex  gap="6" width='72%' margin='0 auto' fontSize='13px' color='#4A4A4A' justifyContent={'space-between'}>
                <Center>
                    <Link to='/'>
                        <Image src='https://www.bbassets.com/static/v2557/custPage/build/content/img/bb-icon.png'/>
                    </Link>
                    <Button aria-describedby={id} onMouseMove={handleClick}>
                        SHOP <ChevronDownIcon/>
                    </Button>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                    >
                        <Box onMouseLeave={handleClose} sx={{ p: 2 }}>
                            <Flex boxShadow='md' fontSize='14px'>
                                <List>
                                    <ListItem>
                                        <Link to='/fruits-and-vegitables'>
                                            <Box p={1} borderBottom='2px solid #FAF4F8' width='200px'>
                                                Fruit & Vegitables
                                            </Box>
                                        </Link>
                                    </ListItem>
                                    <ListItem>
                                        <Box p={1} borderBottom='2px solid #FAF4F8' width='200px'>
                                            Foodgrains, Oil & Masala
                                        </Box>
                                    </ListItem>
                                    <ListItem>
                                        <Box p={1} borderBottom='2px solid #FAF4F8' width='200px'>
                                            Bakery, Cakes & Dairy
                                        </Box>
                                    </ListItem>
                                    <ListItem>
                                        <Box p={1} borderBottom='2px solid #FAF4F8' width='200px'>
                                            Beverages
                                        </Box>
                                    </ListItem>
                                    <ListItem>
                                        <Box p={1} borderBottom='2px solid #FAF4F8' width='200px'>
                                        Snacks & Branded Foods
                                        </Box>
                                    </ListItem>
                                    <ListItem>
                                        <Box p={1} borderBottom='2px solid #FAF4F8' width='200px'>
                                        Beauty & Hygiene
                                        </Box>
                                    </ListItem>
                                    <ListItem>
                                        <Box p={1} borderBottom='2px solid #FAF4F8' width='200px'>
                                        Cleaning & Household
                                        </Box>
                                    </ListItem>
                                    <ListItem>
                                        <Box p={1} borderBottom='2px solid #FAF4F8' width='200px'>
                                        Eggs, Meat & Fish
                                        </Box>
                                    </ListItem>
                                    <ListItem>
                                        <Box p={1} borderBottom='2px solid #FAF4F8' width='200px'>
                                        Gourmet & World Food
                                        </Box>
                                    </ListItem>
                                    <ListItem>
                                        <Box p={1} borderBottom='2px solid #FAF4F8' width='200px'>
                                        Baby Care
                                        </Box>
                                    </ListItem>
                                    <ListItem>
                                        <Box p={1} borderBottom='2px solid #FAF4F8' width='200px'>
                                        View All
                                        </Box>
                                    </ListItem>
                                </List>
                            </Flex>
                        </Box>
                    </Popover>
                </Center>
                <Center width='50%'> 
                    <input style={{border: '1px solid gray', padding: '5px 20px', outline: 'none', width: '100%'}} placeholder='Search for Products..'/>
                    <button style={{padding: '4px 8px', backgroundColor: '#82C024', color: 'white'}}>
                        <Search2Icon w={6} h={6}/>
                    </button>
                </Center>
                <Center>
                    <Link to='/cart'>
                    <Box backgroundColor='#F3F2F3' height='95%' padding='5px 15px'>
                        <HStack>
                            <Center>
                                <Icon as={IoIosBasket} w={8} h={8} color='#DB241D'/>
                            </Center>
                            <Box>
                            <VStack>
                                <Box fontWeight='bold'>
                                    {it} items
                                </Box>
                            </VStack>
                            </Box>
                        </HStack>
                    </Box>
                    </Link>
                </Center>
            </Flex>
        </Box>
    </Box>
    </>
  )
}

export default Navbar