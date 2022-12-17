import { Box, Button, Center, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { getAuthChecked } from '../Redux/auth/action'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [show, setShow] = React.useState(false)

    const [email, setEmail] = React.useState('')
    const handleEmail = (event) => setEmail(event.target.value)
    const [password, setPassword] = React.useState('')
    const handlePassword = (event) => setPassword(event.target.value)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
        dispatch(
            getAuthChecked({
                email,
                password
            })
        ).then(() => {
            navigate("/cart", { replace: true })
        })
    }

    const handleClick = () => setShow(!show)
  return (
    <>
        <Center>
            <Box padding='50px' width='350px' boxShadow='md' borderRadius='5px' marginTop='50px'>
                <VStack gap={6}>
                    <Input  
                        value={email}
                        onChange={handleEmail} 
                        variant='flushed' 
                        placeholder='Enter email' 
                    />
                    <InputGroup size='md'>
                        <Input
                            value={password}
                            onChange={handlePassword}
                            variant='flushed'
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                        />
                        <InputRightElement width='4.5rem'>
                            <Button  size='sm' onClick={handleClick}>
                            {show ? <ViewIcon fontSize='12px' color='red.400'/> : <ViewOffIcon fontSize='12px' color='green.400'/>}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </VStack>
                <Button onClick={handleSubmit} bgColor='#9ACC50' color='white' fontSize='14px' width='100%' marginTop='100px'>
                    Login
                </Button>
            </Box>
            
        </Center>
    </>
  )
}

export default Login