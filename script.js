function mostrarFlores() {

    const inicio = document.getElementById("inicio");
    const escena = document.getElementById("escena");
    const musica = document.getElementById("musica");

    inicio.style.display = "none";
    escena.style.display = "flex";

    musica.volume = 0.12;

    setTimeout(() => {
        musica.play().catch(error => {
            console.log("No se pudo reproducir la música:", error);
        });
    }, 500);

}