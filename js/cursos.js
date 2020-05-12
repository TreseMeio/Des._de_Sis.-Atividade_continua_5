var slideIndex = 0;
const descricoes = ["Um curso voltado a desenvolvimento de soluções totalmente moderno e inovador. Nosso foco é a linguagem Python. Neste curso você aprenderá as melhores práticas de desenvolvimento e operação necessários para criar soluções de sucesso", "Um curso voltado totalmente à análise e a construir valor a partir de informação fora de conjunto. Neste curso você aprenderá a perceber padrões, verificar possibilidades, prever e descrever as melhores oportunidades para o negócio", "ble" ,"bli"]
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
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  description.innerHTML = descricoes[slideIndex - 1];
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}