document.addEventListener('DOMContentLoaded', function(event) {
    const productos = document.getElementsByClassName('productos');
    // console.log(productos[0]);
    const buttons = document.getElementById('buttons');
    // const buttons = crearElemento('div', 'buttons');
    // header.appendChild(buttons);
    carta.forEach(({titulo, nombre, precio, cantidad, img, giff, descripcion}, index) =>{

        if(titulo){
            generarTitulo(productos[0], titulo, giff);
            generarBoton(buttons,titulo,img);
            return;    
        } 
        generarProducto(productos[0], precio, cantidad, nombre, img, index);
    });

    document.querySelectorAll('.btn_explicacion').forEach(element => {
        element.addEventListener('click', function(event){
            // console.log('mostrando menu');
            const explicacion = document.getElementById('explicacion');
            explicacion.classList.remove('oculto');
            explicacion.getElementsByClassName('precio')[0].innerHTML = carta[element.id].precio;
            explicacion.getElementsByClassName('cantidad')[0].innerHTML = carta[element.id].cantidad;
            explicacion.getElementsByClassName('nombre')[0].innerHTML = carta[element.id].nombre;
            explicacion.getElementsByClassName('descripcion')[0].innerHTML = carta[element.id].descripcion;

        });
    });

    document.getElementById('cerrar_explicacion').addEventListener('click', function(event){
        document.getElementById('explicacion').classList.add('oculto');
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

});

function crearElemento(elemento, clase ,value = null, src = null){
    const container = document.createElement(elemento);
    container.classList.add(clase);
    if(value){
        container.innerHTML = value;
    }
    if(src){
        container.setAttribute('src', src);
    }
    return container;
}

function generarProducto(productos, precio_txt, cantidad_txt, nombre_txt, img, index){

    const producto =  crearElemento('div', 'producto');
    const header_producto =  crearElemento('div', 'header_producto');
    const btn_explicacion =  crearElemento('div', 'btn_explicacion');
    btn_explicacion.setAttribute('id', index);
    const btn_info =  crearElemento('img', 'btn_info', null, "img/botones/information-button.png");
    const info =  crearElemento('div', 'info');
    const precio =  crearElemento('p', 'precio', precio_txt); 
    const cantidad =  crearElemento('p', 'cantidad', cantidad_txt); 
    const img_producto_container =  crearElemento('div', 'img_producto');
    const img_producto =  crearElemento('img', 'a', null, img);
    const nombre =  crearElemento('h2', 'nombre', nombre_txt); 
    console.log('info: ' + info);
    productos.appendChild(producto);
    producto.appendChild(header_producto);
    producto.appendChild(img_producto_container);
    img_producto_container.appendChild(img_producto);
    producto.appendChild(nombre);
    header_producto.appendChild(btn_explicacion);
    btn_explicacion.appendChild(btn_info)
    header_producto.appendChild(info);
    info.appendChild(precio);
    info.appendChild(cantidad);
}

// function generarTitulo(productos, tit){
//     const titulo = crearElemento('h1', 'titulo', tit );
//     titulo.setAttribute('id', tit)
//     productos.appendChild(titulo);
// }
function generarTitulo(productos, tit, giff){
    const titulo = crearElemento('img', 'titulo',null, giff);
    titulo.setAttribute('id', tit)
    productos.appendChild(titulo);
}

function generarBoton(buttons, titulo, img){
    const btn = crearElemento('a', 'nav_bar');
    btn.setAttribute('href', `#${titulo}`);
    btn.appendChild(crearElemento('img', 'a', null, img));
    buttons.appendChild(btn);
}
// ---------------------CARTA-------------------------
const carta = [
    {
        titulo: 'CERVEZAS',
        img:'img/botones/beer.png',
        giff: 'img/titulos/01.gif'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/001.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/002.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/003.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        titulo: 'CAFES',
        img:'img/botones/beer.png',
        giff: 'img/titulos/02.gif'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/004.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/005.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/006.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/007.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/008.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/009.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        titulo: 'INFUSIONES',
        img:'img/botones/beer.png',
        giff: 'img/titulos/03.gif'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/010.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/011.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        titulo: 'REFRESCOS',
        img:'img/botones/beer.png',
        giff: 'img/titulos/04.gif'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/012.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/013.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/014.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/015.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/016.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/017.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/018.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/019.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/020.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/021.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/022.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/023.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/024.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        titulo: 'COMIDA',
        img:'img/botones/beer.png',
        giff: 'img/titulos/05.gif'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/025.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/026.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/027.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        titulo: 'POSTRES',
        img:'img/botones/beer.png',
        giff: 'img/titulos/06.gif'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/028.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/029.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/030.PNG',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    }
]