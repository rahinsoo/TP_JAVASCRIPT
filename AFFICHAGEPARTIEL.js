// • Soit le tableau suivant : let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
// • Combiner une boucle et un test de manière à n’afficher que les entiers supérieurs à 3
// • Combiner une boucle et un test de manière à n’afficher que les entiers pairs
// • Combiner une boucle et un test de manière à n’afficher que les valeurs correspondant
// aux index pairs
// • Combiner une boucle et un test de manière à n’afficher que les entiers impairs

// création du tableau
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// boucle pour afficher que les entiers supérieurs à 3
console.log("entiers supérieurs à 3 :");
for (let i = 0; i < array.length; i++) {

    if (array[i] > 3) {

        console.log(array[i]);
    }
}

// boucle pour afficher que les entiers pairs
console.log("entiers pairs : ");
for (let i = 0; i < array.length; i++) {

    if (array[i] % 2 == 0) {

        console.log(array[i]);
    }
}

// boucle pour afficher que les valeurs correspondant
// aux index pairs
console.log("index pairs : ");
for (let i = 0; i < array.length; i++) {

    if (i % 2 == 0) {

        console.log(array[i]);
    }
}

// boucle pour afficher que les entiers impairs
console.log("entiers impairs : ");
for (let i = 0; i < array.length; i++) {

    if (array[i] % 2 != 0) {

        console.log(array[i]);
    }
}