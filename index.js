// function repeat(fn, n) {
//   for(let i = 0; i<= n ; i++){
//     return fn;
//   }
// }  

// function hello(){
//   console.log('Hello world');
// }

// function goodbye(){
//   console.log('Goodbye world');
// }

// repeat(hello, 5);
// repeat(goodbye, 3);


// function filter(array, fn) {
//   let newArray =[];
//   for(let i = 0; i < array.length; i++ ) {
//     if(fn === true){

//     }
//   }
// }

// // DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// // First we setup an array of strings we plan to filter:
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// // We use your `filter` function here, capturing a new array into `filteredNames`
// // comprised of names that only begin with 'R'
// const filteredNames = filter(myNames, function(name) {
//   // This is known as a "predicate function" - it's a function that 
//   // only returns a boolean
//   return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES



function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return(
    (location) =>{
      warningCounter++;
      console.log(`'DANGER! There is a ${typeOfWarning} hazard at ${location}!"`);
      console.log(`'The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!'`);
    }
  );
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const iceWarning = hazardWarningCreator('Ice on the Road');
const llamaWarning = hazardWarningCreator('CAUTION! AVOID Llama');

rocksWarning('That windy road up to Dracula\'s');
rocksWarning('On the corner they straight slanging');
iceWarning('Gucci so flossy when he out in the streets');
iceWarning('wrap on up and stay inside because');
llamaWarning('will the emporer ever regain his groove?');
llamaWarning('rumormills about a gang so mean they\'ll make you spit');
