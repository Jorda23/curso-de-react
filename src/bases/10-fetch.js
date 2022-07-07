const apikey= 'eZtpecJTqi1I3Ywvf5mMsBmwvUW1XQpC'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`);

peticion 
.then( resp => resp.json())
.then(( { data } ) =>  {
    const { url } = data.images.original;

    const img = document.createElement('img');
    img.src = url;

    document.body.append( img );
})
.catch( console.warn );