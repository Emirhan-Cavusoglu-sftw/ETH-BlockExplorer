import React, { useEffect, useState } from 'react'
import Block from './Block';

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