
var imagenes = ["Blender_logo.png","rigging1.png","rigging2.jpeg","os.jpg","rigging3.jpg","rigging4.jpg","model.jpg"];
var cont = 0;

function carrousel(contenedor){
    contenedor.addEventListener("click", e => {
        let before = contenedor.querySelector(".before"),
            next = contenedor.querySelector(".next"),
            img = contenedor.querySelector("img"),
            tgt = e.target;

            if (tgt == before){
                if(cont> 0){
                    img.src= imagenes[cont - 1];
                    cont--;
                } else{
                    img.src = imagenes[imagenes.length-1];
                    cont = imagenes.length -1;
                }
            }else if(tgt == next){
                if(cont < imagenes.length -1){
                    img.src= imagenes[cont +1];
                    cont++;
                } else{
                    img.src = imagenes[0];
                    cont = 0;
                }
            }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector(".contenedor");

    carrousel(contenedor);
})