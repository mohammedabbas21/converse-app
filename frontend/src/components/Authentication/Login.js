import {useToast, Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from "axios"

const Login = () => {
    const [show,setShow] = useState(false)
   
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const toast = useToast()
    const [loading,setLoading] = useState(false)
    const history = useHistory()
    
    const handleClick = () =>setShow(!show)

    

    const submitHandler = async ()=>{

            setLoading(true)
            if ( !email || !password ){
                toast({
                    title:"Please fill all the fields",
                    status:"warning",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom"
                })

                setLoading(false)
                return ;
            }

           

            try{
                const config={
                    headers:{
                        "Content-type":"application/json"
                    }
                }

                const {data}    = await axios.post("/api/user/login",{
                    email,password
                },config)

             localStorage.setItem("userInfo", JSON.stringify(data))
             setLoading(false)
                history.push("/chats")
            }
            catch(error){

                toast({
                    title:"Error occured!",
                    status:"warning",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom"
                })

                setLoading(false)
                return;
            }
    }

     

    return (
    <VStack spacing='7px'>
       

        <FormControl  id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder="Enter Your Email" onChange={(e)=>setEmail(e.target.value)}/>
            
        </FormControl>

        <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input placeholder="Enter Your Password" type={show?"text":"password"} onChange={(e)=>setPassword(e.target.value)}/>
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" w="sm" onClick={handleClick}>
                    {show?"show": "hide"}

                </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        

        <Button  isLoading={loading} colorScheme="blue" width="100%" style={{marginTop:15}} onClick={submitHandler} >
            Login
        </Button>

        <Button variant="solid" colorScheme="red" width="100%" onClick={ ()=>{
            setEmail("guest@example123.com")
            setPassword("123456")
        }}>
            Get Guest User Credentials
        </Button>

    </VStack>
  )
}

export default Login