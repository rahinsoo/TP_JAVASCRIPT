// •Déclarer un tableau d’entiers
// •Effectuez une rotation à droite des éléments.
// •Exemple : si vous avez [0,1,2,3] dans le tableau, le tableau contiendra [3,0,1,2] après
// rotation

// création des tableaux
let array = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4];

/**
 * Fonction pour effectuer une rotation à droite d'un tableau d'entiers.
 * Le dernier élément devient le premier.
 */
function rotationDroite(tableau) {
    //Affiche l'état initial du tableau pour vérification
    console.log("--- Rotation à Droite ---");
    console.log("Tableau initial :", tableau);

    // Vérification pour éviter de afficher un tableau vide
    if (tableau.length === 0) {
        console.log("Le tableau est vide, pas de rotation.");
        return;
    }

    // Récupérer le dernier élément
    // pop() retire le dernier élément du tableau ET le retourne.
    const dernierElement = tableau.pop();
    
    // Déplacer le dernier élément en tête
    // unshift() ajoute un ou plusieurs éléments au début du tableau.
    tableau.unshift(dernierElement);

    // Affiche le tableau après la rotation
    console.log("Tableau après rotation :", tableau);
}

// Exécution de la rotation
rotationDroite(array);