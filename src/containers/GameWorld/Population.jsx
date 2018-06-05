import React from 'react';
import { connect } from 'react-redux'; 
import { livePopulation } from '../../actions/worldActions'; 
import Creature from './Creature'; 

class Population extends React.Component{

    constructor( props ){
        super( props );
        this.state = {
            interval: null
        }
    }

    componentWillReceiveProps( nextProps ){
        console.log( ' in population with component did mount' );
        if( !this.props.isLiving && nextProps.isLiving ){
            this.interval = setInterval( () => {
                console.log( 'in population calling interval' ); 
                this.props.livePopulation()
            }, 1000 );
        } 
        if ( this.props.isLiving && !nextProps.isLiving ){
                console.log( 'in population calling clear interval' ); 
            clearInterval( this.interval ); 
        }
    }

    componentWillUnmount(){
        clearInterval( this.interval ); 
    }

    render(){
        let outputArray = [];
        for ( let k = 0; k < 40; k++ ){
            let innerArray = [];
            for ( let m = 0; m < 80; m++ ){
                const creatureValue = this.props.currentDisplay[ k ][ m ];
                innerArray[ m ] = <Creature key={ m } status={ creatureValue } xLocation={ m * 10 } yLocation={ k * 10 } />
            }
            outputArray.push( innerArray );
        }
        return(
                outputArray 
        )
    }
};

const mapStateToProps = ( state ) => ( {
    currentDisplay: state.world.currentDisplay,
    isLiving: state.world.isLiving
})

export default connect( mapStateToProps, { livePopulation } )( Population );
