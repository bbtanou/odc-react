const sumPromise = new Promise((resolve, reject) => {
    try{
        let sum = 0;
        console.log('Somme de 1 a 1 000 000 000 commencé');
        for(let i = 0; i < 10000000000; i++){
            sum += i;
        }
        resolve("Somme de 1 a 1 000 000 000 finie " + sum);
    }catch(e){
        reject("Error");
    }

})

const multPromise = new Promise((resolve, reject) => {
    try{
        let mult = 0;
        console.log('Multiplication de 1 a 1 000 000 000 commencé');
        for(let i = 1; i < 10000000000; i++){
            mult *= i;
        }
        resolve("Multiplication de 1 a 1 000 000 000 finie " + mult);
    }catch(e){
        reject("Error");
    }

})

sumPromise.then(r => console.log(r))
    .catch(e => console.log(e));

multPromise.then(r => console.log(r))
    .catch(e => console.log(e));
