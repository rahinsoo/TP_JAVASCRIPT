// •Déclarer une variable contenant une valeur numérique entière
// •Utiliser une boucle pour calculer la somme de tous les nombres de 1 à cette valeur
// •Exemple de résultat à obtenir si la variable vaut 10 : 55

// i est mon nombre entier
let i = 1;
// somme est la somme totale des boucles
let somme = 0;

// boucle de répétition pour ajouter et aditionner i
for (i = 1; i <= 10; i++) {

    somme = somme + i;
}
// indication du nombre entier en fin de boucle
console.log("Numéro entier = " + i);
// indication de la somme en fin de boucle
console.log("La somme = " + somme);