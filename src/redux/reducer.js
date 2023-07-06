import { ADD_FAV, REMOVE_FAV } from "./actions"

let initialState={myFavorito:[]}

  function rootReducer (state=initialState,action){
switch(action.type){
case ADD_FAV:


return{
    ...state,
    myFavorito:[...state.myFavorito, action.payload]
}

case REMOVE_FAV:
    return {
        ...state,
        myFavorito:state.myFavorito.filter(character=>character.id !== Number(action))
    }


default:
    return{...state}


}
}
export default rootReducer;