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
        if( !this.props.isLiving && nextProps.isLiving ){
            this.interval = setInterval( () => {
                this.props.livePopulation()
            }, 1000 );
        } 
        if ( this.props.isLiving && !nextProps.isLiving ){
            clearInterval( this.interval ); 
        }
    }

    componentWillUnmount(){
        clearInterval( this.interval ); 
    }

    render(){
        let outputArray = [];
        for ( let y = 0; y < 40; y++ ){
            let innerArray = [];
            for ( let x = 0; x < 80; x++ ){
                const creatureValue = this.props.currentDisplay[ y ][ x ];
                innerArray[ x ] = <Creature key={ x } status={ creatureValue } xLocation={ x * 10 } yLocation={ y * 10 } />
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
