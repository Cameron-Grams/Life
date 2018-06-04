import React from 'react';
import Population from './Population'; 
import './GameWorld.css'; 

const GameWorld = ( props ) => {
    return(
        <div className="css-gameWorldOuterDiv">
          <div className="css-gameWorldInnerDiv" >
            <svg width="600px" height="400px" viewBox=" 0 0 600 400" >
                <rect x="0" y="0" width="600" height="400" fill="#5b5a68" />
                <Population />
            </svg>
          </div>
        </div>
    )
};

export default GameWorld;