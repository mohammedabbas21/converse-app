import React, { useState } from 'react'
import { FormControl, FormLabel, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Input, VStack,Button,useToast } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom';
import axios from "axios"

const Signup = () => {
    const [show,setShow] = useState(false)
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [pic, setPic] = useState();
    const [loading,setLoading]=useState(false)
    const toast = useToast()
    const history = useHistory()

    const handleClick = () =>setShow(!show)

    const postDetails = (pics)=>{

            setLoading(true)
            if(pics === undefined){
                toast({
                    title:"Please select an image!",
                    status:"warning",
                    duration: 5000,
                    isClosable:true,
                    position:"bottom"
                })
                return
            }

            if(pics.type === "image/jpeg" || pics.type === "image/png"){
                const data = new FormData()
                data.append("file",pics)
                data.append("upload_preset","converse-app")
                data.append("cloud_name","dc2z4hypm")
                fetch("https://api.cloudinary.com/v1_1/dc2z4hypm/image/upload",{
                    method:"post",
                    body:data
                }).then((res)=>res.json()).then((data)=>{
                    setPic(data.url.toString())
                    console.log(data.url.toString())
                    setLoading(false)
                }).catch((err)=>{
                    console.log(err)
                    setLoading(false)
                })
            }

            else{
                toast({
                    title:"Please upload a jpeg or png",
                    status:"warning",
                    duration: 5000,
                    isClosable:true,
                    position:"bottom"
                })
            }
    }

    const submitHandler = async ()=>{

            setLoading(true)
            if (!name || !email || !password || !confirmpassword){
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

            if(password !== confirmpassword){
                toast({
                    title:"Passwords do not match",
                    status:"warning",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom"
                })
                return;
            }

            try{
                const config={
                    headers:{
                        "Content-type":"application/json"
                    }
                }

                const {data}    = await axios.post("/api/user",{
                    name,email,password,pic
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
                return;
            }
    }

    return (
    <VStack spacing='7px'>
        <FormControl id="first-name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter Your Name" onChange={(e)=>setName(e.target.value)}/>

        </FormControl>

        <FormControl id="email" isRequired>
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

        <FormControl id="password" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
            <Input placeholder="Confirm Password" type={show?"text":"password"} onChange={(e)=>setConfirmpassword(e.target.value)}/>
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" w="sm" onClick={handleClick}>
                    {show?"show": "hide"}

                </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>

        <FormControl id="pic">
            <FormLabel>Upload your picture</FormLabel>
            <Input type="file" p={1.4} accept="image/*" onChange={(e)=>postDetails(e.target.files[0])}/>
        </FormControl>

        <Button colorScheme="blue" width="100%" style={{marginTop:15}} onClick={submitHandler} isLoading={loading}>
            Sign Up
        </Button>

    </VStack>
  )
}

export default Signup