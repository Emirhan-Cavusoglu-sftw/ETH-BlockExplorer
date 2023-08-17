import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';
import BlockList from './Components/blockList';
import {  Router, Route, NavLink, Routes,Link } from 'react-router-dom'
import BlockDetail from './Components/BlockDetail';
import TransactionDetail from './Components/TransactionDetail';
import Header from './Components/Header';
import { AddressInfo } from './Components/AddressInfo';


import './App.css';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);



const App = () => {
  const [blockNumber, setBlockNumber] = useState();
  
  
    
    
  
  
  
    useEffect(() => {
      async function getBlockNumber() {
        setBlockNumber(await alchemy.core.getBlockNumber());
      }
  
      getBlockNumber();
       
    },[]);
  

  return (
  <>
  
  <div className='App'>
       <Header></Header>
      <Routes>

      <Route path='/' element={<BlockList blockNumber={blockNumber}></BlockList>}></Route>
      <Route path='/blockdetail/:blockNumber' element={<BlockDetail></BlockDetail>}></Route>
      <Route path='/transactions/:txHash' element={<TransactionDetail></TransactionDetail>}></Route>
      <Route path='/addressInfo/:address' element={<AddressInfo blockNumber={blockNumber}></AddressInfo>} ></Route>

      
      </Routes>
    
  </div>
    
  </>
    );
}

export default App;
