// Soit le tableau 1 suivant : [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
// • Soit le tableau 2 suivant : [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1] ;
// • Créer un tableau qui contient la somme des 2 précédents tableaux

// création des tableaux
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1];

// création d'un troisième tableau ici, il est vide
let array3 = [];

//boucle pour additionner les valeurs du tableau 1 et 2 dans le tableau 3
for (i = 0; i < array.length; i++) {

    array3.push(array[i] + array2[i]);
}
// Affichage du tableau 3
console.log(array3);