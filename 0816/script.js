// # 카드 뭉치

function solution(cards1, cards2, goal) {
  let answer = "Yes";
  while (goal.length > 0) {
    let pick = goal.shift();

    if (pick === cards1[0]) cards1.shift();
    else if (pick === cards2[0]) cards2.shift();
    else {
      answer = "No";
      break;
    }
  }
  return answer;
}

//  다른 사람 풀이

function solution(cards1, cards2, goal) {
  let j = 0;
  let k = 0;
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] == cards1[j]) j++;
    else if (goal[i] == cards2[k]) k++;
    else return "No";
  }
  return "Yes";
}

/**
 * 해당 문제는 시간 복잡도가 의미가 없었지만
 * 다른 사람 풀이와 같이 shift()를 사용하는게 아닌
 * 인덱스를 사용하는게 더 좋아보인다.
 *
 * 최대한 생각해보고 안되면 shift()와 같은 연산 값이 큰 메소드 사용하자.
 */

// # 프로세스

function solution(p, l) {
  let stack = [];

  for (let i = 0; i < p.length; i++) {
    for (let j = 0; j < p.length; j++) {
      if (p[j] === Math.max(...p) && p[j] > 0) {
        stack.push([j, p[j]]);
        p[j] = 0;
      }
    }
  }
  return stack.findIndex((v) => v[0] === l) + 1;
}

// 다른사람 풀이

function solution(priorities, location) {
  var arr = priorities.map((priority, index) => {
    return {
      index: index,
      priority: priority,
    };
  });

  var queue = [];

  while (arr.length > 0) {
    var firstEle = arr.shift();
    var hasHighPriority = arr.some((ele) => ele.priority > firstEle.priority);
    if (hasHighPriority) {
      arr.push(firstEle);
    } else {
      queue.push(firstEle);
    }
  }

  return queue.findIndex((queueEle) => queueEle.index === location) + 1;
}
