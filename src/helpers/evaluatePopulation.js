const evaluatePopulation = ( array ) => {
    for ( let i = 0; i < array.length; i++ ){
        for ( let j = 0; j < array[ i ].length; j++ ){
            let interiorValue = 0;
            // this is to evaluate each cell, one at a time; array[ i ][ j ]
            if ( i > 0 ){  
                if ( j > 1 ){
                    if ( array[ i -1 ][ j - 1 ] === 1 ){ interiorValue++ };
                }
                if ( array[ i -1 ][ j ] === 1 ){ interiorValue++ };
                if ( j < array[ i ].length -1 ){
                    if ( array[ i -1 ][ j + 1 ] === 1 ){ interiorValue++ };
                }
            }

            if ( j > 1 ){
                if ( array[ i ][ j - 1 ] === 1 ){ interiorValue++ };
            }
            if ( j < array[ i ].length ){
                if ( array[ i ][ j + 1 ] === 1 ){ interiorValue++ };
            }
            
            if ( i < array.length - 1 ){
                if ( j > 1 ){
                    if ( array[ i + 1 ][ j -1 ] === 1 ){ interiorValue++ };
                }
                if ( array[ i + 1 ][ j ] === 1 ){ interiorValue++ };
                if ( j < array[ i ].length ){
                    if ( array[ i + 1 ][ j + 1 ] === 1 ){ interiorValue++ };
                }
            }

            if ( interiorValue < 2 ){
                array[ i ][ j ] = 0;
            } else if ( interiorValue === 2 || interiorValue === 3 ){
                array[ i ][ j ] = 1;
            } else if ( interiorValue > 3 ){
                array[ i ][ j ] = 0;
            };
        }
    }
    return array; 
};

export default evaluatePopulation;