function randomColor() {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);

	return `rgb(${r},${g},${b})`;
}
// funkcja, która losuje kolory rgb 

document.querySelector('.click-btn').onclick = function () {
	const changeColor = randomColor();
	document.body.style.backgroundColor = changeColor;
};
// pobieramy przycisk i dodajemy funkcję na klik która wywoła funkcję randomColor i zmieni styl tła 