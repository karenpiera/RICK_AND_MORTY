import { Link } from "react-router-dom";
import {  connect } from "react-redux";
import { addFavorito,removeFavorito } from "../redux/actions";
import { useState, useEffect } from "react";
import style from "./card.module.css"

 function Card(props) {
   const {character,onClose,addFavorito,removeFavorito,favorites,} = props;
  
   

   const [fav, setFav] = useState(false);
   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === character.id) {
            setFav(true);
         }
      });
   }, [favorites]);

  function handleFavorite(character){

   if(!fav){
     
      addFavorito(character)
       setFav(true)
   } else {
     
      removeFavorito(character)
         setFav(false)
   }
  }

   return (
      <div className={style.cardContainer}>

         <div className={style.imageContainer}>

         <button className={style.closeButton} onClick={()=> {onClose(character.id)} }>X</ button>
         {
   fav ? (
      <button onClick={()=> handleFavorite(character.id) }>❤️</button>
   ) : (
      <button onClick={()=> handleFavorite(character)}>🤍</button>
   )
}
         <h2 className={style.name}>{character.name}</h2>
          <Link to={"/detail/"+character.id} >
         <img className={style.characterImage} src={character.image} alt='' />
         </Link>
        
         </div>
         
         <div className={style.atributes}>

         <h2>{character.species}</h2>
         <h2>{character.gender}</h2>        
          </div>            
      </div>
   );
}


const mapDispathToProps =(dispatch)=>{
   return{
addFavorito:(character)=> dispatch(addFavorito(character)),
removeFavorito: (id)=> dispatch(removeFavorito(id)),
   };
};
const mapStateToProps = (state)=>{

   return{
      favorites:state.myFavorito,
   };
};

export default connect(mapStateToProps,mapDispathToProps)(Card);