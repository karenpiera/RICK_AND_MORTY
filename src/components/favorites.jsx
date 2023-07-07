//import { connect } from "react-redux";
import React from "react";
import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { orderFavorites, filterFavorites } from "../redux/actions";

export default function Favorites() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.myFavorito);

  function handleSort(event) {
    dispatch(orderFavorites(event.target.value));
  }

  function handleFilter(event) {
    dispatch(filterFavorites(event.target.value));
  }

  return (
    <div>
      <select placeholder="Gender" onChange={handleFilter}>
        {["Male", "Female", "Unknown", "Genderless"].map((gender) => (
          <option value={gender}>{gender}</option>
        ))}
      </select>

      <select placeholder="Orden" onChange={handleSort}>
        {["Ascendente", "Descendente"].map((order) => (
          <option value={order}>{order}</option>
        ))}
      </select>

      <Cards characters={favorites} />
    </div>
  );
}

///const mapStateProps= (state)=>{
 //   return {
 //       favorites: state.myFavorito
 //   }
//}

//export default connect (mapStateProps, null)(Favorites)