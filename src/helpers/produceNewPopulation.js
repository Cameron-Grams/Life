const newRow = () => {
    const newArray = Array( 80 );
    for ( let i = 0; i < newArray.length; i++ ){
        newArray[ i ] = Math.floor( Math.random() * 2 );
    }
    return newArray;
}

const produceNewPopulation = () => { 
    const arrayOfRows = Array( 40 );
    for ( let j = 0; j < 60; j++ ){
        arrayOfRows[ j ] = newRow();
    }
    return arrayOfRows; 
};

export default produceNewPopulation; 