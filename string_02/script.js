const root = document.getElementById('root');
const h1 = document.createElement('h1');
const form = document.createElement('form');
const fieldset = document.createElement('fieldset');

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

    fieldset.innerHTML += stringExercise;
});

const result = Array.from(document.querySelectorAll('.result'));

const exs = [
	(str) => str.charAt(1),
	() => ['CP song', 'EG Lee', 'CP Hong', 'CP Kim', 'HR Long'].filter(item => item.startsWith('CP')),
	(str) => str.toLowerCase(),
	(str) => str.length,
	() => 'A B C D A A B N D D C C E E'.toLowerCase().replace(/A/g),
];

form.addEventListener('change', (e) => {
	const { str1: str1Input, str3: str3Input, str4: str4Input } = e.currentTarget;

	result.forEach((item, index) => {
		item.textContent = exs[index](index === 0 ? str1Input.value : (index === 2 ? str3Input.value : (index === 3 ? str4Input.value : '')));
	}); 
});