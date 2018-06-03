import React from 'react';
import Aux from '../../helpers/Aux';
import Header from '../Header/Header'; 
import GameWorld from '../GameWorld/GameWorld';

const Main = ( props ) => (
    <Aux>
        <Header /> 
        <GameWorld />
    </Aux>
);

export default Main; 