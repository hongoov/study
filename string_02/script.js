const $root = document.getElementById('root');

const elements = [
	{ subtitle: `2번째 문자는?`, input: { inputText: `문자열 `, placeholder: `문자열을 입력하고 'ENTER'를 누르세요.` } },
	{ subtitle: `CP들은?` },
	{ subtitle: `소문자로 바꾸니`, input: { inputText: `영어를 `, placeholder: `영어를 입력하고 'ENTER'를 누르세요.` } },
	{ subtitle: `길이는?`, input: { inputText: `영어를`, placeholder: `길이를 반환할 문자열을 입력하세요.` } },
	{ subtitle: `<p>A B C D A A B N D D C C E E</p>A를 모두 a로 바꾸면?` }
];

$root.innerHTML = `
	<h1>String 연습하기</h1><br>
	<form id="stringExercise" onsubmit>
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
		}).join('<br>')}
	</form>`;

const strFunctions = [
	(str) => str.charAt(1),
	() => ['CP song', 'EG Lee', 'CP Hong', 'CP Kim', 'HR Long'].filter(item => item.startsWith('CP')),
	(str) => (str ?? '').toLowerCase(),
	(str) => (str ?? '').length,
	() => 'A B C D A A B N D D C C E E'.replace(/A/g, match => match.toLowerCase())
];

$root.addEventListener('change', () => {
	document.querySelectorAll('.result').forEach((result, index) => {
		const inputValue = (document.querySelector(`input[name="str${(index + 1 + '').padStart(2, 0)}"]`)?.value || '').trim();
    	result.textContent = inputValue ? strFunctions[index](inputValue) : strFunctions[index]();
	});
});