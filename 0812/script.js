// # 프로세스
// 제약 조건 p의 값이 100이하라 On2로 풀어도 상관없어 보였음
// 하지만 최적화에 대해 생각해보자.

function soloution(p, l) {
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

// 다른 사람 풀이
function solution(priorities, location) {
  var answer = 0;

  const process = [];
  const queue = [];

  for (let i = 0; i < priorities.length; i++) {
    process.push("index" + i);
  }

  const wantedProcess = process[location];

  while (process.length !== 0) {
    let ranking = priorities.shift();
    let name = process.shift();

    if (priorities.filter((rank) => rank > ranking).length !== 0) {
      priorities.push(ranking);
      process.push(name);
    } else {
      queue.push(name);
    }
  }

  answer = queue.indexOf(wantedProcess) + 1;

  return answer;
}

// # 기능개발

function solution(p, s) {
  const finishArr = p.map((v, i) => {
    const restProgress = 100 - v;
    const restProgressDay = Math.ceil(restProgress / s[i]);
    return restProgressDay;
  });
  let stack = [];
  let answer = [];

  while (finishArr.length > 0) {
    let pick = finishArr.shift();
    if (stack.length === 0 || pick <= stack[0]) {
      stack.push(pick);
    } else {
      answer.push(stack.length);
      stack = [pick];
    }
  }

  if (i === finishArr.length - 1) {
    answer.push(stack.length);
  }

  return answer;
}

//  # 다리를 지나는 트럭

function solution(b_l, w, t_w) {
  let answer = b_l;
  let isCrossing = [];

  while(t_w.length>0){

  }
  
  return answer;
}
