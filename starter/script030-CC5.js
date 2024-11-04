/*****************************
 * 030 - OBJETS + BOUCLES + TESTS + FONCTIONS - CODING CHALLENGE 5
 */

/*
Vous vous souvenez du challenge du calculateur de pourboire ?
Créons une version plus avancée en utilisant tout ce que nous avons appris !

Cette fois, John et sa famille sont allés dans 5 restaurants différents.
Les factures ont été de $124, $48, $268, $180 et $42.
John aime laisser un pourboire de 20% quand la facture est inférieure à $50,
15% quand la facture est entre $50 et $200, et 10% si la facture est plus de $200.

Implémente un calculateur de pourboire en utilisant les objets et les boucles.
1. Crée un objet avec un tableau pour les montants des factures
2. Ajoute une méthode pour calculer le pourboire
3. Cette méthode devrait inclure une boucle pour itérer à travers toutes les factures payées
    et faire le calcul du pourboire
4. En sortie, crée
    1°) un nouveau tableau qui contient toutes les factures
    2°) un tableau qui contient les montants finaux payés (facture + pourboire).
AIDE : Commence avec deux tableaux vides en tant que propriétés
        et remplis-les dans la boucle
*/

const pourboires= {
    factures: [124, 48, 268, 180, 42],
     toutesfactures:[],
     montantsFinaux:[],
    montantsPourboir:[],

    calculerPourboire(){
        for (const facture of this.factures) {
            let pourboir = 0;
            if (facture < 50) {
                pourboir = facture * 0.2;
            } else if (facture < 200) {
                pourboir = facture * 0.15;
            } else {
                pourboir = facture * 0.1;
            }
            this.montantsPourboir.push(pourboir);
            this.toutesfactures.push(facture);
            let resultat = 0;
            resultat = facture + pourboir;
            this.montantsFinaux.push(resultat);
        }

    }

};

pourboires.calculerPourboire();


console.log(pourboires.montantsFinaux);
console.log(pourboires.factures);
console.log(pourboires.toutesfactures);
console.log(pourboires.montantsPourboir);



/*
BONUS (EXTRA) APRÈS AVOIR FINI :

La famille de Mark est aussi partie en vacances, et est allée dans 4 restaurants différents.
Les factures ont été de $77, $375, $110, et $45.
Mark aime laisser un pourboire de 20% quand la facture est moins de $100,
10% pour une facture entre $100 et $300, et 25% pour une facture de plus de $300
(différent de John).

5. Implémente les mêmes fonctionnalités qu'avant, cette fois avec les règles de pourboire de Mark.
6. Crée une fonction (pas une méthode) pour calculer la moyenne d'un tableau de pourboires donné.
INDICE : Boucle sur le tableau et, à chaque itération, stocke la somme courante dans une variable
(en commençant à 0). Une fois que tu as la somme du tableau, divise-la par le nombre d'éléments
du tableau (c'est comme cela qu'on calcule une moyenne).
7. Calcule le pourboire moyen pour chaque famille
8. Affiche qui a payé le pourboire le plus élevé en moyenne.

BONNE CHANCE 😀
*/

const pourboiresMark= {
    facturesMark : [77, 375, 110, 45],
    toutesfactures:[],
    montantsFinaux:[],
    montantsPourboir: [],

    calculerPourboire(){
        for (const facture of this.facturesMark) {
            let pourboir = 0;
            if (facture<100){
                pourboir = facture*0.2;
            } else if (facture < 300 && facture >= 100){
                pourboir = facture*0.15;
            } else {
                pourboir = facture*0.25;
            }
            this.toutesfactures.push(facture);
            let resultat = 0;
            resultat = facture + pourboir;
            this.montantsFinaux.push(resultat);
            this.montantsPourboir.push(pourboir);
        }

    }

};

pourboiresMark.calculerPourboire();


console.log(pourboiresMark.montantsFinaux);
console.log(pourboiresMark.facturesMark);
console.log(pourboiresMark.toutesfactures);
console.log(pourboiresMark.montantsPourboir);



function calculerMoyennePourboire(moyennePourboir) {
    let somme = 0;
    for (let i = 0; i < moyennePourboir.length; i++) {
        somme += moyennePourboir[i];
    }
    return somme / moyennePourboir.length;
}

// Calcul des moyennes pour chaque famille
const moyenneJohn = calculerMoyennePourboire(pourboires.montantsPourboir);
const moyenneMark = calculerMoyennePourboire(pourboiresMark.montantsPourboir);


console.log(moyenneJohn);
console.log(moyenneMark);












/*
 const factures = [124, 48, 268, 180, 42];
const calculateur ={
    const nouvelleFacture= [];
    const montantsfinaux = [];

    calculpourboire(){
        for (const facture of factures) {
            if (facture<50){
                let pourboire= facture * 0.2;
            }else if (facture>=50 && facture<200){
                let pourboire= facture * 0.15;
            }else {
                let pourboire= facture * 0.1;
            }
        }

    },



};
*/



/*
const montantFactures =[124, 48, 268, 180, 42];
const calculateur = {


    pourboire() {

        for (let montantFacture of montantFactures) {
            if (montantFacture < 50) {
                donner = montantFacture * 0.2;
            } else if (montantFacture >= 50 && montantFacture < 200) {
                donner = montantFacture * 0.15;
            } else {
                donner = montantFacture * 0.10;

            }
        }
    } const nouvellefacture = montantFacture + donner;
    this.nouveauMontant = [nouvellefacture];

}

console.log(montantFactures);
console.log()
*/



/*function moyennePourboire() {
    let moyen = 0;

    for (let i = 0; i < pourboires.factures.length ; i++ ) {
        if (i <pourboires.factures.length -1 ) {
            moyen = pourboires.factures[i] + moyen;
        }
            let total = 0;
        total= (moyen + pourboires.factures[4] )/5
            return `Moyenne Famille John : ${total}`;
        }
    for (let i = 0; i < pourboiresMark.facturesMark.length ; i++){
        if (i <pourboiresMark.facturesMark -1 ) {
            moyen = 0;
            moyen = pourboiresMark.facturesMark[i] + moyen;
        }
        let total = 0;
        total = (moyen + pourboiresMark.facturesMark[3] )/5;
        return `Moyenne Famille Mark : ${total}` ;
    }
}     */

/*
const pourboiresMark= {

    toutesfactures:[],
    montantsFinaux:[],

    calculerPourboire(){
        for (const facture of this.factures) {
            let pourboir = 0;
            if (facture < 50) {
                pourboir = facture * 0.2;
            } else if (facture < 200) {
                pourboir = facture * 0.15;
            } else {
                pourboir = facture * 0.1;
            }
            this.toutesfactures.push(facture);
            let resultat = 0;
            resultat = facture + pourboir;
            this.montantsFinaux.push(resultat);
        }

    }

};

pourboires.calculerPourboire();


console.log(pourboires.montantsFinaux);
console.log(pourboires.factures);
console.log(pourboires.toutesfactures);

*/