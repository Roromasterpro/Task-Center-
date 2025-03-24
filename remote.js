document.addEventListener("DOMContentLoaded", function () {
    // Menu déroulant
    //const menuIcon = document.querySelector(".menu-icon");
   // menuIcon.addEventListener("click", function () {
        //alert("Menu à venir !");
   // });

    // Animation au survol des icônes du footer
    const footerIcons = document.querySelectorAll(".footer-icon");
    footerIcons.forEach(icon => {
        icon.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.2)";
        });
        icon.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Chargement progressif des images
   // const images = document.querySelectorAll("img");
   // images.forEach(img => {
    //img.style.opacity = "0";
  //           img.onload = () => {
 //            img.style.transition = "opacity 0.5s";
    //img.style.opacity = "1";
       //};
   // });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const menu = document.querySelector(".menu");

    menuIcon.addEventListener("click", function () {
        menu.style.display = (menu.style.display === "block") ? "none" : "block";
    });

    // Cacher le menu si l'on clique ailleurs sur la page
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            menu.style.display = "none";
        }
    });
});

