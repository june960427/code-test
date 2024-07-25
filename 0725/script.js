// 문제 설명
// 정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 2 ≤ num ≤ 100
// 2 ≤ n ≤ 9
// 입출력 예
// num	n	result
// 98	2	1
// 34	3	0
// 입출력 예 설명
// 입출력 예 #1

// 98은 2의 배수이므로 1을 return합니다.
// 입출력 예 #2

// 32는 3의 배수가 아니므로 0을 return합니다.

function solution(num, n) {
  var answer = 0;
  if (num % n === 0) {
    answer = 1;
  } else {
    answer = 0;
  }

  return answer;
}

// 다른 사람 풀이
function solution(num, n) {
  return num % n === 0 ? 1 : 0;
}

function solution(num, n) {
  return num % n ? 0 : 1;
}

/**
 * 간단한 조건문은 삼항 연산자 사용하는것도 인지
 * num % n ? 0 : 1; 와 같이 0과 1을 사용할 때는 boolean 활용하는것도 인지
 */

// 정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 10 ≤ number ≤ 100
// 2 ≤ n, m < 10
// 입출력 예
// number	n	m	result
// 60	2	3	1
// 55	10	5	0
// 입출력 예 설명
// 입출력 예 #1

// 60은 2의 배수이면서 3의 배수이기 때문에 1을 return합니다.
// 입출력 예 #2

// 55는 5의 배수이지만 10의 배수가 아니기 때문에 0을 return합니다.

function solution(number, n, m) {
  return number % n === 0 && number % m === 0 ? 1 : 0;
}

// 다른 사람 풀이

function solution(number, n, m) {
  return +!(number % n || number % m);
}

/**
 * 논리 연산자 리마인드
 * js에서 flase -> 0 true -> 1
 * || 하나라도 0이 아니면 true
 * !(연산자) 연산 결과를 뒤집기
 * + 당항 플러스 연산자 => 피연산자를 숫자로 변형 flase -> 0 true -> 1
 */

// 문제 설명
// 양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.
// 제한사항
// 1 ≤ n ≤ 100
// 입출력 예
// n	result
// 7	16
// 10	220
// 입출력 예 설명
// 입출력 예 #1
// 예제 1번의 n은 7로 홀수입니다. 7 이하의 모든 양의 홀수는 1, 3, 5, 7이고 이들의 합인 1 + 3 + 5 + 7 = 16을 return 합니다.
// 입출력 예 #2
// 예제 2번의 n은 10으로 짝수입니다. 10 이하의 모든 양의 짝수는 2, 4, 6, 8, 10이고 이들의 제곱의 합인 22 + 42 + 62 + 82 + 102 = 4 + 16 + 36 + 64 + 100 = 220을 return 합니다.

function solution(n) {
  let arr = Array.from({ length: n }, (v, i) => i + 1);
  if (n % 2 === 0) {
    let even = arr.filter((v) => v % 2 === 0).map((v) => v * v);
    let sum = 0;
    for (let i = 0; i < even.length; i++) {
      sum += even[i];
    }
    return sum;
  } else {
    let odd = arr.filter((v) => v % 2 === 1);
    let sum = 0;
    for (let i = 0; i < odd.length; i++) {
      sum += odd[i];
    }
    return sum;
  }
}

// 다른사람 풀이

function solution(n) {
  const array = Array(n)
    .fill()
    .map((x, idx) => idx + 1);
  return n % 2 === 0
    ? array.reduce((a, b) => (b % 2 === 0 ? a + Math.pow(b, 2) : a), 0)
    : array.reduce((a, b) => (b % 2 === 0 ? a : a + b), 0);
}

/**
 * Array(i).fill() => Array(i) 길이가 i인 빈 배열 생성, fill() 빈 배열을        undefined로 채움
 * Math.pow(base, exponent) => ex) Math.pow(b,2) b의 제곱을 계산
 * reduce
 * acc arr[0] 값 -> 나머지 undefined (콜백 함수의 반환 값 또는 이전 순회에서의 최종 결과값. 초기 값(initialValue)이 제공된 경우 첫 번째 순회에서는  initialValue로 설정된다.)
 * cur => 현재 순회 중인 배열의 요소 (arr[0] 이후 나머지)
 * i => 현재 순회 중인 배열의 요소 인덱트
 * arr => reduce 함수가 호출된 배열
 */

// 문자열에 따라 다음과 같이 두 수의 크기를 비교하려고 합니다.

// 두 수가 n과 m이라면
// ">", "=" : n >= m
// "<", "=" : n <= m
// ">", "!" : n > m
// "<", "!" : n < m
// 두 문자열 ineq와 eq가 주어집니다. ineq는 "<"와 ">"중 하나고, eq는 "="와 "!"중 하나입니다. 그리고 두 정수 n과 m이 주어질 때, n과 m이 ineq와 eq의 조건에 맞으면 1을 아니면 0을 return하도록 solution 함수를 완성해주세요.

// 제한 사항
// 1 ≤ n, m ≤ 100
// 입출력 예
// ineq	eq	n	m	result
// "<"	"="	20	50	1
// ">"	"!"	41	78	0
// 입출력 예 설명
// 입출력 예 #1

// 20 <= 50은 참이기 때문에 1을 return합니다.
// 입출력 예 #2

// 41 > 78은 거짓이기 때문에 0을 return합니다.

/**
 * eneq => < >
 * eq => = !
 * ">", "=" : n >= m
 * "<", "=" : n <= m
 * ">", "!" : n > m
 * "<", "!" : n < m
 */

function solution(ineq, eq, n, m) {
  if (eq === "!") {
    if (ineq === ">") {
      return n > m ? 1 : 0;
    }
    if (ineq === "<") {
      return n < m ? 1 : 0;
    }
  } else if (eq === "=") {
    if (ineq === ">") {
      return n >= m ? 1 : 0;
    }
    if (ineq === "<") {
      return n <= m ? 1 : 0;
    }
  }
  return 0;
}

//다른 사람 코드

const operations = {
  ">=": (n, m) => n >= m,
  "<=": (n, m) => n <= m,
  ">!": (n, m) => n > m,
  "<!": (n, m) => n < m,
};

function solution(ineq, eq, n, m) {
  const op = operations[ineq + eq];
  return Number(op(n, m));
}

/**
 * arr['str'] 대괄호 표기법
 * Number(boolean) => true = 1 false = 0
 * 여러 코드 구조를 익히는 중
 * 보이는데로 코드 옮겨 적지말고 경우의 수를 줄이는 것도 연습 필요
 */

// 두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// -1,000 ≤ a, b ≤ 1,000

// 입출력 예
// a	b	flag	result
// -4	7	true	3
// -4	7	false	-11
// 입출력 예
// 입출력 예 #1

// 예제 1번에서 flag가 true이므로 a + b = (-4) + 7 = 3을 return 합니다.
// 입출력 예 #2

// 예제 2번에서 flag가 false이므로 a - b = (-4) - 7 = -11을 return 합니다.

function solution(a, b, flag) {
  if (flag) {
    return a + b;
  }
  return a - b;
}

//다른 사람 풀이

function solution(a, b, flag) {
  return flag ? a + b : a - b;
}

let arr = Array.from({ length: n });
