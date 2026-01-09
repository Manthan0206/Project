const header = document.getElementById("header");

function headerscroll() {
	if (window.scrollY >= 20) {
		header.classList.add("fixed-top");
	}else{
		header.classList.remove("fixed-top");
	}
}

window.addEventListener("scroll", headerscroll);
headerscroll();

const displayContent = document.querySelectorAll('.display');
const spanContent = document.querySelectorAll('.span');

displayContent.forEach((button, index) => {
	button.addEventListener("click", function() {
		if (spanContent[index]) {
			spanContent[index].classList.toggle("d-none");
			if (spanContent[index].classList.contains("d-none")) {
				this.textContent = "See more";
			} else{
				this.textContent = "See less";
			}
		}
	});
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        slideTransition: 'linear',
        responsive:{
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            }
        }
    });
});
