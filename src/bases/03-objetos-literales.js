const persona = {
    nombre: 'Tony', 
    apellido: 'Start',
    edad: 50,
    direccion: {
        ciudad: 'New york',
        zip: 67895467,
        lat: 14.45678,
        lng: 65.89756
    }
};

const persona2 = { ...persona };
persona2.nombre = 'Goku';

console.log( persona2 )
console.log( persona );