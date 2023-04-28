/*
  Ex 2

  creare una mappa chiamata m1, che rappresenta un'automobile, con la seguente struttura: 
  model -> 'Panda', maxSpeed: 250, price: 1000

  creare una mappa chiamata m2, che rappresenta un'automobile, con la seguente struttura: 
  model -> 'Audi', maxSpeed: 200, price: 5000

  tramite due foreach, stampare le singole caratteristiche delle due automobile.
  DOPO, stampare in output il modello della macchina con la velocità massima più elevata

*/

const m1 = new Map([
    ['Model', 'Panda'],
    ['maxSpeed', 250],
    ['price', 1000]
])

const m2 = new Map([
    ['Model', 'Audi'],
    ['maxSpeed', 200],
    ['price', 5000]
])

m1.forEach(function (v, k) {
    console.log(`${k}: ${v}`)
})
m2.forEach(function (v, k) {
    console.log(`${k}: ${v}`)
})

if(m1.get('maxSpeed') > m2.get('maxSpeed')) console.log(`l'auto più veloce è: ${m1.get('Model')}`)
        else if(m2.get('maxSpeed') > m1.get('maxSpeed')) console.log(`l'auto più veloce è: ${m2.get('Model')}`)
        else console.log('le due auto hanno la stessa velocità massima')