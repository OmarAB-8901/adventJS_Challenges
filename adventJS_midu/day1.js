// En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

// Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

// ¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

// En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.

function findFirstRepeated(gifts){
  
  let arrG = gifts;

  let repeatedIndex = [];
  gifts.forEach( (elem, i) => {

    let index = arrG.slice(i+1).findIndex( val => elem === val );

    if(index >= 0)
      repeatedIndex.push( index + (i+1) );
  });
  let lowestIndex = repeatedIndex.sort()[0];

  return lowestIndex != undefined ? gifts[lowestIndex] : -1;
}

const giftIds = [2, 1, 3, 5, 3, 2];
// const giftIds = [2, 4, 3, 5, 1];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId);


// *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-


function findFirstRepeated(gifts) {
  // Objeto para rastrear la aparición de cada número de regalo.
  const giftAppearanceTracker = {}
  // Variable para almacenar el primer número de regalo repetido encontrado.
  let firstDuplicate = -1

  // Recorremos cada número de regalo en la lista.
  gifts.find(giftNumber => {
    // Verificamos si el número actual ya ha aparecido.
    if (giftAppearanceTracker[giftNumber]) {
      // Si ya ha aparecido, establecemos el primer duplicado con el número actual
      // y retornamos true para detener la búsqueda.
      firstDuplicate = giftNumber
      return true
    }
    // Marcamos el número de regalo como visto, estableciendo su valor en true.
    giftAppearanceTracker[giftNumber] = true
    // Retornamos false para continuar la búsqueda.
    // (El método `find` ignora este false y solo detiene la búsqueda cuando retorna true).
    return false
  })

  // Retornamos el primer duplicado encontrado o -1 si no se encontró ninguno.
  return firstDuplicate
}

giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.log(firstRepeatedId3) // 5