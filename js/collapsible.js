document.addEventListener("DOMContentLoaded", function(event) {
	document.querySelectorAll(".collapsible").forEach(item => {
		let next = item.nextElementSibling;
		next.style.maxHeight = item.classList.contains("collapsed") ? "0px" : next.scrollHeight + "px"
		item.addEventListener("click", function() {
			item.classList.toggle("collapsed")
			next.style.maxHeight = item.classList.contains("collapsed") ? "0px" : next.scrollHeight + "px"
		})
	})
})