/**
 * 
    길이가 같은 두 문자열 str1과 str2가 주어집니다.
    두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.
    제한사항
    1 ≤ str1의 길이 = str2의 길이 ≤ 10
    str1과 str2는 알파벳 소문자로 이루어진 문자열입니다.
    입출력 예
    str1	str2	result
    "aaaaa"	"bbbbb"	"ababababab"
 */

/* 내 풀이 */
let aString = "aaaaa";
let aArray = aString.split("");
let bString = "bbbbb";
let bArray = bString.split("");

bArray.forEach((v, i) => aArray.splice(i * 2 + 1, 0, v));
console.log(aArray.join(""));

/* 다른 사람 풀이 */
let value = [...aString].map((v, i) => v + [...bString][i]).join("");
console.log(value);

/**
 * string => spread문법 == split("")과 같음
 * splice(넣을 자리, 0, 넣을 값)
 */

// 문제 설명
// 문자들이 담겨있는 배열 arr가 주어집니다. arr의 원소들을 순서대로 이어 붙인 문자열을 return 하는 solution함수를 작성해 주세요.
//
// 제한사항
// 1 ≤ arr의 길이 ≤ 200
// arr의 원소는 전부 알파벳 소문자로 이루어진 길이가 1인 문자열입니다.
// 입출력 예
// arr	result
// ["a","b","c"]	"abc"

let arr = ["a", "b", "c"];
function solution(arr) {
  return '"' + arr.join("") + '"';
}

console.log(solution(arr));

// 문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 100
// my_string은 영소문자로만 이루어져 있습니다.
// 1 ≤ k ≤ 100
// 입출력 예
// my_string	k	result
// "string"	3	"stringstringstring"
// "love"	10	"lovelovelovelovelovelovelovelovelovelove"

let str = "love";
let int = 10;

function solution(str, int) {
  let answer = [];
  for (let i = 0; i < int; i++) {
    answer.push(str);
  }
  return answer.join("");
}

console.log(solution(str, int));

// 다른 사람 풀이
// function solution(my_string, k) {
//   if (typeof my_string === "string") my_string.repeat(k);
//   return;
// }

/**
 * repeat 메소드
 * string.repeat()
 */

// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.

// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.

// 단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.

// 제한사항
// 1 ≤ a, b < 10,000
// 입출력 예
// a	b	result
// 9	91	991
// 89	8	898
// 입출력 예 설명
// 입출력 예 #1

// a ⊕ b = 991 이고, b ⊕ a = 919 입니다. 둘 중 더 큰 값은 991 이므로 991을 return 합니다.
// 입출력 예 #2

// a ⊕ b = 898 이고, b ⊕ a = 889 입니다. 둘 중 더 큰 값은 898 이므로 898을 return 합니다.

function solution(a, b) {
  var answer = 0;

  if (parseInt(String(a) + String(b)) > parseInt(String(b) + String(a))) {
    answer = parseInt(String(a) + String(b));
  } else {
    answer = parseInt(String(b) + String(a));
  }

  return answer;
}

// 다른 사람 풀이
function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`));
}

/**
 * Math.max 메소드 => 최대값,
 * let numbers = [5, 2, 8, 1, 9];
 * console.log(Math.max(...numbers)); 와 같이도 사용가능
 *
 * 벡틱 활용법도 숙지
 */

// 연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.

// 12 ⊕ 3 = 123
// 3 ⊕ 12 = 312
// 양의 정수 a와 b가 주어졌을 때, a ⊕ b와 2 * a * b 중 더 큰 값을 return하는 solution 함수를 완성해 주세요.

// 단, a ⊕ b와 2 * a * b가 같으면 a ⊕ b를 return 합니다.

// 제한사항
// 1 ≤ a, b < 10,000
// 입출력 예
// a	b	result
// 2	91	364
// 91	2	912
// 입출력 예 설명
// 입출력 예 #1

// a ⊕ b = 291 이고, 2 * a * b = 364 입니다. 둘 중 더 큰 값은 364 이므로 364를 return 합니다.
// 입출력 예 #2

// a ⊕ b = 912 이고, 2 * a * b = 364 입니다. 둘 중 더 큰 값은 912 이므로 912를 return 합니다.
// ※ 2023년 04월 27일 입출력 예 설명이 수정되었습니다.

function solution(a, b) {
  var answer = Math.max(`${a}${b}`, 2 * parseInt(a) * parseInt(b));
  return answer;
}

console.log(solution("1", "23"));

// 다른사람 풀이

function solution(a, b) {
  let num1 = parseInt(a + "" + b);
  let num2 = 2 * a * b;
  return num1 > num2 ? num1 : num2;
}

/**
 * parseInt(a + "" + b); 스트링 변환하는 다른 방법
 * 삼항 연산자 리마인드
 */
