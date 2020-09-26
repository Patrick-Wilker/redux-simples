import {NUM_MINIMO_ALTERADO, NUM_MAXIMO_ALTERADO} from '../actions/actionTypes';


const initialState = {
    min: 1,
    max: 10
}

export default function(state = initialState, action){
    switch(action.type){
        case NUM_MINIMO_ALTERADO:
            return{
                ...state,
                min: action.payload
            }
        case NUM_MAXIMO_ALTERADO:
            return{
                ...state,
                max: action.payload
            }
        default:
            return state;
    }
}