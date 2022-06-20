function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }