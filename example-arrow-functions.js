 // var names = ['Andrew','Julie', 'Jen'];
//
// names.forEach(function (name){
//   console.log('forEach',name);
// });
//
//
// names.forEach((name) => {
//   console.log('arrowFunc',name);
//
// });
//
// names.forEach((name) => console.log(name));

// var returnMe= (name) => name + '!';
// console.log(returnMe('Zuber'));

//
// var person ={
//   name: 'Zuber',
//   greet: function (){
//     names.forEach( (name) => {
//       console.log(this.name + ' say hi to ' + name);
//     });
//   }
// };
//
// person.greet();


function add (a, b){
  return a + b;
}

//addstatement

var addstatement = (a, b) => {
  return a + b;
}
console.log(addstatement(4,7));

//addExpression
var addExpression = (a, b) => a + b;
console.log(addExpression(3,-2));


// console.log(add(1,3));
// console.log(add(9,0));
