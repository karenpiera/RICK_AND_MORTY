import { ADD_FAV, REMOVE_FAV, ORDER, FILTER } from "./actions";

let initialState = {
  myFavorito: [],
  allCharacters: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return { ...state,  myFavorito: action.payload, allCharacters: action.payload };

    case REMOVE_FAV:
      return { ...state,  myFavorito: action.payload};

    case ORDER:
      let ordenados;
      if (action.payload === "Ascendente") {
        ordenados = state.myFavorito.sort((a, b) => (a.id > b.id ? 1 : -1));
      } else {
        ordenados = state.myFavorito.sort((a, b) => (b.id > a.id ? 1 : -1));
      }
      return {
        ...state,
        myFavorito: [...ordenados],
      };

    case FILTER:
      return {
        ...state,
        myFavorito: state.allCharacters.filter(
          (character) => character.gender === action.payload
        ),
      };

    default:
      return state;
  }
}

export default rootReducer;