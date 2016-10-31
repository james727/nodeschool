var http = require( 'http' );
var url = require( 'url' );

var server = http.createServer( callback );
server.listen( process.argv[ 2 ] );

function callback( request, response ){
  response.writehead( 200, { 'Content-Type': 'application/json' } );
  var url_data = url.parse( request.url, true );
  var path = url_data.path;
  if ( path == '/api/parsetime' ) {

  }
  if ( path == '/api/unixtime' ){

  }
}
