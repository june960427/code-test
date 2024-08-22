// # 두 개의 수로 특정 값 만들기

/*
    - 문제에서 원하는 바는 O(N)으로 문제를 푸는 것이다.
    - 고로 이중 반복문 혹은 find()는 사용해선 안된다.
    - target과 요소를 뺀 값이 현재 해당 버킷에 있는지 찾으면 된다.
    - 중복되는 원소는 없습니다. => Set을 사용해도 된다.
    - find()는 O(N)이지만 has()와 add()는 O(1)이다.
*/

function solution(arr, target) {
  let newSet = new Set();

  for (let num of arr) {
    if (newSet.has(target - num)) {
      return true;
    }
    newSet.add(num);
  }

  return false;
}

// 저자 풀이

function countSort(arr, k) {
  // ➊ 해시 테이블 생성 및 초기화
  const hashtable = new Array(k + 1).fill(0);
  for (const num of arr) {
    // 현재 원소의 값이 k 이하인 때에만 처리
    if (num <= k) {
      // 현재 원소의 값을 인덱스로 해 해당 인덱스의 해시 테이블 값을 1로 설정
      hashtable[num] = 1;
    }
  }

  return hashtable;
}

function solution(arr, target) {
  const hashtable = countSort(arr, target);
  for (const num of arr) {
    const complement = target - num;
    // ➋ target에서 현재 원소를 뺀 값이 해시 테이블에 있는지 확인
    if (
      complement !== num &&
      complement >= 0 &&
      complement <= target &&
      hashtable[complement] === 1
      // 해시 테이블에서 해당 숫자에 위치한 요소가 1인지 확인
    ) {
      return true;
    }
  }

  return false;
}

console.log(solution([1, 2, 3, 4, 8], 6)); // true
console.log(solution([2, 3, 5, 9], 10)); // false

/*
    해시 문제는 처음 접하면서 해당 책의 저자의 풀이를 보고 혼란스러웠던 것 같다.

    저자의 풀이의 요점은 새로운 해시 테이블을 생성하고 해당 순번에 값이 유효함을 표시해 문제를 해결하였다.

    앞으로 해시 문제를 풀 때 해당 방법을 고려하여 문제를 풀어봐야겠다.
*/
