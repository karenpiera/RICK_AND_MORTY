import { useState } from "react";
import style from "./search.module.css"
export default function SearchBar(props) {
   const {onSearch}=props;
   const[id,setId]= useState("")

 function changeHandler(e){
   e.preventDefault();
      let input=e.target.value;
      setId(input);
   }

   

   return (
      <div>
         <input className={style.search} type='search' value={id} onChange={changeHandler} />
         <button className={style.agregar} onClick={()=> onSearch(id) }>Agregar</button> 
               </div>
   );
}
