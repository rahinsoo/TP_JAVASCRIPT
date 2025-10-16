// •Déclarez un tableau d’entiers
// •On calcule une valeur booléenne qui contrôle le tableau de la sorte :
//     o elle vaut true si le tableau a au moins 1 élément et si le premier élément ou le
// dernier élément vaut 6.
//     o elle vaut false dans les autres cas
// • écrire l’algo avec le minimum de ligne

// création du tableau
let array2 = [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 6] ;

// condition si le tableau contient un élément et si le premier ou le dernier élément vaux 6
if(array2.length >= 1 && (array2[0] == 6 || array2[array2.length - 1] == 6))
{
    // true si les conditions sont ok
    console.log(true);
}
else
{
    // false si les conditions sont nok
    console.log(false);
}