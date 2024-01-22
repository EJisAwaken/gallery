let images = document.querySelectorAll(".photos img");
let modal = document.querySelector(".fenetreModal");
let nature = document.querySelectorAll(".nature");
let city = document.querySelectorAll(".city");
let imgCentral = document.querySelector(".imageCentral img");
let imgChoix = document.querySelectorAll(".choixImage img");
let close = document.querySelector(".fermer");
let naturelink = ["img/nature-1.jpeg", "img/nature-2.jpeg", "img/nature-3.jpeg"];
let citylink = ["img/city-1.jpeg", "img/city-2.jpeg", "img/city-3.jpeg", "img/city-4.jpeg", "img/city-5.jpeg"];

images.forEach((value, key) => {
    value.addEventListener('click', function () {
        modal.style.display ="block";
        imgCentral.src = value.src;
        if (value.src === naturelink[0]){
            nature[0].style.display = "block";
        }

    })





    close.addEventListener("click", function () {
        modal.style.display ="none";
    })

})

imgChoix.forEach(function (value, key) {
    value.addEventListener("click", function () {
        imgCentral.src = value.src;
    })
})