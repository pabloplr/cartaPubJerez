document.addEventListener('DOMContentLoaded', function(event) {
    console.log(document.getElementsByClassName('btn_info'));
    document.querySelectorAll('.btn_explicacion').forEach(element => {
        element.addEventListener('click', function(event){
            console.log('mostrando menu');
            document.getElementById('explicacion').classList.remove('oculto');
        });
    });
    document.getElementById('cerrar_explicacion').addEventListener('click', function(event){
        document.getElementById('explicacion').classList.add('oculto');
    });
});