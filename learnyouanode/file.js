var http = require( 'http' );
var fs = require( 'fs' );

var server = http.createServer( createFileCallback( process.argv[ 3 ] ) );
server.listen( process.argv[ 2 ] );

function createFileCallback ( file_location ) {
  return function serveFile( request, response ) {
    var fileStream = fs.createReadStream( file_location );
    fileStream.on( 'open', function () {
      fileStream.pipe( response );
    })
  }
}
