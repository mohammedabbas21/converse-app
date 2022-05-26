
import './App.css';

import Homepage from './Pages/Homepage';
import Chatpage from './Pages/Chatpage';
import {Route, Router} from 'react-router-dom';
 
function App() {
  return (
    <div className="App">
     
        <Route path='/' exact component={Homepage}/>
        <Route path='/chats' exact component={Chatpage}/>      
   
    </div>
  );
}

export default App;
