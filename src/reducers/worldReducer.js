import * as actionType from '../actions/actionTypes';
import produceNewPopulation from '../helpers/produceNewPopulation'; 

const initialState = {
    currentDisplay: [ [ 1, 1 ], [ 1, 1 ]],
    nextDisplay: [],
    isLiving: false,
    generation: 0
}

const World = ( state=initialState, action ) => {
    switch( action.type ){
        case actionType.producePopulation:{
            return{
                ...state,
                currentDisplay: produceNewPopulation()
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