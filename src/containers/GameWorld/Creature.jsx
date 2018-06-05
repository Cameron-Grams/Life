import React from 'react'; 

const Creature = ( props ) => {
    const lifeCondition = props.status ? "black": "#74777C";

    return( 
        <rect x={ props.xLocation } y={ props.yLocation } width="8" height="9" fill={ lifeCondition } />
    );
};

export default Creature; 