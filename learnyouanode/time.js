var net = require( 'net' );

var server = net.createServer( listener );
server.listen( process.argv[ 2 ] );

function getTime () {
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var full_date = year + "-" + month + "-" + day + " " + hour + ":" + minute + "\n";
  return full_date
}


function listener( socket ) {
  var time = getTime();
  socket.write( time );
  socket.end();
}
