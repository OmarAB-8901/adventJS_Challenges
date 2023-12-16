// En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

// Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

// Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

// function findNaughtyStep_old(original, modified) {
//    // Code here
   
//    original = original.split('');
//    modified = modified.split('');
   
//    let mayorArray = [];
//    let minorArray = [];
//    if(original.length < modified.length){
//      mayorArray = modified;
//      minorArray = original;
//    } else {
//      mayorArray = original;
//      minorArray = modified;
//    }
   
//    let extraDataFilter = mayorArray.filter( elem => {
//      if(!minorArray.some( val => elem === val ))
//        return elem;
//    });
 
//    return extraDataFilter[0] != undefined ? extraDataFilter[0] : '';
//  }
 
//  const original_old = 'abcd'
//  const modified_old = 'abcde'
 
// console.time();
// let result_old = findNaughtyStep_old(original_old, modified_old) // 'e'
// console.log( result_old );
// console.timeEnd();


function findNaughtyStep(original, modified) {
  // Code here

  let copyOriginal;
  let copyModified;
  if(original.length < modified.length){
    copyOriginal = modified;
    copyModified = original;
  }

  let nonAllowedStep;
  for(let i=0; i<copyOriginal.length; i++){
  
    let result = copyModified.split('').some( elem => elem === copyOriginal[i] );

    if(!result)
      nonAllowedStep = copyOriginal[i];
  }
  
  return nonAllowedStep != undefined ? nonAllowedStep : '';
}

const original = 'abcd'
const modified = 'abcde'

console.time();
let result = findNaughtyStep(original, modified) // 'e'
console.log( result );
console.timeEnd();