// • Soit les tableaux suivants :
//     o let array1 = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4] ;
//     o let array2 = [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8] ;
// • Ecrire le code permettant de compter le nombre d’éléments en commun dans ces 2
// tableaux

// création des tableaux
let array = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4];
let array2 = [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8];

// création d'un troisième tableau ici, il est vide
let array3 = [];

//boucle pour additionner les valeurs du tableau 1 et 2
for (i = 0; i < array.length; i++) {
    // création d'une condition pour placer uniquement les nombres identique du tableau 1 et 2
    for (x = 0; x < array.length; x++) {
        if (array[i] === array2[x]) {
            array3.push(array[i]);
        }
    }
}

// Affichage du tableau 3 comprenand les éléments en commun.
console.log(array3);

let somme = 0
//boucle pour compter le nombre de colonnes dans le tableau 3
for (z = 0; z < array3.length; z++) {
    somme = z+1;
}

console.log("Il y a "+ somme + " en commun dans le tableau 1 et 2");