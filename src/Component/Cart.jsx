
import { useState } from "react";

export const Cart=(Like)=>{

const[like,setLike]=useState(0)
const[disLike,setDisLike]=useState(0)
return(
   <>

        <button className="col-2" style={{justifyContent:"space-between"}} 
                                onClick={()=>{
                                                setLike(like+1)
                          
                                }}
                                >🛒 Cart {like} </button>
        
</>

        )
}
