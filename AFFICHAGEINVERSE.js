// • Soit le tableau suivant : let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
// • Afficher l’ensemble des éléments du tableau grâce à une boucle
// • Afficher l’ensemble des éléments dans l’ordre inverse du tableau
// • Créer un tableau arrayCopy, copie du tableau array.

// création du tableau
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

//boucle pour afficher le tableau
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//boucle pour afficher le tableau à l'inverse
for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}

//duplication du tableau
let array2 = array.slice();