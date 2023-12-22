// En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés

// Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.

// Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.

function decode(message) {
   // Code here

  let aux = message.split('(').join('').split(')').join('');
  console.log( aux.split('').reverse().join('') );

  message.split('').forEach( (chart, i) => {

    if(chart == '('){
     console.log(chart,i); 
    }
  });

   return message;
 }

const a = decode('hola (odnum)')
console.log(a, '\n') // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b, '\n') // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c, '\n') // santaclaus