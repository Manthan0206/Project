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