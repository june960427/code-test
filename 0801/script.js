function solution(sizes) {
  const newSize = sizes.map(([w, h]) => [Math.max(w, h), Math.min(w, h)]);
  let maxWidth = 0;
  let maxHeight = 0;

  for (let [w, h] of newSize) {
    if (w > maxWidth) maxWidth = w;
    if (h > maxHeight) maxHeight = h;
  }

  return maxWidth * maxHeight;
}

// 다른 사람 풀이

function solution(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
}

function solution(sizes) {
  let w = 0;
  let h = 0;
  sizes.forEach((s) => {
    const [a, b] = s.sort((a, b) => a - b);
    if (a > h) h = a;
    if (b > w) w = b;
  });

  return w * h;
}

/**
 * 반복문 돌릴 때 구조분해 할당에 대해서도 잘 활용 해보기
 * 다양한 상황에서 헬퍼 메소드 어떻게 쓸지 생각 해보기
 */

// 폰켓몬

function solution(nums) {
  let removetArr = [...new Set(nums)].length;
  let maxChoice = nums.length / 2;
  return removetArr < maxChoice ? removetArr : maxChoice;
}

// 다른 사람 풀이

function solution(nums) {
  // MAX(N/2, num of different numbers)
  // stack!
  const len = nums.length;
  let stack = [],
    i = -1;
  while (++i < len) {
    if (stack.indexOf(nums[i]) === -1) {
      stack.push(nums[i]);
      if (stack.length === len / 2) return len / 2;
    }
  }
  return stack.length;
}

function solution(nums) {
  const select = nums.length / 2;
  const check = nums.reduce((total, cur) => {
    total[cur] ? total[cur]++ : (total[cur] = 1);
    return total;
  }, {});
  const checkLeng = Object.keys(check).length;
  return checkLeng > select ? select : checkLeng;
}

/**
 * set의 길이를 구할 때는 size를 쓰자!
 * 코드 작성한 후 바로 제출하지 말고 한 번 더 생각해 보고 코드를 고쳐보자
 */

let person = { name: "123", age: 21 };
let { name, age } = person;
console.log(name, age);

// 문제 설명
// 선분 세 개로 삼각형을 만들기 위해서는 다음과 같은 조건을 만족해야 합니다.

// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 합니다.
// 삼각형의 두 변의 길이가 담긴 배열 sides이 매개변수로 주어집니다. 나머지 한 변이 될 수 있는 정수의 개수를 return하도록 solution 함수를 완성해주세요.

// 제한사항
// sides의 원소는 자연수입니다.
// sides의 길이는 2입니다.
// 1 ≤ sides의 원소 ≤ 1,000
// 입출력 예
// sides	result
// [1, 2]	1
// [3, 6]	5
// [11, 7]	13
// 입출력 예 설명
// 입출력 예 #1

// 두 변이 1, 2 인 경우 삼각형을 완성시키려면 나머지 한 변이 2여야 합니다. 따라서 1을 return합니다.
// 입출력 예 #2

// 가장 긴 변이 6인 경우
// 될 수 있는 나머지 한 변은 4, 5, 6 로 3개입니다.
// 나머지 한 변이 가장 긴 변인 경우
// 될 수 있는 한 변은 7, 8 로 2개입니다.
// 따라서 3 + 2 = 5를 return합니다.
// 입출력 예 #3

// 가장 긴 변이 11인 경우
// 될 수 있는 나머지 한 변은 5, 6, 7, 8, 9, 10, 11 로 7개입니다.
// 나머지 한 변이 가장 긴 변인 경우
// 될 수 있는 한 변은 12, 13, 14, 15, 16, 17 로 6개입니다.
// 따라서 7 + 6 = 13을 return합니다.

let sides = [1, 2];

function solution(sides) {
  let count = 0;
  let [max, min] = [Math.max(...sides), Math.min(...sides)];
  for (let i = 1; i < max + min; i++) {
    if (max < i + min && i <= max) count += 1;
    if (max < i) count += 1;
  }
  return count;
}

solution(sides);
