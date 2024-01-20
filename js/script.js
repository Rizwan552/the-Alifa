
            // Add this script to handle hover effect
            document.addEventListener("DOMContentLoaded", function () {
                const textContainers = document.querySelectorAll('.image-text-container');
        
                textContainers.forEach(container => {
                    container.addEventListener('mouseover', function () {
                        textContainers.forEach(otherContainer => {
                            if (otherContainer !== container) {
                                otherContainer.classList.add('hidden');
                            }
                        });
                    });
        
                    container.addEventListener('mouseout', function () {
                        textContainers.forEach(otherContainer => {
                            otherContainer.classList.remove('hidden');
                        });
                    });
                });
            });


 //swipper.js
 var copy = document.querySelector(".logos-slide").cloneNode(true);
 document.querySelector(".logos").appendChild(copy);


 var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    autoplay: {
        delay: 3000, // Set the delay in milliseconds (e.g., 5000 for 5 seconds)
        disableOnInteraction: false, // Set to false if you want the autoplay to continue even when the user interacts with the slider
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            pagination:false,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
  