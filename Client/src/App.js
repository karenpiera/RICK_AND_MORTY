import './App.css';
import NavBar from './components/NavBar';
import axios from 'axios';
import Cards from './components/Cards.jsx';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/about';
import Detail from './components/detail';
import Formulario from './components/formulario';
import Favorites from './components/favorites';

function App() {
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = '1Password';

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate('/');
  }, [access]);


function searchHandler (id){
   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   }).catch(error=>alert("No se encontró el ID!!!"));
}

const onClose = (id)=>{
   const characterFilter = characters.filter(character=>character.id !== Number(id));
    //setCharacters([...characters, characterFilter])
   setCharacters(characterFilter)
}

function randomHandler (){

   let haveIt=[];
   let random= (Math.random()*826).toFixed();
   random= Number(random);
   if (!haveIt.includes(random)){
      haveIt.push(random);
      fetch(`https://rickandmortyapi.com/api/character/${random}`)
      .then((response) => response.json())
      .then((data) => {
            if (data.name) {
                setCharacters ((oldChars) => [...oldChars, data]);
            } else {

               window.alert("No hay personajes con ese ID");
            }
   });
 }  else {

   console.log("Ya agregaste todos los personajes"); return false;
 }
}
   

   return (
      
      <div className='App'>
         {
            location.pathname !== '/'&& <NavBar onSearch={searchHandler} random={randomHandler} />
            
         }
         
          
<Routes>

   <Route path='/' element={<Formulario login={login} />}  />
   <Route path='/home' element={<Cards characters={characters} onClose={onClose} /> }/>

   <Route path='/detail/:id' element={<Detail/>}  />
   <Route path='/favorites'  element={<Favorites/>}/>

   <Route path='/about' element={<About/>} />
   

</Routes>

      </div>
      
     
   );
}

export default App;
