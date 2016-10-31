var inputs = process.argv;
var counter = 0;
var max_i = inputs.length;
for ( i = 2; i < max_i; i++ ){
  counter += +inputs[ i ];
}
console.log( counter );
