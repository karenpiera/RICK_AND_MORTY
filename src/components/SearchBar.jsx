import style from "./search.module.css"
export default function SearchBar(props) {
   const {onSearch}=props
   return (
      <div>
         <input className={style.search} type='search' />
         <button className={style.agregar}onClick={onSearch}>Agregar</button> 
               </div>
   );
}
