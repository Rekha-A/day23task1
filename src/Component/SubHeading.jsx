import { Heading2 } from './Heading2';
import { ShoppingCard } from './ShoppingCard';

export const SubHeading=()=>{
    const shopping=[
        {
          name: "Fancy Product",
          poster:"https://www.jagstore.in/cdn/shop/files/1669372140207_WhatsApp_Image_2022-11-24_at_6.45.44_PM-originnm80prcnt_eaaf79e5-a63c-40c3-b98e-b0161e3d5b9e.webp?v=1684151414",
      
          rating2: "$40.00 - $80.00",
             },
        {
          name: "Special Item",
          poster:"https://m.media-amazon.com/images/I/61xnwhk0RML._SY355_.jpg",
          stars:"⭐⭐⭐⭐⭐",
            rating1: "$20.00",
            rating2:"$18.00",
          },
        {
          name: "Sale Item",
          poster:"https://m.media-amazon.com/images/I/61Nt0b45ZeL._SY606_.jpg",
          rating1: "$50.00",
          rating2:"$25.00",
             
       },
        {
          name: "Popular Item",
          poster:"https://m.media-amazon.com/images/I/71nl43G4oOL._SY695_.jpg",
          stars:"⭐⭐⭐⭐⭐",
          rating2:"$40.00",
          },
        {
          name: "Sale Item",
          poster:"https://m.media-amazon.com/images/I/61+s73-9mgL._SX425_.jpg",
            rating1:"$50.00",
            rating2: "$25.00",
        },
        {
          name: "Fancy Product",
            poster:"https://www.kushals.com/cdn/shop/files/antique-bangle-ruby-gold-2-4-antique-bangle-165065-37682525929628.jpg?v=170963414700&width=730",
            rating2: "$120.00 - $280.00",
          },
        {
          name: "Special Item",
          poster: "https://m.media-amazon.com/images/I/51t4rua1hOL._SX300_SY300_QL70_FMwebp_.jpg",
          stars:"⭐⭐⭐⭐⭐",
          rating1: "$20.00",
          rating2:"$18.00",
          },
        {
          name: "Popular Item",
          poster: "https://m.media-amazon.com/images/I/81MVE5LYO6L._SX679_.jpg",
          stars:"⭐⭐⭐⭐⭐",
          rating2: "$40.00",
          },
      
      ];
    return(
        <>
        <div>
          <Heading2/>
          </div>
  <div className="content" >
  {
        shopping.map((element)=>(<ShoppingCard {...element}/>))
      }
      </div>
         <div class="card-footer text-muted" style={{backgroundColor:"black",height:"100px", textAlign:"center"}}>
         Copyright © Your Website 2023
  </div>
        
        </>
    )
}