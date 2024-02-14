const $root = document.getElementById('root');

const elements = [
	{ subtitle: `2번째 문자는?`, input: { inputText: `문자열 `, placeholder: `문자열을 입력하고 'ENTER'를 누르세요.` } },
	{ subtitle: `CP들은?` },
	{ subtitle: `소문자로 바꾸니`, input: { inputText: `영어를 `, placeholder: `영어를 입력하고 'ENTER'를 누르세요.` } },
	{ subtitle: `길이는?`, input: { inputText: `영어를`, placeholder: `길이를 반환할 문자열을 입력하세요.` } },
	{ subtitle: `<p>A B C D A A B N D D C C E E</p>A를 모두 a로 바꾸면?` }
];

$root.innerHTML = `
	<h1>String 연습하기</h1>
	<form id="stringExercise" onsubmit="formHandler(e)">
		${elements.map(({ subtitle, input }, index) => {
			const inputSection = input
				? `<label for="str${(index + 1 + '').padStart(2, 0)}">${input.inputText}</label>
				   <input type="text" name="str${(index + 1 + '').padStart(2, 0)}" placeholder="${input.placeholder}" />`
				: '';

			return `
				<h2>String ${(index + 1 + '').padStart(2, 0)}</h2>
				<section class="str${(index + 1 + '').padStart(2, 0)} strSection">
				${inputSection}
          		<p class="sub-title">${subtitle}</p>
          		<h4 class="result"></h4>
        		</section>
			`
		}).join('')}
	</form>`;

function formHandler (e) {
	e.preventDefault();
};

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