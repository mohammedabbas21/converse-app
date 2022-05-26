import React, { useEffect } from 'react'
import {Container,Box,Text} from '@chakra-ui/react'
import {Tab,Tabs, TabList, TabPanel, TabPanels} from '@chakra-ui/react'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
import { useHistory } from 'react-router-dom'

const Homepage = () => {

  const history = useHistory()

  useEffect(()=>{

      const user = JSON.parse(localStorage.getItem("userInfo"))

      if(user) history.push("/chats")

  },[history])

  return (
    <Container maxW='xl' centerContent >
    <Box 
    d='flex'
    justifyContent="center" p={3} bg={"white"} m="40px 0 15px 0"
    borderRadius="lg" borderWidth="1px" w="100%"
    >
    <Text fontSize="4xl" fontFamily="Work sans" color="black" textAlign="center" >Converse App</Text>
    </Box>

    <Box
     bg="white" w="100%" p={4} borderRadius="lg" color="black" borderWidth="1px"
    >
      <Tabs variant='soft-rounded' colorScheme='blue'>

  <TabList mb="1em">
    <Tab width="50%">Login</Tab>
    <Tab width="50%">Sign up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      <Signup/>
    </TabPanel>
  </TabPanels>
</Tabs>

    </Box>
    </Container>
  )
}

export default Homepage