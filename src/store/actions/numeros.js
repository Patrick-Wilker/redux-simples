import {NUM_MINIMO_ALTERADO, NUM_MAXIMO_ALTERADO} from './actionTypes';

//action creator
export function alterarNumeroMinimo(novoNumero){
    return{
        type: NUM_MINIMO_ALTERADO,
        payload: novoNumero
    }
}

export function alterarNumeroMaximo(novoNumero){
    return{
        type: NUM_MAXIMO_ALTERADO,
        payload: novoNumero
    }
}