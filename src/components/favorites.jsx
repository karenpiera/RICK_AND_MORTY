import { connect } from "react-redux";
import Cards from "./Cards";

function Favorites ({favorites}){

    return(
<div>
   <Cards  characters={favorites} /> 
</div>

    );
}

const mapStateProps= (state)=>{
    return {
        favorites: state.myFavorito
    }
}

export default connect (mapStateProps, null)(Favorites)