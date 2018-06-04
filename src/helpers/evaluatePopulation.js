const evaluatePopulation = ( array ) => {
  
    let boardNext = new Array( array.length );
    for ( let i = 0; i < array.length; i++) {
        boardNext[i] = new Array( array[i].length);
    }

    for ( let x = 0; x < array.length; x++) {
        for ( let y = 0; y < array[x].length; y++) {
            let internalValue = 0;
            for ( let dx = -1; dx <= 1; dx++) {
                for ( let dy = -1; dy <= 1; dy++) {
                    if ( dx === 0 && dy === 0){}
                    else if ( typeof array[x+dx] !== 'undefined'
                            && typeof array[x+dx][y+dy] !== 'undefined'
                            && array[x+dx][y+dy]) {
                        internalValue++;
                    }
                }	
            }
				let creature = array[x][y];
				switch ( internalValue ) {
					case 0:
					case 1:
						creature = 0;
						break;
					case 2:
						break; 
					case 3:
						creature = 1;
						break;
					default:
						creature = 0;
				}
				boardNext[x][y] = creature;
		}
	}
	return boardNext;
}

export default evaluatePopulation;
