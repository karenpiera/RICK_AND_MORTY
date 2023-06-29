import SearchBar from "./SearchBar";
import "./Nav.module.css";


 function NavBar ({onSearch}){

    return (
        
    <div className="nav-container">

    <SearchBar onSearch={onSearch}/>
    </div>
    )
}
export default NavBar;