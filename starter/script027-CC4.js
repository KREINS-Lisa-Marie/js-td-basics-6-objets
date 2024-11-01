/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/

        const john= {
            nomcomplet: "John Mastertminit",
            poids: 103,
            taille: 1.85,
        bmiJohn(){
            let bmiDeJohn = this.poids / (this.taille* this.taille)
                return bmiDeJohn;
        }
        };

        const mark = {
            nomcomplet: "Mark Dupont",
            poids: 80,
            taille: 1.81,


            bmiMark(){
                let bmidemark= this.poids/ (this.taille*this.taille);
            return bmidemark;
            }
    };

console.log(mark.bmiMark());
console.log(john.bmiJohn());

if( mark.bmiMark()> john.bmiJohn()){
    console.log( `Le BMI de ${mark.nomcomplet} est de ${mark.bmiMark()}`);
}else if ( mark.bmiMark()< john.bmiJohn()) {
    console.log(`Le BMI de ${john.nomcomplet} est de ${john.bmiJohn()}`);
} else {
    console.log(`${john.nomcomplet} et ${mark.nomcomplet} ont le même BMI.`);
}


