document.querySelectorAll('.semaforo').forEach(div => {
    div.addEventListener('click', () => {
       // Primero quitamos 'active' de todos
        document.querySelectorAll('.semaforo').forEach(d => {
            d.classList.remove('active');
        });
        // Luego activamos solo el clickeado
        div.classList.add('active');
        });
});