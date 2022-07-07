//funciones JS

const saludar = function( nombre ) {
    return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola, ${ nombre }`;

console.log( saludar2('vegeta'));
console.log( saludar3('goku'));


const getUser = () => {
    return {
        uid: 'yugj',
        username: 'jordan34'
    }
}

console.log( getUser())

//Tarea
//1. Transformar a una funcion de flecha
//2. Tiene que retornar un objeto implicito
//3. Pruebas

const getUsuarioActivo = ( nombre ) => 
    ({
        uid: 'AGHK',
        username: nombre
    })

const usuarioActivo = getUsuarioActivo('Jordan');
console.log( usuarioActivo)