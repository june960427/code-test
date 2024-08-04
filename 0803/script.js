// # 가장 가까운 글자

function solution(s) {
  let stack = [];
  let elIndex = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in elIndex) {
      stack.push(i - elIndex[s[i]]);
    } else {
      stack.push(-1);
    }
    elIndex[s[i]] = i;
  }

  return stack;
}

// 다른 사람 풀이

function solution(s) {
  const hash = {};
  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;
    return result;
  });
}

// const solution = (s) =>
//   [...s].map((char, i) => {
//     const count = s.slice(0, i).lastIndexOf(char);
//     return count < 0 ? count : i - count;
//   });

/**
 * 2번 예시에서의 slice() 그리고 lastIndexOf를 사용한 방법
 * lastIndexOf(v)가 flase라면 -1을 반환하는 것을 이용한 방법
 */

// #예산

let d = [1, 3, 2, 5, 4];
let budget = 9;
function solution(d, budget) {
  let dSort = d.sort((a, b) => a - b);
  let total = 0;
  let count = 0;
  for (let el of dSort) {
    if (total + el <= budget) {
      total += el;
      count++;
    }
  }
  return count;
}

// 다른 사람 풀이

function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      return count + ((budget -= price) >= 0);
    }, 0);
}

// #3진법 뒤집기

function solution(n) {
  let demicalReverse = [...n.toString(3)].reverse().join("");
  return parseInt(demicalReverse, 3);
}

// # 두 개 뽑아서 더하기

function solution(numbers) {
  let addNumbers = [];
  for (let i in numbers) {
    for (let j in numbers) {
      if (j != i) {
        addNumbers.push(numbers[i] + numbers[j]);
      }
    }
  }
  return [...new Set(addNumbers)].sort((a, b) => a - b);
}

// 다른 사람의 풀이
function solution(numbers) {
  const n = new Set();
  for (i in numbers) {
    for (j in numbers) {
      if (i !== j) n.add(numbers[i] + numbers[j]);
    }
  }

  return [...n].sort((a, b) => a - b);
}

/**
 * Set을 단순 중복 제거 뿐만 아니라 Set의 메소드들을 사용해보자
 */
