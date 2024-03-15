import { Cart } from "./Cart";
import { useState } from "react";
export const ShoppingCard=({name,poster,stars,rating1,rating2})=>{
    const[like,setLike]=useState(0)

    return(
        <>
       
    
             <div className="card">
                <img src={poster} alt="" className="card-img-top" />
              
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <div className="card-text">
                            <p>{stars}</p>
                            <h3><s>{rating1}</s>  {rating2}</h3>
                            <a href="./cartcount" className="btn btn-primary"
                             onClick={()=>{
                                
                                setLike(like+1)
                                        console.log(like)
                                }}>Add to cart</a>
                                
                        </div>
                    </div>
                   
            </div>
          
           
             
        </>
    )
}