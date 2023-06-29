import style from "./card.module.css"

export default function Card(props) {
   const {character, onClose} = props;
   return (
      <div className={style.cardContainer}>

         <div className={style.imageContainer}>

         <button className={style.closeButton} onClick={()=> {onClose(character.id)} }>X</ button>
         <h2 className={style.name}>{character.name}</h2>
         <img className={style.characterImage} src={character.image} alt='' />
         </div>
         
         <div className={style.atributes}>

         <h2>{character.species}</h2>
         <h2>{character.gender}</h2>        
          </div>            
      </div>
   );
}

