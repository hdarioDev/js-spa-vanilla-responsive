//IMPORTAR LOS TEMPLATES Y PAGES PARA HACER RENDER EN LA APP

import Header from '../templates/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
//SI NO PONES .JS BABEL LO INTERPRETA 
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'

const routes = {
    '/': Home,//path inicial
    '/:id': Character,//valor dinamico al entrar a un personaje
    '/contact': 'Contact'//mostrar elemento
}

const router = async () => {
    //RUTAS PARA HACER RENDER
    const header = null || document.getElementById('header')//nulo si no se encuentra
    const content = null || document.getElementById('content')

    //MANDAR  TEMPLATE HEADER A LA VISTA HTML
    header.innerHTML = await Header() // esperar al render   
    let hash = getHash()
    console.log("hash ", hash);
    let route = await resolveRoutes(hash)
    let render = routes[route] ? routes[route] : Error404
    content.innerHTML = await render()
}

export default router

