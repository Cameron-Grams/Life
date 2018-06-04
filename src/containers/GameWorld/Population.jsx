import React from 'react';
import { connect } from 'react-redux'; 
import { livePopulation } from '../../actions/worldActions'; 
import Creature from './Creature'; 



const Population = ( props ) => {

    let outputArray = [];
 
    for ( let k = 0; k < 60; k++ ){
        let innerArray = [];
        for ( let m = 0; m < 60; m++ ){
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

export default connect( mapStateToProps, { livePopulation } )( Population );
