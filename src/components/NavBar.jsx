import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

 function NavBar ({onSearch,random}){

    return (
       
    <div >
  <Link to="/about" className={style.about}>
  <span >About</span>
</Link>

<Link to="/home" className={style.about} >
  <span>Home</span>
</Link>
       

    <SearchBar onSearch={onSearch}/>
    <button  className={style.random} onClick={random}> Random </button>
    </div>
    
    )
}
export default NavBar;
