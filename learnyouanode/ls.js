var fs = require( 'fs' );
var path = require( 'path' );
fs.readdir( process.argv[ 2 ], gotDirectory );

function gotDirectory ( err, contents ) {
  for ( i = 0; i < contents.length; i++ ) {
    var file = contents[ i ];
    if ( path.extname( file ) == '.' + process.argv[ 3 ] ) {
      console.log( file );
    }
  }
}
