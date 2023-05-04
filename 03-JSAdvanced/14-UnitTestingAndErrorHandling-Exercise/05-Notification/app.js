function notify(message) {
	const hiddenDiv = document.getElementById('notification');

	hiddenDiv.textContent = message;
	hiddenDiv.style.display = "block"
	
	hiddenDiv.addEventListener("click", () => {
		hiddenDiv.style.display = "none"
	})
}