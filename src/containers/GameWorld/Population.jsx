import React from 'react';
import Creature from './Creature'; 

const newRow = () => {
    const newArray = Array( 20 );

    for ( let i = 0; i < newArray.length; i++ ){
        newArray[ i ] = Math.floor( Math.random() * 2 );
    }
    console.log( newArray );
    return newArray;
}

const Population = ( props ) => {

    let outputArray = [];

    const arrayOfRows = Array( 20 );

    for ( let j = 0; j < 20; j++ ){
        arrayOfRows[ j ] = newRow();
    }
 
    for ( let k = 0; k < 20; k++ ){
        let innerArray = [];
        for ( let m = 0; m < 20; m++ ){
            const creatureValue = arrayOfRows[ k ][ m ];
            innerArray[ m ] = <Creature key={ m } status={ creatureValue } xLocation={ m * 10 } yLocation={ k * 10 } />
        }
        outputArray.push( innerArray );
    }

   return(
         outputArray 
    )
};

export default Population;
