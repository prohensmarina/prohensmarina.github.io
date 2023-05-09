document.addEventListener('DOMContentLoaded', function(){
    let imagenes =[
        {img: 'Archive/Peiskos 1.jpg'},
        {img: 'Archive/Peiskos 2.gif'},
        {img: 'Archive/Peiskos 3.jpg'},
        {img: 'Archive/Peiskos 4.jpg'},
        {img: 'Archive/Peiskos 5.jpg'},
        {img: 'Archive/R-C Chair 1.jpg'},
        {img: 'Archive/R-C Chair 2.jpg'},
        {img: 'Archive/R-C Chair 3.jpg'},
        {img: 'Archive/R-C Chair 4.jpg'},
        {img: 'Archive/R-C Chair 5.jpg'},
        {img: 'Archive/Sea duality 1.jpg'},
        {img: 'Archive/Sea duality 2.jpg'},
        {img: 'Archive/Sea duality 3.jpg'},
        {img: 'Archive/Sea duality 4.jpg'},
        {img: 'Archive/Sea duality 5.jpg'},
        {img: 'Archive/Senseless 1.jpg'},
        {img: 'Archive/Senseless 2.jpg'},
        {img: 'Archive/Senseless 3.jpg'},
        {img: 'Archive/Senseless 4.jpg'},
        {img: 'Archive/Senseless 5.jpg'},
        {img: 'Archive/Timelines 1.jpg'},
        {img: 'Archive/Timelines 2.jpg'},
        {img: 'Archive/Timelines 3.jpg'},
        {img: 'Archive/Timelines 4.jpg'},
        {img: 'Archive/Timelines 5.jpg'},
    ]
    let contador = 0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeria_imagenes = document.querySelectorAll('.galeria img')
    const img_slideshow = document.querySelector('.slideshow img')

    contenedor.addEventListener('click', function(event){
        let atras = contenedor.querySelector('.atras'),
            adelante =contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == atras) {
            if (contador > 0) {
                img.src = imagenes[contador -1].img
                contador--
            } else{
                img.src = imagenes[imagenes.length -1].img
                contador = imagenes.length -1
            }
        } else if (tgt == adelante) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1].img
                contador++
            } else{
                img.serc = imagenes[0].img
                contador = 0
            }
        }
    })

    Array.from(galeria_imagenes).forEach(img =>{
        img.addEventListener('click', event => {
            const imagen_seleccionada = +event.target.dataset.imgMostrar
            img_slideshow.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
        })
    })

    document.querySelector('.btn_cerrar').addEventListener('click', () => {
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })



})