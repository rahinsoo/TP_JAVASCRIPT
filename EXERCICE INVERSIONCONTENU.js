// • Soit le tableau suivant : let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
// • Créer un tableau arrayCopy et copier tous les éléments de array dans arrayCopy mais
// dans l’ordre inverse.
// • Afficher l’ensemble des éléments des 2 tableaux

// création du tableau
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// création d'un second tableau ici, il est vide
let array2 = [];

//boucle pour enregistrer les valeurs du tableau 1 à l'enverse dans le tableau 2
for (let i = array.length - 1; i >= 0; i--) {

    array2.push(array[i]);
}
// Affichage des tableaux
console.log(array);
console.log(array2);