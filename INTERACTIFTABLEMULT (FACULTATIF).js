// •Ecrire un programme qui, pour une variable donnée entre 1 et 10, affiche sa table de
// multiplication.
// •Voici l’affichage à obtenir si la variable vaut 3:
// Table de 3 :
// 3*1=3
// 3*2=6
// ...
// 3 * 10 = 30

function afficherTableMultiplication() {

    const nombre = 3;

    console.log(`\nTable de ${nombre} :`);

    // Boucle pour les multiplicateurs de 1 jusqu'a 10
    for (let i = 1; i <= 10; i++) {

        const resultat = nombre * i;

        console.log(`${nombre} * ${i} = ${resultat}`);
    }
}

afficherTableMultiplication();