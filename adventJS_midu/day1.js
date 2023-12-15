// En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

// Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

// ¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

// En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

function findFirstRepeated_old(gifts){
  
  let repeated = [];
  let firstRepeated = [];
  for(let i=0; i<gifts.length; i++){
    
    firstRepeated = repeated.filter( elem => {
      if(gifts[i] === elem)
        return elem;
    });

    if(firstRepeated.length > 0)
      break;
    
    for(let j=(i+1); j<gifts.length; j++){
        if(gifts[i] === gifts[j])
          repeated.push( gifts[i] );
    }
  }
  	
  return firstRepeated.length == 0 ? -1 : firstRepeated[0];
}

const giftIds_old = [2, 1, 3, 5, 3, 2];
const firstRepeatedId_old = findFirstRepeated_old(giftIds_old);
// console.log(firstRepeatedId_old);

function findFirstRepeated(gifts){
  
  // let repeatedIndex = [];
  // gifts.reduce( (accum, elem, i, arrG) => {

  //   let giftArr = arrG.slice(i+1);
  //   repeatedIndex.push( giftArr.findIndex( val => elem === val ) );
  //   // repeatedIndex.push( giftArr.findIndex( val => elem === val ) + (i+1) );

  //   return elem;
  // }, gifts[0]);

  let repeatedIndex = gifts.filter( (elem, i, arrG) => {

    // let giftArr = arrG.slice(i+1);
    let index = arrG.slice(i+1).findIndex( val => elem === val );
console.log(index);
    return index;
  });

  console.log(repeatedIndex);
}

const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
// console.log(firstRepeatedId);
