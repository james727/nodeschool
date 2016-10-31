var ls = require( './module' );

function gotDirectory ( err, contents ) {
  if ( err ){
    console.log( 'An error occurred.' );
  }
  for ( i = 0; i < contents.length; i++ ) {
    var file = contents[ i ];
    console.log( file );
  }
}

ls( process.argv[ 2 ], process.argv[ 3 ], gotDirectory )
