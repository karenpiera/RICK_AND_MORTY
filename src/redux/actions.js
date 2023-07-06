

export const ADD_FAV= "ADD_FAV";

export const REMOVE_FAV= "REMOVE_FAV ";


export function  addFavorito(character){

    return {

        type: ADD_FAV,
        payload:character
    }
}

export  function removeFavorito(id){
    return{
        type: REMOVE_FAV,
        payload:id
    }
}
