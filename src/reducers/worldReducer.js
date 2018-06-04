import * as actionType from '../actions/actionTypes';
import produceNewPopulation from '../helpers/produceNewPopulation'; 
import evaluatePopulation from '../helpers/evaluatePopulation'; 

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
                generation: 0,
                currentDisplay: produceNewPopulation()
            }
        }
        case actionType.changeLife:{
            return{
                ...state,
                isLiving: !state.isLiving
            }
        }

        case actionType.livePopulation:{
            let newDisplay = evaluatePopulation( state.currentDisplay );

            return{
                ...state,
                currentDisplay: newDisplay,
                generation: state.generation + 1
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