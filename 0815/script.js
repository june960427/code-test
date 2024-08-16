// # 요세푸스 문제

function solution(n, k) {
  let newArr = Array(n)
    .fill(1)
    .map((v, i) => v + i);

  let index = 0; // 제거할 사람의 인덱스
  while (newArr.length > 1) {
    // k번째 사람의 인덱스를 구함 (현재 위치에서 k-1만큼 이동)
    index = (index + k - 1) % newArr.length;
    newArr.splice(index, 1);
  }

  return newArr[0];
}

console.log(solution(5, 2));
// # 저자풀이

class Queue {
  items = [];
  start = 0;
  finish = 0;

  push(item) {
    this.items.push(item);
    this.finish++;
  }

  size() {
    return this.finish - this.start;
  }

  pop() {
    return this.items[this.start++];
  }
}

function solution(N, K) {
  const queue = new Queue();

  // ❶ 1부터 N까지의 번호를 deque에 추가
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (queue.size() > 1) {
    // ❷ deque에 하나의 요소가 남을 때까지
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.pop()); // ❸ K번째 요소를 찾기 위해
      // 앞에서부터 제거하고 뒤에 추가
    }
    queue.pop(); // ❹ K번째 요소 제거
  }

  return queue.pop(); // ❺ 마지막으로 남은 요소 반환
}

console.log(solution(5, 2)); // 3

// # 기능 개발

function solution(progress, speed) {
  const progressDay = progress.map((progress, i) =>
    Math.ceil((100 - progress) / speed[i])
  );
  // Math.ceil()을 이용하여 반올림해서 기능 개발에 소요되는 일 수를 구해줍니다.
  let stack = [];
  let answer = [];

  for (let [i, complete] of progressDay.entries()) {
    if (stack.length === 0 || stack[0] >= complete) {
      // 스택이 비어있거나 소요 일 수가 스택의 제일 첫 번째 요소보다 작은 경우 스택에 넣어 줍니다.
      stack.push(complete);
    } else {
      // 스택의 첫 번째 요소보다 큰 경우 answer에 스택의 길이를 넣어 주고
      // 스택을 초기화 하며 해당 요소를 넣어줍니다.
      answer.push(stack.length);
      stack = [complete];
    }
    if (i === progressDay.length - 1) {
      // 제일 마지막 요소의 경우 위에서 처리가 안되기 때문에 따로 조건식을 세웠습니다.
      answer.push(stack.length);
    }
  }

  return answer;
}

// 다른 사람 풀이

function solution(progresses, speeds) {
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  let answer = [0];
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
      // ++j 는 해당 배포가 끝났고 새로운 배포 작업에 들어가기 때문에 새로운 항목 생성 후 +1
    }
  }

  return answer;
}
