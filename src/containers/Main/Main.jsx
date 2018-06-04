import React from 'react';
import { connect } from 'react-redux'; 
import { producePopulation } from '../../actions/worldActions'; 
import Aux from '../../helpers/Aux';
import Header from '../Header/Header'; 
import GameWorld from '../GameWorld/GameWorld';

class Main extends React.Component{

    componentWillMount(){
        this.props.producePopulation();
    }

    render(){
        return(
            <Aux>
                <Header /> 
                <GameWorld />
            </Aux>
        )
    }
}

const mapStateToProps = ( state ) => ( {
    world: state.world
})

export default connect( mapStateToProps, { producePopulation } )( Main ); 