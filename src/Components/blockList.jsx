import React, { useEffect, useState } from 'react'
import Block from './Block';
import { Link } from 'react-router-dom';

const BlockList = ({blockNumber}) => {
 const  [blocks , setBlocks] = useState([]);


  useEffect(()=>{
     const blocksArray = [];
     for (let index = blockNumber  ; index >= blockNumber -10 ; index--) {

        blocksArray.push(index);
        
     }
     setBlocks(blocksArray);

  },[blockNumber]);
  
  
  
  
  
  
  
  
  
  
  
  
  
    return (
    <>
    <div className='BlockList'>

    <Link to={"/"} onClick={() => window.location.reload()}  className='link'>Latest Blocks</Link>
    <ul>

    {
       blocks.map((block)=>(
          <li>

            <Block blockNumber={block} key={block}/>
            </li>
        ))
      }
      </ul>
    
    
    
    </div>
    </>
  )
}

export default BlockList