import router from './routes'
//VALOR DEL NAVEGADOR ES WINDOW(MANEJADOR DE EVENTOS)
window.addEventListener('load', router)//cuando la pagina carge
window.addEventListener('hashchange', router)

window.addEventListener('load', () => {

    const switchBtn = document.querySelector('#switch')
    var body = document.body;


    console.log("switchBtn ", switchBtn)


    switchBtn.addEventListener('click', () => {
        console.log("add dark")

        document.body.classList.toggle('dark')
        console.log("event switchBtn ", switchBtn)
        switchBtn.classList.toggle('active')

        //body.classList.add("dark");

    })
})
