const Imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agrega-imagen')
const contenedorLight = document.querySelector('.imagen-light')

Imagenes.forEach(Imagen =>{
    Imagen.addEventListener('click', ()=>{
     aparecerImagen()
        

    }) 
}) 

const aparecerImagen = (Imagen)=>{
imagenesLight.src =Imagen
contenedorLight.classList.toggle('show')
imagenesLight.classList.toggle('showImage')

}