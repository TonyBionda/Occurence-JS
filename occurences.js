//On cherche dans cet exo à prendre un tableau de nombres et calculer pour chacun son nombre d'occurences

//On crée un tableau de nombres pour tester la fonction
const test = [1, 1, 3, -12, 5, 3, 16, 2, 1, -13, -12, 5, 1, 2, 1, 3];

//On crée une Map (comme en Java) qui va avoir comme clé un nombre, et en valeur son nombre d'occurence
//On va y appliquer un reduce pour parcourir chaque élément du tableau
const answer = new Map([...test.reduce((map, x) => {
    //si la map ne contient pas la clé x, alors on la rajoute, avec 0 comme valeur
    if (!map.get(x))
        map.set(x, 0);
    //on ajoute +1 à la valeur
    map.set(x, map.get(x) + 1);
    //on retourne l'accumulateur
    return map;
    //en dessous, on passe une new Map() comme accumulateur car c'est ce qu'on veut remplir
}, new Map()).entries()].sort((a, b) => a[0] - b[0])); 
//On trie ensuite la map en prenant ses entries (juste au dessus)
//pour cela, on crée un tableau à partir de la map, on le trie puis on en refait une map

console.log(answer)