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