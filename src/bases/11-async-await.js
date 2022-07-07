// const getImagen = async() =>{
//     return 'https://developers.giphy.com/docs/api/endpoint#random';
// }

// getImagen().then( console.log )


//es necesario trabajar con funciones async con await
const getImagen = async() =>{

    try{
        const apikey= 'eZtpecJTqi1I3Ywvf5mMsBmwvUW1XQpC'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
        const { data } = await resp.json();
    
        const { url } = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append( img );
    } catch(error){
        console.error(error)
    }
   
}

getImagen().then( console.log )
