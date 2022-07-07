import { getHeroeId } from './bases/08-imp-exp';
import heroes from './data/heroes';

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout( () => {
//         //Tarea
//         //Impoten el
//         const P1 = getHeroeId(2);
//         // console.log(hereo)
//         resolve( P1 );
//     }, 2000)
// });

// promesa.then( (hereo)=>{
//     console.log('Hereo', hereo);
// })
const getHeroeIdAsync = (id) => {

    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            //Tarea
            //Impoten el
            const P1 = getHeroeId(id);
            if( P1 ){
                resolve( P1 );
            }else{
                reject('No se puedo encontrar el hereo');
            }
        }, 2000)
    });
    
};

// getHeroeIdAsync(5)
//     .then( heroe => console.log('Hereo', heroe))
//     .catch( err => console.warn(err))

getHeroeIdAsync(5)
    .then( console.log )
    .catch( console.warn )


