import React from "react";
const Catagories = ({allCatagories,filterItems}) =>{
    return(
        <div className="btn">
           {allCatagories.map((catagory,index)=>{
               return(
               <button onClick={()=>{
                filterItems(catagory);
               }}>{catagory}</button>
               )
           })}
        </div>
    )
}
export default Catagories