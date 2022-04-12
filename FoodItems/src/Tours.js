import React from "react"
import Tour from "./Tour"

const Tours = ({tours,removeTour}) =>{
    return(
        <>
        <h1>Our Tours</h1>
        <div className="underline"></div>
        <div className="main">

            {
                tours.map((tour)=>{
                    return <Tour key={tour.id} {...tour} removeTour={removeTour}/>
                })
            }
        </div>
        </>
    )
}
export default Tours