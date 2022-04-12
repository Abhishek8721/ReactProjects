import logo from './logo.svg';
import './App.css';
import data from './data'
import Food from './Food'
import Catagories from './Catagories';
import { useState } from 'react';
const allCatagories = ['All', ...new Set(data.map((item)=>item.catagory))];
console.log(allCatagories)
function App() {
 const [food,setFood] = useState(data);
 const [catagory,setCatagory] = useState(allCatagories);
 const filterItems = (catagory) =>{
   if(catagory==='All')
   {
     setFood(data);
     return;
   }
   const newItems = data.filter((item)=>item.catagory === catagory)
   
   setFood(newItems);
   
 }
  
 return(
  <>
  <h1>Food Items</h1>
    <Catagories allCatagories={allCatagories} filterItems={filterItems}/>
    <div className='container'>
     <Food item={food} /> 
    </div>
  </>

 )
    
  
}

export default App;
