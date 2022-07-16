document.addEventListener("DOMContentLoaded", function(){
    var backgroundDiv = document.getElementById("bg");
    var firstDiv = document.getElementById("one");

    backgroundDiv.addEventListener("click", function(){
        firstDiv.classList.toggle("active");
        if(firstDiv.className == "active"){
            backgroundDiv.style.backgroundColor = "#ED9B40";
            firstDiv.style.backgroundColor = "#FFEEDB";
        }
        else{
            backgroundDiv.style.backgroundColor = "#FFEEDB";
            firstDiv.style.backgroundColor = "#ED9B40";
        }
    });
});