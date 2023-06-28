import style from "./card.module.css"

export default function Card({name,status,species,gender,origin,image,onClose}) {
   return (
      <div className={style.cardContainer}>

         <div className={style.imageContainer}>

         <button className={style.closeButton} onClick={onClose}>X</ button>
         <h2 className={style.name}>{name}</h2>
         <img className={style.characterImage} src={image} alt='' />
         </div>
         
         <div className={style.atributes}>

         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{status}</h2>         
         <h2>{origin}</h2>

          </div>     
          
      </div>
   );
}

