import React from "react";
import CardDescription from "./CardDescription";

const CardTitle:React.FC = () =>{
    return(
        <div className="cardInfo"> 
           <h2>Action Drama</h2>
           <CardDescription/>
        </div>
    )
}

export default CardTitle;