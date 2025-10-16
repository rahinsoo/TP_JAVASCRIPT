// • Soit le tableau suivant : let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
// • Rechercher le plus grand élément du tableau

// création du tableau
let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
// création de la variable nombreMax
let nombreMax = 0;

// boucle pour chercher dans le tableau
for(let i = 0; i < array.length; i++)
{
    //condition pour le nombre max
    if(array[i] > nombreMax)
    {
        nombreMax = array[i];
    }
}

// affichage du nombre max
console.log("Plus grand nombre = " + nombreMax);