import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Alchemy, Network } from "alchemy-sdk";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

const BlockDetail = () => {
  const blockNumber = parseInt(useParams().blockNumber);
  const [transactions, setTransactions] = useState([]);
  

  useEffect(() => {
    async function getTransactionReceipt() {
      const transactionArray =  (
        await alchemy.core.getBlockWithTransactions(blockNumber)
      ).transactions;
      const transactionHashArray = transactionArray.map((tx) => tx.hash);
      setTransactions(transactionHashArray);
    }

    getTransactionReceipt();
  }, [blockNumber]);

  return (
    <>
      <div className="BlockDetail">
        
        <table>
         <Link to={"/"}  className="link">HOME</Link>
        <h3>Block Number : {blockNumber}</h3>
        <div>
          <tr className="Transactions-text">

          Transactions:
          </tr>
          {transactions?.map((tx) => (
            <tr>

            <Link to={`/transactions/${tx}` } className="link">{tx}</Link>
            </tr>
            
          ))}
        </div>
          </table>
      </div>
    </>
  );
};

export default BlockDetail;
