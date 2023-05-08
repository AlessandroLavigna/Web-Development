/*                  ESERCIZIO 1
Scrivere una funzione AND che si comporti come l'and nei booleani 
(&&) e accetti un numero qualsiasi di parametri
AND(true, false)
AND(true)
AND(false)
AND(false, true, true, true, false)
AND(false, true, true, true, false, false, true, true, true, false)
AND(false, true, true, true, false, false, true, true, true, false,
false, true, true, true, false, false, true, true, true, false,false, 
true, true, true, false, false, true, true, true, false,false, true, 
true, true, false, false, true, true, true, false,false, true, true, 
true, false, false, true, true, true, false,false, true, true, true, 
false, false, true, true, true, false)
*/


function AND(...parameters) {           /*i puntini indicano che è un array di parametri e che sono un numero indefinito*/
    let res = parameters[0]             
    for (let i = 1; i < parameters.length; i++) {
        // console.log(parameters[i]);
        res = res&&parameters[i]
    }
    return res
}

console.log(AND(false,true,true,false))


//               ESERCIZIO 2
// Scrivere una funzione che prende in ingresso un oggetto, si devono stampare solo i valori relativi a quelle chiavi:
// * "chiave1"
// * "chiave2"
// a prescindere da quante ce ne siano nell'oggetto.
// Non si possono utilizzare if, non si puo' utilizzare l'operatore punto (.) cercate di utilizzare il destructuring



// let obj = {
//     Name: "Paolo",
//     LastName: "Bianchi",
//     age: "42",
// }
// function indicator(args) {
//     // for (let i = 0; i < args.length; i++) {
//     //     console.log(args[i]);
//         let {...k} = args
//         return k
            
        
        
//     }
//     let 


// console.log(indicator(obj));

// function es(ob){
//     let {...k} = ob
//     return k
// }

// let obj={
//     nome:'a',
//     cognome:'b'
// }

// console.log(es(obj))

function print({chiave1, chiave2}) {
    console.log(chiave1, chiave2);
}

function print2(obj) {
    let { chiave1, chiave2 } = obj
    console.log(chiave1, chiave2);
    
}
print({chiave1: 1, chiave2: 2, chiave3: 3, chiave4: 4})
print2({chiave1: 1, chiave2: 2, chiave3: 3, chiave4: 4})