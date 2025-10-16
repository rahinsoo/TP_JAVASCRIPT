// • Soit le tableau suivant : let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
// • Calculer et afficher la moyenne des éléments du tableau ?

// création du tableau
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
// création de la variable de la quantité des boucles
let i = 0;
// somme est la somme totale des boucles
let somme = 0;

// boucle pour chercher dans le tableau
for (i = 0; i < array.length; i++) {
    somme = somme + array[i];

}

// Je calcule la moyenne : 
let moyenne = somme / i;
console.log("La moyenne du tableau : " + moyenne);
