function init() {
	window.addEventListener('scroll', function(e){
		var distanceY = window.pageYOffset || document.documentElement.scrollTop,
			shrinkOn = 40,
			header = document.getElementById("header");
		if (distanceY > shrinkOn) {
			header.classList.add("smaller");
		} else {
			if (header.classList.contains("smaller")) {
				header.classList.remove("smaller");
			}
		}
	});
}
window.onload = init();
