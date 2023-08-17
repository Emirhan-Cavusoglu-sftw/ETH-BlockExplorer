import React from "react";
import { Alchemy, Network } from "alchemy-sdk";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const Block = ({ blockNumber }) => {
  const [hash, setHash] = useState();
  const [blockDifficult, setblockDifficult] = useState();
  const [gasUsed, setgasUsed] = useState();

  useEffect(() => {
    async function setBlock() {
      const block = await alchemy.core.getBlock(blockNumber);
      setHash(block.hash);
      setblockDifficult(block.difficulty);
      setgasUsed(block.gasUsed._hex);
    }

    setBlock();
  }, [blockNumber]);

   console.log(hash)
   console.log(gasUsed);
  return (
    <>
    
    <div className="Block">
      
      <table>
        <tr>


        <Link to={`/blockdetail/${blockNumber}`} className="link"> Block Number : {blockNumber}</Link>
        </tr>
      
      
      



        <tr>
        Block Hash : {hash}
        </tr>
        <tr>
        Block Difficulty : {blockDifficult}
        </tr>
        <tr>
        Block gasUsed : {gasUsed} 
        </tr>
      </table>
      
    </div>
    </>
  )
}

export default Block;
