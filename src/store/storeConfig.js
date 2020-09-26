import {createStore, combineReducers} from 'redux';

const reducers = combineReducers({
    numeros: function(state, action){
        switch(action.type){
            case 'NUM_MINIMO_ALTERADO':
                return{
                    ...state,
                    min: action.payload
                }
            case 'NUM_MAXIMO_ALTERADO':
                return{
                    ...state,
                    max: action.payload
                }
            default:
                return {
                    min: 7,
                    max: 31
                }
        }
    },
    nomes: function(state, action){
        console.log('Reducer de nomes chamado...')
        console.log(state, ' ', action)
        return[
            'Ana', 
            'Bia', 
            'Carlos'
        ]
    }
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig