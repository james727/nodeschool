var http = require( 'http' );

http.get( process.argv[ 2 ], httpCallback );

function httpCallback( response ) {
  response.setEncoding( 'utf8' );
  response.on( 'data', console.log );
}
