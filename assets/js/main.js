// Verifica o scroll da página
window.onscroll = function() {
  scrollFunction();
};

// Função para exibir ou ocultar o botão de rolagem
function scrollFunction() {
  var scrollToTopButton = document.getElementById("scrollToTopButton");
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
}

// Função para fazer a rolagem suave para o topo da página
function scrollToTop() {
  document.body.scrollTop = 0; // Para navegadores Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}


function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');
  
    const img = document.querySelector('.chanceTheme');
  
    if(html.classList.contains('light')){
      img.setAttribute('name', 'moon-outline');
    } else {
      img.setAttribute('name', 'sunny-outline');
    }
  };

  function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}




