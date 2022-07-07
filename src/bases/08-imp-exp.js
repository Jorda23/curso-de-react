//import { heroes } from './data/heroes'
//import heroes, { owners } from '../data/heroes'
import heroes from '../data/heroes'

//console.log( owners );
//FIND
export const getHeroeId = (valor) => {
    return heroes.find(heroes => heroes.id === valor);
}

//FILTER
//const getHeroeOwner = (owner) => {
  //  return heroes.filter(heroes => heroes.owner === owner);
//}

//console.log( getHeroeOwner('Marvel'));
//console.log( getHeroeId(4));
