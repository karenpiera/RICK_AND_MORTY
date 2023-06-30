import './App.css';
import NavBar from './components/NavBar';
import axios from 'axios';
import Cards from './components/Cards.jsx';
import { useState } from 'react';



function App() {
const [characters,setCharacters] = useState([]);



function searchHandler (id){

   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   }) .catch(error=>alert("No se encontró el ID!!!"));
}

const onClose = (id)=>{
   const characterFilter = characters.filter(character=>character.id !== Number(id));
    //setCharacters([...characters, characterFilter])
   setCharacters(characterFilter)
}

   return (
      <div className='App'>
         <NavBar onSearch={searchHandler}/>
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
