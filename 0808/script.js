// # 올바른 괄호

function solution(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[0] == ")") return false;
    if (s[i] === "(") {
      stack.push(el);
    } else {
      stack.pop();
    }
  }
  return stack.length ? false : true;
}

// 다른 사람 풀이

function solution(s) {
  let cum = 0;
  for (let paren of s) {
    cum += paren === "(" ? 1 : -1;
    if (cum < 0) {
      return false;
    }
  }
  return cum === 0 ? true : false;
}

// # 10진수를 2진수로 변환

function solution(n) {
  let stack = [];
  while (n > 0) {
    stack.unshift(n % 2);
    n = Math.trunc(n / 2);
  }
  return stack.join("");
}

// 저자 풀이

function solution(decimal) {
  const stack = [];

  while (decimal > 0) {
    const remainder = decimal % 2;
    stack.push(remainder);
    decimal = Math.floor(decimal / 2);
  }

  let binary = "";
  while (stack.length > 0) {
    binary += stack.pop();
  }

  return binary;
}

// # 괄호 회전하기

function solution(s) {
  for (let i = 0; i < s.length; i++) {}
}

// # 짝지어 제거하기

function solution(s) {
  let stack = [];
  for (let c of s) {
    if (stack[stack.length - 1] != c) {
      stack.push(c);
    } else {
      stack.pop();
    }
  }
  return stack.length ? 0 : 1;
}

// # 주식가격

function solution(prices) {
  let stack = [];
  let count = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      count++;
      if (prices[i] > prices[j]) break;
    }
    stack.push(count);
    count = 0;
  }
  return stack;
}

// 다른 사람 풀이

function solution(prices) {
  const answer = new Array(prices.length).fill(0);
  const stack = [];
  let length = prices.length;

  for (let i = 0; i < length; i++) {
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      let temp = stack.pop();
      answer[temp] = i - temp;
    }
    stack.push(i);
  }

  while (stack.length) {
    let temp = stack.pop();
    answer[temp] = length - temp - 1;
  }

  return answer;
}

// 크레인 인형뽑기 게임

function solution(board, moves) {
  let stack = [];
  let count = 0;
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      let pick = board[j][moves[i] - 1];
      if (pick !== 0) {
        if (stack[stack.length - 1] === pick) {
          stack.pop();
          count = count + 2;
        } else {
          stack.push(pick);
        }
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }
  return count;
}

// 다른 사람 풀이

const transpose = (matrix) =>
  matrix.reduce(
    (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
    []
  );

const solution = (board, moves) => {
  const stacks = transpose(board).map((row) =>
    row.reverse().filter((el) => el !== 0)
  );
  const basket = [];
  let result = 0;

  for (const move of moves) {
    const pop = stacks[move - 1].pop();
    if (!pop) continue;
    if (pop === basket[basket.length - 1]) {
      basket.pop();
      result += 2;
      continue;
    }
    basket.push(pop);
  }

  return result;
};
