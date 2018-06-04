import React from 'react'; 
import { connect } from 'react-redux'; 
import { changeLife, producePopulation, livePopulation } from '../../actions/worldActions'; 
import './Header.css'; 

const Header = ( props ) => {
    const start = () => console.log( 'start' );
    const stopCount = () => console.log( 'stop' );
    
    const controlGame = props.world.isLiving ? <h4 onClick={ start } className="css-stopButton">Stop</h4>  
        : <h4 onClick={ stopCount } className="css-startButton">Start</h4>;

    const controlGameState = () => {
        props.changeLife();
        console.log( "clicked game control" );
    }

    const resetGameWorld = () => {
        props.producePopulation();
        console.log( "clicked reset" );
    }

    return(
        <div className="css-mainHeader" >
            <div className={ `css-headerDivision css-title` } ><h3>Game of Life</h3></div>
            <div className={ `css-headerDivision css-title` } ><h4>Generation: { props.world.generation }</h4></div>
            <div className={ `css-headerDivision css-activeLink ` } onClick={ controlGameState } >{ controlGame }</div>
            <div className={ `css-headerDivision css-activeLink` } onClick={ resetGameWorld } ><h4 className="css-resetButton">Reset</h4></div>
        </div>
    )
}

const mapStateToProps = ( state ) => ({
    world: state.world
})

export default connect( mapStateToProps, { changeLife, producePopulation, livePopulation } )( Header );
