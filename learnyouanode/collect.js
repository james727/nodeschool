var http = require( 'http' );
var responseCounter = 0;

var textList = [];
for ( var i = 2; i < 5; i++ ) {
  var url = process.argv[ i ];
  http.get( url, createCallback( i - 2 ) );
}

function createCallback( i ) {
  return function callback ( response ) {
    response.setEncoding( 'utf8' );
    var out = '';
    response.on( 'data', function ( d ) { out += d });
    response.on( 'end', function() {
      textList[ i ] = out
      if ( textList.length == 3 ) {
        for ( var j = 0; j < 3; j++ ){
          console.log( textList[ j ] );
        }
      }
    })
  }
}
