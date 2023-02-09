document.addEventListener("DOMContentLoaded", function(event) {
	let scrollpos = localStorage.getItem('scrollpos'+document.location.pathname)
	if (scrollpos) {
		document.querySelector('{#:selector:#}').scrollTo(0, scrollpos)
	}
})
window.onbeforeunload = function(e) {
	localStorage.setItem('scrollpos'+document.location.pathname, document.querySelector('{#:selector:#}').scrollTop)
}
