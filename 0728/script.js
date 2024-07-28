// 문제 설명
// 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

// 제한 사항
// n은 0 이상 3000이하인 정수입니다.
// 입출력 예
// n	return
// 12	28
// 5	6
// 입출력 예 설명
// 입출력 예 #1
// 12의 약수는 1, 2, 3, 4, 6, 12입니다. 이를 모두 더하면 28입니다.

// 입출력 예 #2
// 5의 약수는 1, 5입니다. 이를 모두 더하면 6입니다.

function solution(n) {
  let ans = 0;
  for (let i = 1; i < n + 1; i++) {
    if (n % i === 0) {
      ans += i;
    }
  }
  return ans;
}

// 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.

// 제한사항
// 3 ≤ n ≤ 1,000,000
// 입출력 예
// n	result
// 10	3
// 12	11
// 입출력 예 설명
// 입출력 예 #1

// 10을 3으로 나눈 나머지가 1이고, 3보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 3을 return 해야 합니다.
// 입출력 예 #2

// 12를 11로 나눈 나머지가 1이고, 11보다 작은 자연수 중에서 문제의 조건을 만족하는 수가 없으므로, 11을 return 해야 합니다.

function solution(n) {
  for (let i = 0; i < n; i++) {
    if (n % i === 1) return i;
  }
}

// 다른 사람 풀이

function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}

/**
 * while문 사용
 * ++증감 연산자
 */

// 문제 설명
// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 제한 사항
// n은 1이상, 50000000000000 이하인 양의 정수입니다.
// 입출력 예
// n	return
// 121	144
// 3	-1
// 입출력 예 설명
// 입출력 예#1
// 121은 양의 정수 11의 제곱이므로, (11+1)를 제곱한 144를 리턴합니다.

// 입출력 예#2
// 3은 양의 정수의 제곱이 아니므로, -1을 리턴합니다.

function solution(n) {
  for (let i = 1; i <= n; i++) {
    if (Math.pow(i, 2) === n) {
      return Math.pow(i + 1, 2);
    }
  }
  return -1;
}

// String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

// 제한 사항
// seoul은 길이 1 이상, 1000 이하인 배열입니다.
// seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
// "Kim"은 반드시 seoul 안에 포함되어 있습니다.
// 입출력 예
// seoul	return
// ["Jane", "Kim"]	"김서방은 1에 있다"

let ex = ["Jane", "Kim"];
function solution(seoul) {
  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === "Kim") {
      return i;
    }
  }
}

// 다른 사람 풀이

function findKim(seoul) {
  var idx = seoul.indexOf("Kim");

  return "김서방은 " + idx + "에 있다";
}

/**
 * indexOf() 메소드 리마인드
 * findIndex() 메소드
 */

// 1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될 때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.

// 1-1. 입력된 수가 짝수라면 2로 나눕니다.
// 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
// 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
// 예를 들어, 주어진 수가 6이라면 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어 총 8번 만에 1이 됩니다. 위 작업을 몇 번이나 반복해야 하는지 반환하는 함수, solution을 완성해 주세요. 단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.

// 제한 사항
// 입력된 수, num은 1 이상 8,000,000 미만인 정수입니다.
// 입출력 예
// n	result
// 6	8
// 16	4
// 626331	-1
// 입출력 예 설명
// 입출력 예 #1
// 문제의 설명과 같습니다.

// 입출력 예 #2
// 16 → 8 → 4 → 2 → 1 이 되어 총 4번 만에 1이 됩니다.

// 입출력 예 #3
// 626331은 500번을 시도해도 1이 되지 못하므로 -1을 리턴해야 합니다.

function solution(num) {
  let count = 0;
  while (num != 1 && count < 500) {
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    count++;
  }
  return num === 1 ? count : -1;
}

/**
 * while()문 리마인드
 */

// 문제 설명
// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// absolutes의 길이는 1 이상 1,000 이하입니다.
// absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
// signs의 길이는 absolutes의 길이와 같습니다.
// signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
// 입출력 예
// absolutes	signs	result
// [4,7,12]	[true,false,true]	9
// [1,2,3]	[false,false,true]	0
// 입출력 예 설명
// 입출력 예 #1

// signs가 [true,false,true] 이므로, 실제 수들의 값은 각각 4, -7, 12입니다.
// 따라서 세 수의 합인 9를 return 해야 합니다.
// 입출력 예 #2

// signs가 [false,false,true] 이므로, 실제 수들의 값은 각각 -1, -2, 3입니다.
// 따라서 세 수의 합인 0을 return 해야 합니다.

function solution(abs, signs) {
  return abs.map((v, i) => (signs[i] ? v : -v)).reduce((a, c) => a + c, 0);
}

// 다른 사람풀이

function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}

/**
 * reduce() 메소드 활용방안에 대해 다시 한 번 생각해보기
 */

// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ numbers의 길이 ≤ 9
// 0 ≤ numbers의 모든 원소 ≤ 9
// numbers의 모든 원소는 서로 다릅니다.
// 입출력 예
// numbers	result
// [1,2,3,4,6,7,8,0]	14
// [5,8,4,0,6,7,9]	6
// 입출력 예 설명
// 입출력 예 #1

// 5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.
// 입출력 예 #2

// 1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.

function solution(numbers) {
  let ans = 0;
  for (let i = 0; i <= 9; i++) {
    if (numbers.find((v) => v === i) === undefined) {
      ans += i;
    }
  }
  return ans;
}

// 다른 사람 풀이

function solution(numbers) {
  let answer = 0;

  for (let i = 0; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}

/**
 * includes()메소드 리마인드
 * find() => 첫번째 true 값만 반환
 */

// array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// 제한사항
// arr은 자연수를 담은 배열입니다.
// 정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
// divisor는 자연수입니다.
// array는 길이 1 이상인 배열입니다.
// 입출력 예
// arr	divisor	return
// [5, 9, 7, 10]	5	[5, 10]
// [2, 36, 1, 3]	1	[1, 2, 3, 36]
// [3,2,6]	10	[-1]
// 입출력 예 설명
// 입출력 예#1
// arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.

// 입출력 예#2
// arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.

// 입출력 예#3
// 3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.

function solution(arr, div) {
  var ans = [];
  for (let int of arr) {
    if (int % div === 0) ans.push(int);
  }
  return ans.length === 0 ? [-1] : ans.sort((a, b) => a - b);
}

// 다른 사람 풀이

function solution(arr, divisor) {
  var answer = arr.filter((v) => v % divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}

/**
 * filter() 메소드 리마인드
 * 새로운 배열이 필요할 때는 여러 메소드 생각해보기
 */

// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
// 입출력 예
// arr	return
// [4,3,2,1]	[4,3,2]
// [10]	[-1]

function solution(arr) {
  return arr.length === 1 ? [-1] : arr.filter((v) => v !== Math.min(...arr));
}

// 다른 사람 풀이
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (arr.length < 1) return [-1];
  return arr;
}

// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// phone_number는 길이 4 이상, 20이하인 문자열입니다.
// 입출력 예
// phone_number	return
// "01033334444"	"*******4444"
// "027778888"	"*****8888"

let ex3 = "01033334444";

function solution(n) {
  let ans = "";
  for (let i = 0; i < n.length; i++) {
    ans += i < n.length - 4 ? "*" : n[i];
  }
  return ans;
}

// 다른 사람 풀이

function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

function hide_numbers(s) {
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  return result;
}

/**
 * 정규 표현식 /\d(?=\d{4})/g
 * \d 모든 숫자와 일치
 * (?=\d{4}) 현재 위치 뒤에 정확히 4개의 숫자가 있는지 확인
 * g 문자열 전체에서 모든 일치 항목을 찾음
 *
 * 2번 케이스 => 반복문을 돌지 않아도 되기 때문에 효율적, 가독성 좋음
 * repeat() 메소드 리마인드, slice() 리마인드
 */

// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.
// 입출력 예
// n	return
// 3	"수박수"
// 4	"수박수박"

function solution(n) {
  let ans = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      ans += "수";
    } else {
      ans += "박";
    }
  }
  return ans;
}

// 다른 사람 풀이

const waterMelon = (n) => "수박".repeat(n).slice(0, n);

// 문제 설명
// 길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.

// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// 제한사항
// a, b의 길이는 1 이상 1,000 이하입니다.
// a, b의 모든 수는 -1,000 이상 1,000 이하입니다.
// 입출력 예
// a	b	result
// [1,2,3,4]	[-3,-1,0,2]	3
// [-1,0,1]	[1,0,-1]	-2
// 입출력 예 설명
// 입출력 예 #1

// a와 b의 내적은 1*(-3) + 2*(-1) + 3*0 + 4*2 = 3 입니다.
// 입출력 예 #2

// a와 b의 내적은 (-1)*1 + 0*0 + 1*(-1) = -2 입니다.

function solution(a, b) {
  return a.reduce((a, c, i) => a + c * b[i], 0);
}

// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.
// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"

function solution(s) {
  return s.length % 2 === 0
    ? s[s.length / 2 - 1] + s[s.length / 2]
    : s[Math.trunc(s.length / 2)];
}

// 문제 설명
// 두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ left ≤ right ≤ 1,000
// 입출력 예
// left	right	result
// 13	17	43
// 24	27	52
// 입출력 예 설명
// 입출력 예 #1

// 다음 표는 13부터 17까지의 수들의 약수를 모두 나타낸 것입니다.
// 수	약수	약수의 개수
// 13	1, 13	2
// 14	1, 2, 7, 14	4
// 15	1, 3, 5, 15	4
// 16	1, 2, 4, 8, 16	5
// 17	1, 17	2
// 따라서, 13 + 14 + 15 - 16 + 17 = 43을 return 해야 합니다.
// 입출력 예 #2

// 다음 표는 24부터 27까지의 수들의 약수를 모두 나타낸 것입니다.
// 수	약수	약수의 개수
// 24	1, 2, 3, 4, 6, 8, 12, 24	8
// 25	1, 5, 25	3
// 26	1, 2, 13, 26	4
// 27	1, 3, 9, 27	4
// 따라서, 24 - 25 + 26 + 27 = 52를 return 해야 합니다.

function solution(left, right) {
  let ans = 0;
  let count = 0;

  for (let i = left; i <= right; i++) {
    count = 0;
    for (let j = 0; j <= i; j++) {
      if (i % j === 0) count++;
    }
    ans += count % 2 === 0 ? i : -i;
  }
  return ans;
}

// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.
// 입출력 예
//     s	      return
// "Zbcdefg"	"gfedcbZ"

function solution(s) {
  return [...s].sort().reverse().join("");
}

// 다른 사람 코드

function solution(s) {
  return s
    .split("")
    .sort((a, b) => {
      if (a > b) return -1;
      if (b > a) return 1;
      return 0;
    })
    .join("");
}

/**
 * sort()메소드
 * 음수 반환 시 a를 앞으로
 * 양수 반환 시 b를 앞으로
 * 0 반환 시 순서 유지
 */

// 문제 설명
// 새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
// 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
// 단, 금액이 부족하지 않으면 0을 return 하세요.

// 제한사항
// 놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
// 처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
// 놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수
// 입출력 예
// price	money	count	result
// 3	20	4	10
// 입출력 예 설명
// 입출력 예 #1
// 이용금액이 3인 놀이기구를 4번 타고 싶은 고객이 현재 가진 금액이 20이라면, 총 필요한 놀이기구의 이용 금액은 30 (= 3+6+9+12) 이 되어 10만큼 부족하므로 10을 return 합니다.

function solution(price, money, count) {
  let ans = 0;
  for (let i = 1; i <= count; i++) {
    ans += price * i;
  }
  return money > ans ? 0 : Math.abs(money - ans);
}

// 문제 설명
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

// 제한 사항
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
// 입출력 예
// s	return
// "a234"	false
// "1234"	true

function solution(s) {
  if (s.length === 4 || s.length === 6)
    return s.match(/[a-zA-Z]/g) ? false : true;
  return false;
}

// 다른 사람 풀이

function solution(s) {
  if (s.length != 4 && s.length != 6) return false;
  for (var i = 0; i < s.length; i++) {
    if (isNaN(Number(s[i]))) return false;
  }
  return true;
}

/**
 * isNaN()메소드
 * NaN => false반환
 */

function solution(arr1, arr2) {
  return arr1.map((v, i) => v.map((v2, j) => v2 + arr2[i][j]));
}

// 다른 사람 풀이

function solution(arr1, arr2) {
  var answer = [[]];
  for (var i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (var j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}
