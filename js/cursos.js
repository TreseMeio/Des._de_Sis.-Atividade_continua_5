var slideIndex = 0;
const descricoes = [
    {
        action: "ADS",
        description: "Um curso voltado a desenvolvimento de soluções totalmente moderno e inovador. Nosso foco é a linguagem Python. Neste curso você aprenderá as melhores práticas de desenvolvimento e operação necessários para criar soluções de sucesso"
    },
    {
        action: "BD",
        description: "Um curso voltado totalmente à análise e a construir valor a partir de informação fora de conjunto. Neste curso você aprenderá a perceber padrões, verificar possibilidades, prever e descrever as melhores oportunidades para o negócio"
    },
    {
        action: "GTI",
        description: "Com um diploma de Gestão de T.I. você prova que esá pronto(a) para tomar a frente em situações difíceis, pois possúi a capacidade e competência necessárias para tal. Com isso passa a estar disposto(a) a ser lembado!"
    },
    {
        action: "SI",
        description: "Este curso é voltado para aqueles(as) que desejam entender mais a fundo sobre a comunicação entre sistemas e seus afins. Neste curso você aprenderá as ferramentas necessárias para lidar com redes de computadores, segurança, algorítimos e protocolos de comunicação, entre outros."
    }
];
showSlides();

function showSlides() {
    var i;
    var description = document.getElementById('descricao');
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    description.innerHTML = descricoes[slideIndex - 1].description;
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function consultar() {
    window.location.href = `${descricoes[slideIndex - 1].action}.html`;
}