# 2024-01-15

## 변수(Variable)란?
- 하나의 값을 저장할 수 있는 저장공간을 의미한다.
- 여기서 말하는 하나의 값이란 숫자나 문자, 문자열, 논리 값 등을 말한다.


<br>


## 변수 선언 방식 : var, let, const
- var : 변수를 재선언할 수도, 재할당할 수도 있는 선언 방식이다.
- let : 변수 재선언은 되지 않으나, 재할당하는 것은 가능한 선언 방식이다.
- const : 변수 선언시 반드시 할당을 해야하며, 재선언 및 재할당 모두 불가능한 선언 방식이다.

<br>

```
<!-- 함수의 재선언 -->
var num = 100;
var num = 200;

<!-- 함수의 재할당 -->
let birth = 930206;
birth = 981218;
```

<br>

```
호이스팅(hoisting)이란, 변수 및 함수의 선언이 해당 스코프 영역 최상단으로 옮겨지는 것을 말한다.
```


<br>


## Git 동작 방법 및 명령어 모음
<img src="https://wikidocs.net/images/page/149672/01.02.01.jpg">
<center><a href="https://wikidocs.net/149672" style="font-style: italic; font-size: 12px">이미지 출처 및 자세한 내용 확인</a></center>
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
```
원시 값이란, 객체(object)가 아니면서 함수(method) 또는 속성(property)도 가지지 않는 데이터이다.
```

- string : 문자를 표현하는 데 사용되며, '', ""로 작성된다.
- number : 숫자를 표현하고 다룰 때 사용한다.
- boolean : 논리적인 데이터 유형이며, true/false의 값 만을 가질 수 있다.
- undefined : 선언을 한 후 값을 할당하지 않은 변수의 결과 값이다.
- null : 어떤 값이 비어있음을 표현하는 원시 값이다. (값을 할당하지 않은 것과 비어있는 것을 구분할 것)
- bigint : 숫자로 표현하기에는 너무 큰 정수 값을 저장하는 데 사용할 수 있다.*
- symbol : 고유하고 변경 불가능한 원시 값이며 객체의 속성 키로 사용할 수 있다.*


<br>


## truthy & falsy한 값이란?
```
truthy는 '참 같은 값'을, falsy는 '거짓 같은 값'을 의미한다. 다시 말해, boolean(true/false)을 기대하는 문맥(if, &&, 연산자 등)에서 truthy는 true로 falsy는 false로 평가가 되는 값이다.
```

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


<br>


## 스크립트의 실행 시점 조절, async와 defer 속성

<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FQP5X6%2FbtrnDnS5vIv%2FG8okRNfciVSbojXBwD3gb1%2Fimg.png">
<center><a href="https://gobae.tistory.com/110" style="font-style: italic; font-size: 12px">이미지 출처 및 자세한 내용 확인</a></center>

<br>
<br>

일반적으로 브라우저는 HTML 파일을 읽어온 후, 위에서부터 아래로 한 줄씩 해석을 시작한다. 만약 중간에 script 파일이 있을 경우에는, 해당 파일을 모두 해석하기 전까지 나머지 HTML 렌더를 일시적으로 멈춘다. 여기에서 DOM 생성을 중단하지 않고, 스크립트를 동시에 내려받게 할 수 있는 방법으로 async와 defer가 있다.

<br>

```
<script src="./script.js"></script>

<script src="./script.js" async></script>

<script src="./script.js" defer></script>
```

<br>

### DOM 생성 중단이 일어난다면 어떤 문제가 발생하는가?
1. 스크립트 태그 아래에 있는 DOM 요소는 대기하므로, 해당 요소들에 접근할 수 없다.
2. 스크립트 실행 전까지 사용자는 스크립트 아래의 콘텐츠들을 볼 수 없으며, 페이지를 정상적으로 이용할 수 없다.
3. 스크립트의 용량이 크다면 페이지 Block 현상이 발생한다.
4. querySelector와 같이 DOM을 직접적으로 조작하여 핸들러 등을 추가하는 행위가 불가능하다.

    ** 4번의 경우 나중에 자세한 내용을 추가로 공부할 것 **

<br>

### async 속성
- 스크립트의 다운로드를 백그라운드에서 진행한다.
- 스크립트가 다운로드 즉시 실행되며, 스크립트 실행 중에는 DOM 생성을 중단한다.
- DOMContentLoaded 이벤트는 async 스크립트가 실행되기 이전에도 실행될 수 있다. (정확한 예측이 불가능)
- async 스크립트는 서로를 기다리지 않으므로, HTML에서 선언 순서와 실행 순서가 무관하다.
- 방문자 수 카운트 혹은 광고 스크립트 등과 같이 독립적으로 작동하는 스크립트에 적절하다.

<br>
* DOMContentLoaded : HTML 문서가 완전히 로드되고 실행되었을 때 발생하는 이벤트이다.

<br>

### defer 속성
- 스크립트의 다운로드를 백그라운드에서 진행한다.
- 다운로드가 완료되어도 DOM 생성을 마칠 때까지 지연된 후 스크립트를 실행한다.
- DOM 생성이 완료되고, DOMContentLoaded 이벤트가 발생하기 전에 script가 순서대로 실행된다.
- defer에 의해 지연되던 script가 모두 실행되면, DOMContentLoaded 이벤트가 발생한다.
- defer 속성은 외부 스크립트에만 유효하므로, src 속성이 없다면 defer를 이용할 수 없다.
- DOM 전체가 필요한 스크립트나 실행 순서가 중요한 상황에 적절하다.

<br>

### 정리
```
- async와 defer 스크립트는 다운로드 시에 페이지 렌더링(DOM 생성)을 막지 않는다.
- async와 defer의 적절한 사용은 사용자의 UX를 향상시킬 수 있다.
```






























