const $inputEle1 = document.getElementById('inputEle1');
const $inputEle2 = document.getElementById('inputEle2');

const str01Result = document.querySelector('.str01 > .result');
const str02Result = document.querySelector('.str02 > .result');
const str03Result = document.querySelector('.str03 > .result');

const exs = [
	/**
	 * 문자열를 입력 받아, 그 문자열의 2번째 문자를 출력하는 함수
	 * ### 요구사항
	 * - `str01`이라는 함수명을 다른 이름으로 바꿔주세요. (V)
	 * - html,css,js의 다른 부분은 걷들지 말아주세요. (V)
	 */
	function getSecondChar(str) {
		return str.charAt(1);
	},
	/**
	 * 아래에 주어진 변수에서 `CP`로 시작하는 요소를 모두 추출하는 함수
	 * ### 요구사항
	 * - 조건문(if, else)을 사용하지 않는다. (V)
	 * - html,css,js의 다른 부분은 걷들지 말아주세요. 		// ==> 확인 필요
	 * > arr 변수
	 * ```
	 * const arr = ['CP song','EG Lee', 'CP Hong', 'CP Kim', 'HR Long'];
	 * ```
	 *
	 */
	// () => {
		// Str 2번째
		// const arr = ['CP song', 'EG Lee', 'CP Hong', 'CP Kim', 'HR Long'];
		// return arr.filter(item => item.startsWith('CP'));
	// },
	() => ['CP song', 'EG Lee', 'CP Hong', 'CP Kim', 'HR Long'].filter(item => item.startsWith('CP')),
	/**
	 * 영어를 입력받아, 모두 소문자로 바꾸어 반환해주는 함수
	 * ### 요구사항
	 * - html,css,js의 다른 부분은 걷들지 말아주세요. (V)
	 */
	(str) => {
		// Str 3번째
		return str.toLowerCase()
	},
];

$inputEle1.addEventListener('submit', (e) => {
	e.preventDefault();

	const str01Input = e.target.str01;
	str01Result.textContent = exs[0](str01Input.value);
	
	str02Result.textContent = exs[1]();
});

$inputEle2.addEventListener('submit', (e) => {
	e.preventDefault();

	const str03Input = e.target.str03;
	str03Result.textContent = exs[2](str03Input.value);
});