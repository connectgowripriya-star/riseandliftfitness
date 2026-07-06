 
function toggleMenu() {

    const menu = document.getElementById("navMenu");
    const icon = document.getElementById("hamburger");

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
        icon.innerHTML = "✕";
    } else {
        icon.innerHTML = "☰";
    }

}

// Close menu after clicking any menu item
document.querySelectorAll("#navMenu a").forEach(function(item){

    item.addEventListener("click", function(){

        document.getElementById("navMenu").classList.remove("active");
        document.getElementById("hamburger").innerHTML = "☰";

    });

});

let scrollTimer;

window.addEventListener("scroll",function(){

document.querySelector(".offer-box").classList.add("floating-dim");

document.querySelector(".whatsapp-float").classList.add("floating-dim");

clearTimeout(scrollTimer);

scrollTimer=setTimeout(function(){

document.querySelector(".offer-box").classList.remove("floating-dim");

document.querySelector(".whatsapp-float").classList.remove("floating-dim");

},250);

});

