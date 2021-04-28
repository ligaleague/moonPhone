// let bg = document.getElementById("bg");
// let moon = document.getElementById("moon");
// let mountain = document.getElementById("mountain");
// let road = document.getElementById("road");
// let text = document.getElementById("text");
// let blackPhone = document.getElementById("#blackmamba")

// window.addEventListener('scroll', function(){
//     var value = window.scrollY;
//     bg.style.top = value * 0.5 + "px";
//     moon.style.left = -value * 0.5 + "px";
//     mountain.style.top = -value * 0.15 + "px";
//     road.style.top = value * 0.15 + "px";
//     text.style.top = value * 1 + "px";
// })
// blackmamba.addEventListener("click", function(){
//     console.log("succet")
// })
function openCity(evt, cityName) {
    // Объявить все переменные
    var i, tabcontent, tablinks;
  
    // Получить все элементы с class="tabcontent" и скрываем их
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Получить все элементы с class="tablinks" и удалить класс "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Показать текущую вкладку и добавить "active" класс по ссылке, открывшей вкладку
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }