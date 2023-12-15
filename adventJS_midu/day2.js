// En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.

// Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.

// Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.

function manufacture(gifts, materials) {
   // Code here
 
   materials = materials.split('');
   
   let canMake = gifts.filter(gift => {
     let checkData = gift.split('').map( elem => 
                        materials.some( mat => 
                           mat == elem 
                        )
                     );
     
     if(checkData, checkData.every( elem => elem ))
       return gift;
   });
   
   return canMake
 }
 
 const gifts = ['tren', 'oso', 'pelota'];
 const materials = 'tronesa';
 
 // const gifts = ['juego', 'puzzle']
 // const materials = 'jlepuz'
 
 const result = manufacture(gifts, materials); // ["tren", "oso"]
 // 'tren' SÍ porque sus letras están en 'tronesa'
 // 'oso' SÍ porque sus letras están en 'tronesa'
 // 'pelota' NO porque sus letras NO están en 'tronesa'

 console.log(result);