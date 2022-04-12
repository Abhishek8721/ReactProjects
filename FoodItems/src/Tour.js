import React, { useState } from "react"
const Tour = ({id,name,desc,image,removeTour}) =>{
    const [readMore,setReadMore] = useState(false);
   return(
    <>
    <div className="container">
    <img src={image} alt={name} />
    <h4>{name}</h4>
    <p className="desc">{readMore? desc : `${desc.substring(0,200)}...`}
    <button className="btn3" onClick={()=> setReadMore(!readMore)}>{readMore ? 'show less' : 'show more'}</button>
    </p>
    <div className="btn">
    <button className="btn2" onClick={()=>{
        removeTour(id)
    }}>Not Interested</button>
    </div>
    
    </div>
    </>

   ) 
    
}
export default Tour