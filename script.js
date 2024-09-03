document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a[href^="#"]'); // Seleciona todos os links do menu com '#' no href

    links.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault(); // Impede o comportamento padrão do link

        const targetId = this.getAttribute('href'); // Obtém o ID da seção alvo
        const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo

        window.scrollTo({
          top: targetElement.offsetTop, // Define a posição vertical para rolar
          behavior: 'smooth' // Define a rolagem suave
        });
      });
    });
  });