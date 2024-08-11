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
    stack.push(n % 2);
    n = Math.trunc(n / 2);
  }
  return stack.reverse().join("");
}

console.log(solution(10));

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

function solution(s) {
  let str = [...s];
  let def = { "]": "[", "}": "{", ")": "(" };
  let stack = [];
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[j] === "(" || str[j] === "[" || str[j] === "{") {
        stack.push(str[j]);
      } else if (stack.length > 0 && stack[stack.length - 1] == def[str[j]]) {
        stack.pop();
      } else {
        stack.push(str[j]);
        break;
      }
    }
    stack.length === 0 ? (count += 1) : null;
    str.push(str.shift());
    stack = [];
  }
  return count;
}

function solution(n, k, cmd) {
  let arr = Array(n)
    .fill(0)
    .map((v, i) => v + i);
  let stack = [];
  let curr = k;

  for (let c of cmd) {
    if (c.includes("D")) {
      curr += parseInt(c.split(" ")[1]);
    }
    if (c.includes("U")) {
      curr -= parseInt(c.split(" ")[1]);
    }
    if (c == "C") {
      stack.push(arr[curr]);
      arr.splice(curr, 1);
    }
    if (c == "Z") {
      arr.push(stack.pop());
      arr.sort((a, b) => a - b);
    }
  }
  let result = arr.map((v) => [v, "O"]);
  for (let i = 0; i < stack.length; i++) {
    result.push([stack[i], "X"]);
  }

  return result
    .sort((a, b) => a[0] - b[0])
    .map((v) => v[1])
    .join("");
}

function solution(n, k, cmd) {
  let deleted = [];
  let current = k;
  let table = {
    up: Array(n)
      .fill()
      .map((_, i) => i - 1),
    down: Array(n)
      .fill()
      .map((_, i) => i + 1),
  };
  table.up[0] = null;
  table.down[n - 1] = null;

  for (const command of cmd) {
    if (command.startsWith("U")) {
      const x = parseInt(command.split(" ")[1]);
      for (let i = 0; i < x; i++) {
        current = table.up[current];
      }
    } else if (command.startsWith("D")) {
      const x = parseInt(command.split(" ")[1]);
      for (let i = 0; i < x; i++) {
        current = table.down[current];
      }
    } else if (command === "C") {
      deleted.push([current, table.up[current], table.down[current]]);
      if (table.up[current] !== null) {
        table.down[table.up[current]] = table.down[current];
      }
      if (table.down[current] !== null) {
        table.up[table.down[current]] = table.up[current];
      }
      current =
        table.down[current] !== null ? table.down[current] : table.up[current];
    } else if (command === "Z") {
      const [restored, up, down] = deleted.pop();
      if (up !== null) {
        table.down[up] = restored;
      }
      if (down !== null) {
        table.up[down] = restored;
      }
      table.up[restored] = up;
      table.down[restored] = down;
    }
  }

  const result = Array(n).fill("O");
  deleted.forEach(([idx]) => {
    result[idx] = "X";
  });

  return result.join("");
}
