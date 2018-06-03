import React from 'react';
import Creature from './Creature'; 

const Population = ( props ) => {
 
    const populationArray = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ];

    let populatedRow = populationArray.map( ( details, index ) => {
        return( 
            <Creature status={ details } xLocation={ index * 10 } yLocation={ 0 } />
        )
    })

    return(
         populatedRow 
    )
};

export default Population;

