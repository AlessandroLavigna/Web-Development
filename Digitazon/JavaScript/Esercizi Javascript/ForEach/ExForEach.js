// /*
//   Ex 1

//   dato l'array chiamato 'a1' con valori [10, 'ciao', true, 20, 'js', 4] usare un foreach per calcolare la somma degli elementi numerici e stamparla in output
// */

const a1 = [10, 'ciao', true, 20, 'js', 4]
let sum = 0;

a1.forEach(function(Element) {
    if (typeof Element == "number") {
        sum += Element;
        
    }
});

console.log(`la somma è: ${sum}`)


