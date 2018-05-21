function toggleMenu(){
    var element = document.querySelector(".hamburgare_meny");
    element.classList.toggle("show");

    element = document.querySelector("main");
    element.classList.toggle("fade");
}