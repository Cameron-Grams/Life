import React from 'react';
import { connect } from 'react-redux'; 
import Creature from './Creature'; 



const Population = ( props ) => {

    let outputArray = [];
 
    for ( let k = 0; k < 20; k++ ){
        let innerArray = [];
        for ( let m = 0; m < 20; m++ ){
            const creatureValue = props.world.currentDisplay[ k ][ m ];
            innerArray[ m ] = <Creature key={ m } status={ creatureValue } xLocation={ m * 10 } yLocation={ k * 10 } />
        }
        outputArray.push( innerArray );
    }

   return(
         outputArray 
    )
};

const mapStateToProps = ( state ) => ( {
    world: state.world
})

export default connect( mapStateToProps, {} )( Population );
