import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import "./Nav.module.css";


 function NavBar ({onSearch}){

    return (
       
    <div className="nav-container">
        <div>
            <Link to="/about" > About</Link>
            <Link to="/home" >Home </Link>


        </div>

    <SearchBar onSearch={onSearch}/>
    </div>
    
    )
}
export default NavBar;