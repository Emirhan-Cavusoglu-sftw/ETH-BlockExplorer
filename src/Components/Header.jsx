import React, { useEffect, useState } from "react";
import { Link , useNavigate } from 'react-router-dom'
import { Alchemy, Network } from "alchemy-sdk";

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };
  
  const alchemy = new Alchemy(settings);

const Header = () => {
    const [searchTerm , setSearchTerm] = useState();
    const navigate = useNavigate();
    
      
    const searchAddress = (search)=>{
       if ((search.length === 64) || search.length === 66  ) {
            navigate(`/transactions/${search}`)
       }
       else if (search.length === 42 || search.length === 40)
       navigate(`/addressInfo/${search}`)
       else{
        navigate(`/notFound`);
       }
    } 
  

  
  
  
  
    return (
    <>
    <div className="Header-Wrapper">
       
       

       <h1 className="logo">E.Ç BLOCKEXPLORER</h1>
       
       
       <div className="searchBar">

        <input placeholder="search address "  onChange={(e) => setSearchTerm(e.target.value)}/>
        <button  onClick={()=>searchAddress(searchTerm)}>Search</button>
       </div>
       

    </div>
    </>
  )
}

export default Header