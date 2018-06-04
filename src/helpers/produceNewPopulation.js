const newRow = () => {
    const newArray = Array( 20 );
    for ( let i = 0; i < newArray.length; i++ ){
        newArray[ i ] = Math.floor( Math.random() * 2 );
    }
    return newArray;
}

const produceNewPopulation = () => { 
    const arrayOfRows = Array( 20 );
    for ( let j = 0; j < 20; j++ ){
        arrayOfRows[ j ] = newRow();
    }
    return arrayOfRows; 
};

export default produceNewPopulation; 