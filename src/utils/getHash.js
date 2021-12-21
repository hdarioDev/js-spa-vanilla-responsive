
// si solo retornaremos un elemento  no usamos  brackets
//location.hash = #/1/
const getHash = () =>
    //convertir a areglo y elimina '/' -> ouput ['','1',''] get position 1
    //si no hay posicion mandar al home
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'

export default getHash

