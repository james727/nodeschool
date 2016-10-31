var fs = require( 'fs' );
var path = require( 'path' );

function ls ( directory, extension, callback ){
  fs.readdir( directory, function modified_callback ( err, data ) {
    if ( err ){
      return callback( err );
    }
    var out = [];
    for ( i = 0; i < data.length; i++ ) {
      var file = data[ i ];
      if ( path.extname( file ) == '.' + extension ) {
        out.push( file );
      }
    }
    callback( null, out );
  })
}

module.exports = ls
