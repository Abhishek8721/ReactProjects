import React from "react";
const Food = ({item}) =>{

return(
<>
{item.map((foods)=>{
     const {id,name,desc,image,catagory,price} = foods;
    return(
    <div className="fooditem">
        <img src={image} />
        <div className="title">
            <div className="name"> 
            <h4>{name}</h4>
            <p className="cat">${price}</p>
            </div>
       
        <p>{desc}</p>
        </div>
    </div>
        
    )
})}
</>
)

}
export default Food;