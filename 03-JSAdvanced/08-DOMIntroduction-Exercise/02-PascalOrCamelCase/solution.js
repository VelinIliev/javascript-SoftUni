function solve() {
	const text = document.getElementById('text');
	const namingConvention = document.getElementById('naming-convention');
	const result = document.getElementById('result');

	let resultWord = '';
	if (namingConvention.value === "Pascal Case"){
		let data = text.value.split(" ");
		data.forEach(element => {
			let word = (element[0].toUpperCase()).concat(element.substring(1).toLowerCase());
			resultWord += word;
		});
		result.textContent = resultWord
	} else if (namingConvention.value === "Camel Case"){
		let data = text.value.split(" ");
		for (let i = 0; i < data.length; i++) {
			let element = data[i]
			let word = ''
			if (i === 0){
				word = element.toLowerCase();
			} else {
				word = (element[0].toUpperCase()).concat(element.substring(1).toLowerCase());
			}
			resultWord += word;
		}
		result.textContent = resultWord
	} else {
		result.textContent = "Error!"
	}
}