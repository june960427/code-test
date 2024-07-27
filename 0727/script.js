// 문제 설명
// 실수 flo가 매개 변수로 주어질 때, flo의 정수 부분을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ flo ≤ 100
// 입출력 예
// flo	result
// 1.42	1
// 69.32	69
// 입출력 예 설명
// 입출력 예 #1

// 1.42의 정수 부분은 1입니다.
// 입출력 예 #2

// 69.32의 정수 부분은 69입니다.

function solution(flo) {
  return Math.floor(flo);
}

/**
 * 리마인드
 * Math.trunc() 소수점 제거
 * Math.round() 반올림
 * Math.ceil()  올림
 * Math.floor() 내림
 */

// 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

// 예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

// 제한사항
// 문자열 s의 길이 : 50 이하의 자연수
// 문자열 s는 알파벳으로만 이루어져 있습니다.
// 입출력 예
// s	answer
// "pPoooyY"	true
// "Pyy"	false
// 입출력 예 설명
// 입출력 예 #1
// 'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

// 입출력 예 #2
// 'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

// ※ 공지 - 2021년 8월 23일 테스트케이스가 추가되었습니다.

let str = "pPoooyY";

function solution(str) {
  // str 대문자로 변환
  str = str.toUpperCase();
  let p = 0;
  let y = 0;

  // 각 배열을 돌면서 P와 Y 탐색 후 갯수 반환
  for (let char of str) {
    if (char === "P") p++;
    if (char === "Y") y++;
  }

  // p === y의 boolean 값 반환
  return p === y;
}

// 다른 사람 풀이

function numPY(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}

/**
 * str.match(/p/ig)
 * match() [모든 조건에 맞는 것을 찾아 배열로 변환]
 * /p/ [p를 찾는 정규표현식], i [대소문자 구분X], g[전역 검색을 수행]
 */

// 문제 설명
// 문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

// 제한 조건
// s의 길이는 1 이상 5이하입니다.
// s의 맨앞에는 부호(+, -)가 올 수 있습니다.
// s는 부호와 숫자로만 이루어져있습니다.
// s는 "0"으로 시작하지 않습니다.
// 입출력 예
// 예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
// str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.

let s = "-1234";
function solution(s) {
  s = [...s];
  let answer = "";
  if (s[0] === "-") {
    for (let i = 1; i < s.length; i++) {
      answer += s[i];
    }
    return -Number(answer);
  }
  return Number(s.join(""));
}

// 다른사람들이 풀이

function strToInt(str) {
  return str / 1;
}

function strToInt(str) {
  return +str;
}

function strToInt(str) {
  var result = 0;
  //함수를 완성하세요
  result = Number(str);
  return result;
}

/**
 * Number(str) => 앞 자리 -라도 변환가능 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
 */

// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수
// 입출력 예
// N	answer
// 123	6
// 987	24
// 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

function solution(n) {
  return [...String(n)].reduce((prev, cur) => Number(prev) + Number(cur), 0);
}

/**
 * String(null);      // "null" String(undefined); // "undefined"
 * null.toString();      // TypeError undefined.toString(); // TypeError
 * String()은 안전하고 범용적, 타입을 모르거나 null / indefined 일 수 있는 경우에 유용
 * toString()은 객체의 메서드, 객체에서 커스텀 문자열 표현을 정의할 때 유용
 */

// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 제한 조건
// n은 10,000,000,000이하인 자연수입니다.
// 입출력  예
// n	   return
// 12345	[5,4,3,2,1]

function solution(n) {
  n = [...String(n)];
  let arr = [];
  for (let char of n) {
    arr.unshift(Number(char));
  }
  return arr;
}

// 다른 사람 풀이
function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((o) => (o = parseInt(o)));
}

/**
 * .reverse()메소드
 */

// 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

// 제한 조건
// n은 1이상 8000000000 이하인 자연수입니다.
// 입출력 예
//   n	   return
// 118372	 873211

function solution(n) {
  n = [...String(n)].sort((a, b) => b - a);
  return Number(n.join(""));
}

// 다른 사람 풀이
function solution(n) {
  const newN = n + "";
  const newArr = newN.split("").sort().reverse().join("");

  return +newArr;
}

/**
 * 그냥 sort() 쓰고 reverse()하는 방법도 인지
 */

// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한 조건
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.
// 입출력 예
// num	return
// 3	"Odd"
// 4	"Even"

function solution(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

// 문제 설명
// 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 제한 조건
// x는 1 이상, 10000 이하인 정수입니다.
// 입출력 예
// x	return
// 10	true
// 12	true
// 11	false
// 13	false
// 입출력 예 설명
// 입출력 예 #1
// 10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.

// 입출력 예 #2
// 12의 모든 자릿수의 합은 3입니다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수입니다.

// 입출력 예 #3
// 11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아닙니다.

// 입출력 예 #4
// 13의 모든 자릿수의 합은 4입니다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아닙니다.

function solution(x) {
  return x % [...String(x)].map((v) => Number(v)).reduce((a, c) => a + c) === 0;
}

// 다른 사람 풀이
function solution(x) {
  let num = x;
  let sum = 0;
  do {
    sum += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);

  return !(num % sum);
}

function Harshad(n) {
  var result;
  var sum = 0;
  var arr = String(n).split("");
  for (var i = 0; i < arr.length; i++) {
    sum += Number(arr[i]);
  }
  return n % sum == 0 ? true : false;
}

/**
 * map(Number) 기억
 * return 할 때 true : flase 조건 딱히 안적어도 됨
 */

function solution(a, b) {
  let arr = [a, b].sort((a, b) => a - b);
  let arr2 = [...arr];
  if (a == b) {
    return a;
  } else {
    for (let i = arr[0] + 1; i < arr[1]; i++) {
      arr2.push(i);
    }
    return arr2.reduce((a, c) => a + c);
  }
}

// 다른사람 풀이

function adder(a, b, s = 0) {
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}

/**
 * Math 메소드의 활용 방안에 대해 생각해보자
 * sort() 메소드는 기본적으로 요소를 문자열로 변환 후 유니코드 코드 포인트 순서로 정렬 => 변수 a,b가 숫자를 비교할 때 sort((a, b) => a - b) 비교 함수 사용
 */

function solution(x, n) {
  let arr = [];
  for (let i = 1; i < n + 1; i++) arr.push(i * x);
  return arr;
}

// 다른사람 풀이

function solution(x, n) {
  return Array(n)
    .fill(x)
    .map((v, i) => (i + 1) * v);
}

/**
 * arr(), fill() 메소드 리마인드
 * arr(n) [arr.length가 n인 어레이] fill(x) [생성된 배열의 요소를 전부 x로 채움]
 */
