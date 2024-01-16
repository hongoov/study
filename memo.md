# 2024-01-15

## 변수(Variable)란?
- 하나의 값을 저장할 수 있는 저장공간을 의미한다.
- 여기서 말하는 하나의 값이란 숫자나 문자, 문자열, 논리 값 등을 말한다.


<br>


## 변수 선언 방식 : var, let, const
- var : 변수를 재선언할 수도, 재할당할 수도 있는 선언 방식이다.
- let : 변수 재선언은 되지 않으나, 재할당하는 것은 가능한 선언 방식이다.
- const : 변수 선언시 반드시 할당을 해야하며, 재선언 및 재할당 모두 불가능한 선언 방식이다.

```
<!-- 함수의 재선언 -->
var num = 100;
var num = 200;

<!-- 함수의 재할당 -->
let birth = 930206;
birth = 981218;
```

<br>

> 호이스팅(hoisting)이란, 변수 및 함수의 선언이 해당 스코프 영역 최상단으로 옮겨지는 것을 말한다.


<br>


## Git 동작 방법 및 명령어 모음
<img src="https://wikidocs.net/images/page/149672/01.02.01.jpg">
(<a href="https://wikidocs.net/149672">이미지 출처 및 자세한 내용 확인</a>)
<br>
<br>

- Working directory : 이력관리 대상(tracked) 파일들이 위치하는 영역
- Staging area : 이력을 기록할, 다시 말해 commit할 대상 파일들이 위치하는 영역
- Repository : 이력이 기록된(committed) 파일들이 위치하는 영역

<br>

### * 명령어 모음
- git status : git의 현재 상태 확인한다. Staging Area, UnStage Area 에 있는 파일 등을 확인 할 수 있다.
- git add : Working directory 에서 파일/폴더를 Staging Area(index)에 등록하여 git으로 관리를 시작한다.
- git commit : Staging Area의 모든 파일을 커밋한다.
- git log : commit 히스토리를 보여준다.
- git push origin (main) : 로컬 저장소의 commit 내역을 remote 저장소로 전송한다.


<br>
<br>
<br>


# 2024-01-16

## 원시 값이란 무엇인가?
> 원시 값이란, 객체(object)가 아니면서 함수(method) 또는 속성(property)도 가지지 않는 데이터이다.

- string : 문자를 표현하는 데 사용되며, '', ""로 작성된다.
- number : 숫자를 표현하고 다룰 때 사용한다.
- boolean : 논리적인 데이터 유형이며, true/false의 값 만을 가질 수 있다.
- undefined : 선언을 한 후 값을 할당하지 않은 변수의 결과 값이다.
- null : 어떤 값이 비어있음을 표현하는 원시 값이다. (값을 할당하지 않은 것과 비어있는 것을 구분할 것)
- bigint : 숫자로 표현하기에는 너무 큰 정수 값을 저장하는 데 사용할 수 있다.*
- symbol : 고유하고 변경 불가능한 원시 값이며 객체의 속성 키로 사용할 수 있다.*


<br>


## truthy & falsy한 값이란?
> truthy는 '참 같은 값'을, falsy는 '거짓 같은 값'을 의미한다. 다시 말해, boolean(true/false)을 기대하는 문맥(if, &&, 연산자 등)에서 truthy는 true로 falsy는 false로 평가가 되는 값이다.

<br>

- falsy한 값<br>

| 값 | 타입 | 설명 |
| :---: | :---: | :---: |
| null | Null | 아무런 값도 없음을 의미 |
| undefined | Undefined | 값을 할당하지 않은 변수의 결과 값 |
| false | Boolean | false 키워드 |
| NaN | Number | 숫자가 아님을 의미 |
| 0 | Number | 0(0.0과 0x0 등도 포함) |
| -0 | Number | 0(-0.0과 -0x0 등도 포함) |
| 0n | BigInt | 매우 큰 값 |
| "" | String | 비어있는 문자열의 값('', ``도 포함) |

<br>

- truthy한 값<br>
: 위의 falsy한 값으로 정의된 것이 아니면 모두 참 같은 값으로 평가한다.<br><br>
(ex) true, { }, [ ], 42, "0", "false", 3.14...












