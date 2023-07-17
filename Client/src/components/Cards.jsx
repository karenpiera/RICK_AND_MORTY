import style from "./cards.module.css";
import Card from './Card';

export default function Cards(props) {
   const {characters, onClose} = props
   return (
   <div className={style.cardList}>
   {  characters?.map((character)=> (
      <Card  key={character.id} character={character} onClose={onClose}  />
      ))}            
   </div>
   );
      }