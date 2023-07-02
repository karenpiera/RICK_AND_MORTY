import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

 function NavBar ({onSearch,random}){

    return (
       
    <div className="nav-container">
        <div>
            <Link to="/about" > About</Link>
            <Link to="/home" >Home </Link>

        </div>

    <SearchBar onSearch={onSearch}/>
    <button  className={style.random} onClick={random}> Random </button>
    </div>
    
    )
}
export default NavBar;
