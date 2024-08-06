// # 숫자 문자열과 영단어

let numArr = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  let i = 0;
  while (isNaN(Number(s))) {
    if (s.match(new RegExp(numArr[i])) != null) {
      s = s.replace(new RegExp(numArr[i], "g"), i);
    }
    i++;
    if (i >= numArr.length) break;
  }
  return Number(s);
}

// 다른 사람 풀이

function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    console.log(arr);
    answer = arr.join(i);
  }

  return Number(answer);
}

/**
 * [ 'one4seveneight' ]
 * [ '', '4seveneight' ]
 * [ '14seveneight' ]
 * [ '14seveneight' ]
 * [ '14seveneight' ]
 * [ '14seveneight' ]
 * [ '14seveneight' ]
 * [ '14', 'eight' ]
 * [ '147', '' ]
 * [ '1478' ]
 * split과 join의 완벽한 동작 방식을 알고 사용하자....
 */

// # 문자열 내마음대로 바꾸기

function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] < b[n]) return -1;
    if (b[n] < a[n]) return 1;
    if (a < b) return -1;
    if (b < a) return 1;
    return 0;
  });
}

// # 다른 사람 풀이

function solution(strings, n) {
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}

/**
 * localeCompare 메서드:
 * 이 메서드는 문자열을 비교하고 정렬 순서를 결정합니다.
 * 첫 번째 문자열이 두 번째 문자열보다 사전순으로 앞서면 음수를 반환합니다.
 * 첫 번째 문자열이 두 번째 문자열보다 사전순으로 뒤면 양수를 반환합니다.
 * 두 문자열이 동일하면 0을 반환합니다.
 */

function solution(n, m) {
  const gcd = (a, b) => {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  const lcm = (a, b) => (a * b) / gcd(a, b);

  const greatestCommonDivisor = gcd(n, m);
  const leastCommonMultiple = lcm(n, m);

  return [greatestCommonDivisor, leastCommonMultiple];
}

//  삼총사
function solution(number) {
  let count = 0;
  let n = number.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          count++;
        }
      }
    }
  }

  return count;
}

// #다른 사람 풀이

function solution(number) {
  let result = 0;

  const combination = (current, start) => {
    if (current.length === 3) {
      result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }

    for (let i = start; i < number.length; i++) {
      combination([...current, number[i]], i + 1);
    }
  };
  combination([], 0);
  return result;
}
