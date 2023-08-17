import React, { useEffect, useState } from "react";
import { Alchemy, Network } from "alchemy-sdk";
import { Link, useParams } from "react-router-dom";


const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
  };
  
  const alchemy = new Alchemy(settings);


const TransactionDetail = () => {
   const[from , setFrom] = useState();
   const [to , setTo] = useState();
   const {txHash} = useParams();
   console.log(txHash);
   
   useEffect(()=>{
      async function   getTransactionReceipt() {
         const transactionReceipt = await  alchemy.core.getTransactionReceipt(txHash);
         setFrom(transactionReceipt.from);
         setTo(transactionReceipt.to);

      }

      getTransactionReceipt();
   },[txHash])
  
  
    return (
    <div className="Transaction-Detail">
       
       <Link to={"/"} className="link">HOME</Link>

       <h1>From:</h1>
       <h3> <Link to={`/addressInfo/${from}`} className="link"> {from} </Link> </h3>
       
       
       <h1>To:</h1>
       <h3> <Link to={`/addressInfo/${to}`} className="link"> {to} </Link> </h3>
       


    </div>
  )
}

export default TransactionDetail