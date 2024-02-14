# String 연습 1

const $inputEle = document.getElementById('inputEle');

const str01Result = document.querySelector('.str01 > .result');
const str02Result = document.querySelector('.str02 > .result');
const str03Result = document.querySelector('.str03 > .result');
const str04Result = document.querySelector('.str04 > .result');
const str05Result = document.querySelector('.str05 > .result');

const exs = [
	/**
	 * 1. 문자열을 입력 받아, 그 문자열의 2번째 문자를 출력하는 함수
	 * ### 요구사항
	 * - `str01`이라는 함수명을 다른 이름으로 바꿔주세요. (V)
	 * - html, css, js의 다른 부분은 걷들지 말아주세요. (V)
	 */

	// result 1.
	// function getSecondChar(str) {
	// 		return str.charAt(1);
	// },

	// result 2.
	(str) => str.charAt(1),


	/**
	 * 2. 아래에 주어진 변수에서 `CP`로 시작하는 요소를 모두 추출하는 함수
	 * ### 요구사항
	 * - 조건문(if, else)을 사용하지 않는다. (V)
	 * - html,css,js의 다른 부분은 걷들지 말아주세요.
	 * - const arr = ['CP song','EG Lee', 'CP Hong', 'CP Kim', 'HR Long'];
	 */

	// result 1.
	// () => {
	// 		const arr = ['CP song', 'EG Lee', 'CP Hong', 'CP Kim', 'HR Long'];
	//  	return arr.filter(item => item.startsWith('CP'));
	// },

	// result 2.
	() => ['CP song', 'EG Lee', 'CP Hong', 'CP Kim', 'HR Long'].filter(item => item.startsWith('CP')),
	

	/**
	 * 3. 영어를 입력받아, 모두 소문자로 바꾸어 반환해주는 함수
	 * ### 요구사항
	 * - html,css,js의 다른 부분은 걷들지 말아주세요. (V)
	 */

	// result 1.
	// (str) => {
	//  	return str.toLowerCase();
	// },

	// result 2.
	(str) => str.toLowerCase(),


	/**
	 * 4. 문자열의 길이를 반환하는 함수
	 * @param {string} str
	 * @returns
	 */

	// result 1.
	// (str) => {
	//  	return str.length;
	// },

	// result 2.
	(str) => str.length,


	/**
	 * 5. 입력받은 문자 A를 a로 바꾸는 함수
	 * @param {string} str
	 */

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


==========================================================================================


# String 연습 2

const root = document.getElementById('root');
const h1 = document.createElement('h1');
const form = document.createElement('form');
const fieldset = document.createElement('fieldset');
// root와 구분

h1.textContent = 'String 연습하기';

root.appendChild(h1);
root.appendChild(form);
form.appendChild(fieldset);

const elements = [
	{num: 1, label: '문자열 ', placeholder: '문자열을 입력하고 ENTER를 누르세요.', subtitle: '2번째 문자는?'},
	{num: 2, subtitle: 'CP들은?'},
	{num: 3, label: '영어를 ', placeholder: '영어를 입력하고 ENTER를 누르세요.', subtitle: '소문자로 바꾸니'},
	{num: 4, label: '영어를 ', placeholder: '길이를 반환할 문자열을 입력하세요,', subtitle: '길이는?'},
	{num: 5, label: '영어를 ', subtitle: 'A를 모두 a로 바꾸면?'},
];
// 배열인데 굳이 숫자를 부여한...? --> 불필요한 프로퍼티. num이라는 명칭도 의미가 강하지 않다. label도 좀

elements.forEach((element) => {
    const stringExercise = `
        <h2>String 0${element.num}</h2>
        <section class="str${element.num} strSection">
            <label for="str${element.num}">${element.label || ''}</label>
            ${element.placeholder === undefined ? '' : `<input type="text" name="str${element.num}" placeholder='${element.placeholder}' />`}
			${element.num === 5 ? '<p>A B C D A A B N D D C C E E</p>' : ''}
            <p class="sub-title">${element.subtitle}</p>
            <h4 class="result"></h4>
        </section>
    `;
	// element.num === 5 --> 이 부분

    fieldset.innerHTML += stringExercise;
	// 5번의 재할당이 일어나는데, 한 번에 관리하는 방법은 없을까? --> 불필요한 할당이 4번 발생
	// innerHTML을 한 번만 하고
});

const result = Array.from(document.querySelectorAll('.result'));
// results

const exs = [
	(str) => str.charAt(1),
	() => ['CP song', 'EG Lee', 'CP Hong', 'CP Kim', 'HR Long'].filter(item => item.startsWith('CP')),
	(str) => str.toLowerCase(),
	(str) => str.length,
	() => 'A B C D A A B N D D C C E E'.toLowerCase().replace(/A/g), // --> 오류 수정
];

form.addEventListener('change', (e) => {
	const { str1: str1Input, str3: str3Input, str4: str4Input } = e.currentTarget;

	result.forEach((item, index) => {
		item.textContent = exs[index](index === 0 ? str1Input.value : (index === 2 ? str3Input.value : (index === 3 ? str4Input.value : '')));
	});
	// item 말고 result
});

// ?? 의미, join
// change 할 때마다 무언가 일어남
// 하나 바꾸고 하나 commit