// La suite de Fibonacci est une suite qui commence par 0 et 1 et dans laquelle le nombre de
// rang N est égal à la somme des nombres de rangs N-1 et N-2
// • Déclarer une variable n qui contient le rang de la suite : let n = 10 ;
// • Calculer et afficher la valeur de Fibonacci de rang n


function calculerFibonacci() {
    
    const n = 10; 
    console.log(`--- Suite de Fibonacci jusqu'au rang ${n} ---`);

    
    if (n === 0) {
        console.log(`Valeur de Fibonacci de rang ${n} est : 0`);
        return;
    }
    if (n === 1) {
        console.log(`Valeur de Fibonacci de rang ${n} est : 1`);
        return;
    }

    
    let prec1 = 0; // Représente F(i-2) au début
    let prec2 = 1; // Représente F(i-1) au début
    let resultat = 0; // Variable pour stocker le terme actuel F(i)

    // Boucle pour calculer les termes à partir du rang 2
    for (let i = 2; i <= n; i++) {

        resultat = prec1 + prec2;
        
        // Le F(i-1) actuel devient le F(i-2) pour le tour suivant
        prec1 = prec2;
        // Le F(i) actuel devient le F(i-1) pour le tour suivant
        prec2 = resultat;
    }

    console.log(`La valeur de Fibonacci de rang ${n} est : ${resultat}`);
}

calculerFibonacci();