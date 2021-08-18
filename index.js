document.addEventListener('DOMContentLoaded', function(event) {
    const productos = document.getElementsByClassName('productos');
    // console.log(productos[0]);
    const header = document.getElementsByTagName('header');
    carta.forEach(({titulo, nombre, precio, cantidad, img, descripcion}, index) =>{

        if(titulo){
            generarTitulo(productos[0], titulo);
            generarBoton(header[0],titulo,img);
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

function generarTitulo(productos, tit){
    const titulo = crearElemento('h1', 'titulo', tit );
    titulo.setAttribute('id', tit)
    productos.appendChild(titulo);
}

function generarBoton(header, titulo, img){
    const btn = crearElemento('a', 'nav_bar');
    btn.setAttribute('href', `#${titulo}`);
    btn.appendChild(crearElemento('img', 'a', null, img));
    header.appendChild(btn);
}
// ---------------------CARTA-------------------------
const carta = [
    {
        titulo: 'CERVEZAS',
        img:'img/botones/beer.png'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/cervezas/cerveza1.png',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'judas',
        precio: '1,99 €',
        cantidad: '63 cl',
        img: 'img/productos/cervezas/cerveza1.png',
        descripcion: 'Judas es una cerveza estilo rubia belga, de fuerte color oro, sabor muy intenso y contrapunto de notas dulces y amargas. Cerveza original de Bélgica fue premio “Selección del mundo”.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/cervezas/cerveza1.png',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/cervezas/cerveza1.png',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/cervezas/cerveza1.png',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/cervezas/cerveza1.png',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/cervezas/cerveza1.png',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    },
    {
        nombre: 'indio',
        precio: '3,99 €',
        cantidad: '33 cl',
        img: 'img/productos/cervezas/cerveza1.png',
        descripcion: 'Nuestra cerveza de barril en botella. Cerveza tipo lager de color rubio brillante, espuma consistente blanco marfil y aroma frutal a manzana madura. Una cerveza equilibrada, destacando en su sabor el amargor suave sobre el dulce anisado de la malta.'
    }
]