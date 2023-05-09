document.addEventListener('DOMContentLoaded', function(){
    let imagenes =[
        {img: "images/Archive/Collserola Canvas 1.jpg"},
		{img: "images/Archive/Collserola Canvas 2.jpg"},
		{img: "images/Archive/Collserola Canvas 3.jpg"},
		{img: "images/Archive/Collserola Canvas 4.jpg"},
		{img: "images/Archive/Collserola Canvas 5.jpg"},
		{img: "images/Archive/Decentralizing Banksy 1.jpg"},
		{img: "images/Archive/Hand in Hand 1.jpg"},
		{img: "images/Archive/Peiskos 1.jpg"},
		{img: "images/Archive/Peiskos 2.jpg"},
		{img: "images/Archive/Peiskos 3.jpg"},
		{img: "images/Archive/Peiskos 4.jpg"},
		{img: "images/Archive/Peiskos 5.jpg"},
        {img: "images/Archive/R-C Chair 1.jpg"},
        {img: "images/Archive/R-C Chair 2.jpg"},       
        {img: "images/Archive/R-C Chair 3.jpg"},       
        {img: "images/Archive/R-C Chair 4.jpg"},       
        {img: "images/Archive/R-C Chair 5.jpg"},       
        {img: "images/Archive/R-C Chair 6.jpg"},       
        {img: "images/Archive/R-C Chair 7.jpg"},       
        {img: "images/Archive/River's voice 1.jpg"},
        {img: "images/Archive/River's voice 2.jpg"},
        {img: "images/Archive/River's voice 3.jpg"},
        {img: "images/Archive/Sea duality 1.jpg"},
        {img: "images/Archive/Sea duality 2.jpg"},
        {img: "images/Archive/Sea duality 3.jpg"},
        {img: "images/Archive/Sea duality 4.jpg"},
        {img: "images/Archive/Sea duality 5.jpg"},
        {img: "images/Archive/Senseless 1.jpg"},
        {img: "images/Archive/Senseless 2.jpg"},
        {img: "images/Archive/Senseless 3.jpg"},
        {img: "images/Archive/Senseless 4.jpg"},
        {img: "images/Archive/Senseless 5.jpg"},
        {img: "images/Archive/Senseless 6.jpg"},
        {img: "images/Archive/Senseless 7.jpg"},
        {img: "images/Archive/Swell 1.jpg"},
        {img: "images/Archive/Swell 2.jpg"},
        {img: "images/Archive/Swell 3.jpg"},
        {img: "images/Archive/Swell 4.jpg"},
        {img: "images/Archive/The Textile Ecoliving 1.jpg"},
        {img: "images/Archive/The Textile Ecoliving 2.jpg"},
        {img: "images/Archive/The Textile Ecoliving 3.gif"},
        {img: "images/Archive/The Textile Ecoliving 3.jpg"},
        {img: "images/Archive/The Textile Ecoliving 4.jpg"},
        {img: "images/Archive/The Textile Ecoliving 5.jpg"},
        {img: "images/Archive/The Textile Ecoliving 6.jpg"},
        {img: "images/Archive/The Textile Ecoliving 7.jpg"},
        {img: "images/Archive/The Textile Ecoliving 8.jpg"},
        {img: "images/Archive/The Textile Ecoliving 9.jpg"},
        {img: "images/Archive/The Textile Ecoliving 10.jpg"},
        {img: "images/Archive/The Textile Ecoliving 11.jpg"},
        {img: "images/Archive/The Textile Ecoliving 12.jpg"},
        {img: "images/Archive/The Textile Ecoliving 13.jpg"},
        {img: "images/Archive/The Textile Ecoliving 14.jpg"},
        {img: "images/Archive/The Textile Ecoliving 15.jpg"},
        {img: "images/Archive/The Textile Ecoliving 16.jpg"},
        {img: "images/Archive/The Textile Ecoliving 17.jpg"},
        {img: "images/Archive/Threshold Connections 1.jpg"},
        {img: "images/Archive/Threshold Connections 2.jpg"},
        {img: "images/Archive/Threshold Connections 3.jpg"},
        {img: "images/Archive/Timelines 1.jpg"},
        {img: "images/Archive/Timelines 2.jpg"},
        {img: "images/Archive/Timelines 3.jpg"},
        {img: "images/Archive/Timelines 4.jpg"},
        {img: "images/Archive/Timelines 5.jpg"},
        {img: "images/Archive/Timelines 6.jpg"},
        {img: "images/Archive/Timelines 7.jpg"},
        {img: "images/Archive/Timelines 8.jpg"},
        {img: "images/Archive/Timelines 9.jpg"},
        {img: "images/Archive/Timelines 10.jpg"},
        {img: "images/Archive/Timelines 11.jpg"},
        {img: "images/Archive/Walking the Void 1.jpg"},
        {img: "images/Archive/Walking the Void 2.jpg"},
        {img: "images/Archive/Walking the Void 3.jpg"},
        {img: "images/Archive/Walking the Void 4.jpg"},
        {img: "images/Archive/Walking the Void 5.jpg"},
        {img: "images/Archive/Walking the Void 6.jpg"},
        {img: "images/Archive/Walking the Void 7.jpg"},
        {img: "images/Archive/Walking the Void 8.jpg"},
        {img: "images/Archive/Walking the Void 9.jpg"},
        {img: "images/Archive/Walking the Void 10.jpg"},
        {img: "images/Archive/Walking the Void 11.jpg"},
        {img: "images/Archive/Walking the Void 12.jpg"},
    ]
   const nameimg =["Collserola Canvas" ,
        "Collserola Canvas" ,
        "Collserola Canvas" ,
        "Collserola Canvas" ,
        "Collserola Canvas" ,
        "Descentralizing Banksy" ,
        "Hand in Hand" , 
        "Peikos" ,
        "Peikos" ,
        "Peikos" ,
        "Peikos" ,
        "Peikos" ,
        "Peikos",
        "R-C Chair",
        "R-C Chair",
        "R-C Chair",
        "R-C Chair",
        "R-C Chair",
        "R-C Chair",
        "R-C Chair",
        "River's voice",
        "River's voice",
        "River's voice",
        "Sea duality",
        "Sea duality",
        "Sea duality",
        "Sea duality",
        "Sea duality",
        "Senseless",
        "Senseless",
        "Senseless",
        "Senseless",
        "Senseless",
        "Senseless",
        "Senseless",
        "Swell",
        "Swell",
        "Swell",
        "Swell",
        "The Textile Ecoliving",
        "The Textile Ecoliving",
        "The Textile Ecoliving",
        "The Textile Ecoliving",
        "The Textile Ecoliving",
        "The Textile Ecoliving",
        "The Textile Ecoliving",
        "The Textile Ecoliving",
        "The Textile Ecoliving",
        "The Textile Ecoliving",
        "The Textile Ecoliving",
        "The Textile Ecoliving",
        "The Textile Ecoliving",
        "The Textile Ecoliving",
        "The Textile Ecoliving",
        "The Textile Ecoliving",
        "The Textile Ecoliving",
        "The Textile Ecoliving",
        "Threshold Connections",
        "Threshold Connections",
        "Threshold Connections",
        "Timelines",
        "Timelines",
        "Timelines",
        "Timelines",
        "Timelines",
        "Timelines",
        "Timelines",
        "Timelines",
        "Timelines",
        "Timelines",
        "Timelines",
        "Walking the Void",
        "Walking the Void",
        "Walking the Void",
        "Walking the Void",
        "Walking the Void",
        "Walking the Void",
        "Walking the Void",
        "Walking the Void",
        "Walking the Void",
        "Walking the Void",
        "Walking the Void",
        "Walking the Void",
    ]
    let contador = 0
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeria_imagenes = document.querySelectorAll('.masonry-container img')
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
        document.getElementById("nameslideshow").innerHTML=nameimg[contador]
    })

    

    Array.from(galeria_imagenes).forEach(img =>{
        img.addEventListener('click', event => {
            const imagen_seleccionada = +event.target.dataset.imgMostrar
            img_slideshow.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.opacity = 1
            overlay.style.visibility = 'visible'
            document.getElementById("nameslideshow").innerHTML=nameimg[imagen_seleccionada]
        })
    })

    document.querySelector('.btn_cerrar').addEventListener('click', () => {
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })

    

})




let ubicacionPrincipal =window.pageYOffset;
window.onscroll =function(){
	let Desplazamiento_Actual = window.pageYOffset;
	if(ubicacionPrincipal >= Desplazamiento_Actual){
		document.getElementById('hero').style.top = '0';
	}
	else{
		document.getElementById('hero').style.top = '-200px';
	}
	ubicacionPrincipal = Desplazamiento_Actual;
}



