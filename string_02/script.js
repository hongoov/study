const $inputEle = document.getElementById('inputEle');

const str01Result = document.querySelector('.str01 > .result');
const str02Result = document.querySelector('.str02 > .result');
const str03Result = document.querySelector('.str03 > .result');
const str04Result = document.querySelector('.str04 > .result');
const str05Result = document.querySelector('.str05 > .result');

const exs = [
	(str) => str.charAt(1),
	() => ['CP song', 'EG Lee', 'CP Hong', 'CP Kim', 'HR Long'].filter(item => item.startsWith('CP')),
	(str) => str.toLowerCase(),
	(str) => str.length,
	() => {
		const str = 'A B C D A A B N D D C C E E';
		return str.replace(/A/g, 'a');
	},
];

$inputEle.addEventListener('change', (e) => {
	const { str01: str01Input, str03: str03Input, str04: str04Input } = e.currentTarget;

	str01Result.textContent = exs[0](str01Input.value);

	str02Result.textContent = exs[1]();

	str03Result.textContent = exs[2](str03Input.value);

	str04Result.textContent = exs[3](str04Input.value);

	str05Result.textContent = exs[4]();
});