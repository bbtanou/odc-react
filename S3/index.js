const tab = [];

function random(){
    return Number.parseInt(Math.random() * 1000 + 1);
}


function add(x){
    tab.push(x);
}

function parite(x){
    if(x % 2 === 0){
        return `${x}  -> Paire`;
    }

    return `${x}  -> Impaire`;
}

function trie(){
    for(let i = 0; i < tab.length; i++){
        for(j = i + 1; j < tab.length; j++){
            if(tab[i] > tab[j]){
                let temp = tab[i];
                tab[i] = tab[j];
                tab[j] = temp;
            }
        }
    }
}

function afficher(){
    tab.forEach(e => {
        console.log(parite(e));
    });
}

for(let i = 1; i <= 50; i++){
    const nombre = random();
    add(nombre);
}

trie(tab);
afficher();

const paire = tab.filter(e => e % 2 === 0);
const impaire = tab.filter(e => e % 2 !== 0);

const times2 = tab.map(e => e * 2);

tab.splice(tab.findIndex(i => i === 2), 1, 9)

const sum =  tab.reduce((a, b) => a + b);
