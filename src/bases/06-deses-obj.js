//Desestructuacion de objetos
//Asignacion destructuracion

const persona = {
    nombre: 'Jordan',
    edad: 67,
    clave: 'hjkol3'
};

//const { edad, clave, nombre, } = persona;

//console.log( edad );
//console.log( clave );
//console.log( nombre );

const useContext = ({ clave, nombre, edad} ) => {

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 78754,
            lng: -7865467,
        }
    }

};

const {nombreClave, anios, latlng: { lat,lng}} = useContext( persona );

console.log(nombreClave, anios)
console.log(lat,lng)