import React from 'react';
import Population from './Population'; 
import './GameWorld.css'; 

const GameWorld = ( props ) => {
    return(
        <div className="css-gameWorldOuterDiv">
          <div className="css-gameWorldInnerDiv" >
            <svg width="800px" height="400px" viewBox=" 0 0 800 400" >
                <rect x="0" y="0" width="800" height="400" fill="#5b5a68" />
                <Population />
            </svg>
          </div>
        </div>
    )
};

export default GameWorld;