import React from 'react'; 
import './Header.css'; 

const Header = ( props ) => {
    
    const controlGame = <h4 className="css-startButton">Start</h4>;

    const controlGameState = () => {
        console.log( "clicked game control" );
    }

    const resetGameWorld = () => {
        console.log( "clicked reset" );
    }

    return(
        <div className="css-mainHeader" >
            <div className={ `css-headerDivision css-title` } ><h3>Game of Life</h3></div>
            <div className={ `css-headerDivision css-title` } ><h4>Generation:</h4></div>
            <div className={ `css-headerDivision css-activeLink ` } onClick={ controlGameState } >{ controlGame }</div>
            <div className={ `css-headerDivision css-activeLink` } onClick={ resetGameWorld } ><h4 className="css-resetButton">Reset</h4></div>
        </div>
    )

}

export default Header;
