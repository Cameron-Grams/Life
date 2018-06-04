export function producePopulation(){
    return{
        type: 'PRODUCE_POPULATION'
    }
}


export function changeLife(){
    return{
        type: 'CHANGE_LIFE_ACTIVITY'
    }
}

export function livePopulation(){
    return{
        type: 'LIVE_POPULATION'
    }
}

let timerId;

export function startPopulationLife( dispatch ){
    return ( dispatch ) => {
        timerId = setInterval( livePopulation(), 1000 );
        dispatch( timerId );
    }
}

export function stopPopulationLife( dispatch ){
    return ( dispatch ) => { 
       dispatch( clearInterval( timerId ) );
    }
}