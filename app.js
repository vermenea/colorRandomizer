function randomColor() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);

	return `rgb(${r},${g},${b})`;
}
// funkcja, która losuje kolory rgb 


const changeBtn = document.querySelector('.click-btn');
// pobranie przycisku 

changeBtn.addEventListener('click', function () {
	const changeColor = randomColor();
	document.body.style.backgroundColor = changeColor;
});
// dodajemy nasłuchiwanie na przycisk, potem tworzymy funkcję changeColor, która wywoła funkcję randomColor na kolorze tła 