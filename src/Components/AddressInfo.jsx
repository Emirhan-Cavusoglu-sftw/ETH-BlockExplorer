import React, { useEffect, useState } from "react";
import { Alchemy, Network } from "alchemy-sdk";
import { Link, useParams } from "react-router-dom";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

export const AddressInfo = ({ blockNumber }) => {
  const { address } = useParams();
  const [balance, setBalance] = useState();
  const [transactionCount, setTransactionCount] = useState();
  const [addressTx,setaddressTx] = useState([])
  
  
  
  
  
  useEffect(() => {
    async function se() {
      
      
      
      
      const balancee = parseInt((await alchemy.core.getBalance(address))._hex);
      const noncee = await alchemy.core.getTransactionCount(address);
      const addressTransaction = await alchemy.core.getAssetTransfers({
        fromBlock: "0x0",
        fromAddress:"0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045",
        excludeZeroValue: true,
        category: ["external",
        "internal",
        "erc20",
        "erc721",
        "erc1155",
        "specialnft"]
      }).then(response => response.transfers);
      console.log(addressTransaction);
      const hashArray = addressTransaction?.map(tx => tx.hash)
      
      
      
      
      
      setaddressTx(hashArray);
      setBalance(balancee);
      setTransactionCount(noncee);
      
      console.log(addressTx)
      
      
      
    }


    se();
  }, [address]);
  
  
 
 
  return (
    <>
      <div className="AddressInfo">
      <div>

      
      <table>
      <tr>
        <Link to={"/"} className="link"> HOME</Link>
      </tr>
      <tr>
       
     <h2>
     Address: {address}
      </h2> 
         
      </tr>
      <tr>

        <h2>BALANCE:{balance / 10 ** 18 }  ETH</h2>
      </tr>
      
      <tr>

        <h2>NONCE : {transactionCount}</h2>
      </tr>
      
      <tr>

      
        
      </tr>
      </table>
      </div>
      <div  className="Transaction-List">

      <p>TRANSACTIONS</p>
      {
        addressTx?.map(tx =>(
          <Link  to={`/transactions/${tx}`} className="link">{tx}</Link>
          ))
        }
        </div>
      </div>
    </>
  );
};
