// MOTOR DE WHATSAPP
document.addEventListener('submit', function(e) {
    if (e.target && e.target.id === 'orderForm') {
        e.preventDefault(); 
        const nombre = document.getElementById('nombre').value;
        const cantidad = document.getElementById('cantidad').value;
        const direccion = document.getElementById('direccion').value;
        const detalles = document.getElementById('detalles') ? document.getElementById('detalles').value : '';
        const miTelefono = "525669188409"; 
        
        let mensaje = `\u2728 *NUEVO PEDIDO KUKULCAO* \u2728\n` +
                      `---------------------------------------\n\n` +
                      `\ud83d\udc64 *Nombre:* ${nombre}\n` +
                      `\ud83c\udf6b *Pedido:* ${cantidad}\n` +
                      `\ud83d\udccd *Dirección:* ${direccion}\n`;
                        
        if(cantidad === 'Brownie Personalizado ($150-$180)' && detalles.trim() !== '') {
            mensaje += `\n\ud83d\udcdd *Detalles de Personalización:*\n_${detalles}_\n`;
        }
        
        mensaje += `\n---------------------------------------\n` +
                   `\ud83c\udf10 _Enviado desde el sitio web_`;
        
        const url = `https://wa.me/${miTelefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    }
});

// ANIMACIONES AL HACER SCROLL
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // Remueve la clase para que se anime de nuevo
            }
        });
    }, {
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    });

    const elementsToAnimate = document.querySelectorAll('.scroll-animate');
    elementsToAnimate.forEach(el => observer.observe(el));

    // Lógica para autoseleccionar producto desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const producto = urlParams.get('producto');
    if (producto) {
        const selectCantidad = document.getElementById('cantidad');
        if (selectCantidad) {
            if (producto === '1') selectCantidad.value = '1 Brownie ($25)';
            if (producto === '6') selectCantidad.value = 'Caja de 6 ($135)';
            if (producto === 'personalizado' || producto === '12') selectCantidad.value = 'Brownie Personalizado ($150-$180)';
        }
    }
    
    // Lógica para mostrar/ocultar el campo de detalles
    const selectCantidad = document.getElementById('cantidad');
    const containerDetalles = document.getElementById('container-detalles');
    if(selectCantidad && containerDetalles) {
        selectCantidad.addEventListener('change', function() {
            if(this.value === 'Brownie Personalizado ($150-$180)') {
                containerDetalles.style.display = 'block';
            } else {
                containerDetalles.style.display = 'none';
            }
        });
        
        // Ejecutar al inicio por si ya está seleccionado
        if(selectCantidad.value === 'Brownie Personalizado ($150-$180)') {
            containerDetalles.style.display = 'block';
        }
    }
});
