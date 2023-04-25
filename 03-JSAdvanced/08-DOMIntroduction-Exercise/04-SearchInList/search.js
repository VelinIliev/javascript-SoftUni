function search() {
	const towns = Array.from(document.querySelectorAll('#towns li'));
	const searchText = document.getElementById('searchText');
	const result = document.getElementById('result');
	
	let matches = 0;

	towns.forEach(li => {
		if (li.textContent.includes(searchText.value)){
			li.style.textDecoration = 'underline';
			li.style.fontWeight = 'bold';
			matches += 1
		}
	});
	searchText.value = '';
	result.textContent = `${matches} matches found`;
}
