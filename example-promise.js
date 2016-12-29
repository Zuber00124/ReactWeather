// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//   if (err){
//     console.log('error',err);
//   }else{
//     console.log('sucess', temp)
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject){
//     setTimeout(function (){
//       resolve(79);
//       reject('City not found');
//     },1000);
//
//   });
// }
//
// getTempPromise('Philadelphia').then(function (temp) {
//   console.log('promise sucess',temp);
//
// }),function (err) {
//   console.log('promise error',err);
//
// }

function addPromise (a, b){
  return new Promise(function (resolve, reject){
    if (typeof a=== 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
        reject('A and B need to be numbers');
    }
  });
}

addPromise(2,3).then( function (sum){
  console.log('success', sum);
},function (err){
  console.log('Error', err);

});


addPromise('andrew',3).then( function (sum){
  console.log('this not show up');
},function (err){
  console.log('This shouls appear', err);

});
