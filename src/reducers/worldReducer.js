import * as actionType from '../actions/actionTypes';


const initialState = {
    currentDisplay: [],
    nextDisplay: []
}

const World = ( state=initialState, action ) => {
    switch( action.type ){
        case actionType.producePopulation:{
            return{
                ...state
            }
        }
        default:{
            return{
                ...state
            }
        }
    }
}

export default World;