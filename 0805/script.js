// # 배열 조각하기

function solution(arr, query) {
  for (let i = 0; i < query.length; i++) {
    if (i % 2) {
      arr = arr.slice(query[i], arr.length);
    } else {
      arr = arr.slice(0, query[i] + 1);
    }
  }
  return arr;
}

// # 나누어 떨어지는 숫자 배열

// # for of 문
function solution(arr, div) {
  let filteredArr = [];
  for (let el of arr) {
    if (el % div == 0) {
      filteredArr.push(el);
    }
  }
  return filteredArr.length == 0 ? [-1] : filteredArr;
}

// # reduce() 위 코드 작성 후 연습 겸 다시 작성
function solution(arr, div) {
  let filteredArr = arr.reduce((a, c) => {
    if (c % div === 0) {
      a.push(c);
    }
    return a;
  }, []);
  return !filteredArr.length ? [-1] : filteredArr.sort((a, b) => a - b);
}

// # 자연수 뒤집어 배열로 만들기

function solution(n) {
  return [...n.toString()].reverse().map((v) => Number(v));
}
