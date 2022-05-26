
// import React, { useContext, useEffect, useState } from 'react'

// import { Box } from '@chakra-ui/react'
// import { ChatState } from "../Context/ChatProvider"
// import SideDrawer from '../misc/SideDrawer';
// import MyChats from '../misc/MyChats';
// import ChatBox from './ChatBox';
// // import { ChatContext } from '../Context/ChatProvider';

// const Chatpage = () => {

//     const { user }  = ChatState();

//     // const {user} = useContext(ChatContext)
    
   


//   return (
//     <div style={{width: "100%"}}>
//       {user && <SideDrawer/>}
//       <Box display="flex" 
//         justifyContent="space-between"
      
//         w="100%"
//         h="91.5vh"
//         p="10px"
//       >
//         {user && <MyChats/>}
//         {user && <ChatBox/>}

//       </Box>

       
//     </div>
//   )
// }

// export default Chatpage

import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "./ChatBox";
import MyChats from "../misc/MyChats";
import SideDrawer from "../misc/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;