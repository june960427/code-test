// # 할인 행사

/*
    * 1 ≤ want의 길이 = number의 길이 ≤ 10
    * 1 ≤ number의 원소 ≤ 10
    * number[i]는 want[i]의 수량을 의미하며, number의 원소의 합은 10입니다.
    * 10 ≤ discount의 길이 ≤ 100,000
    * want와 discount의 원소들은 알파벳 소문자로 이루어진 문자열입니다.
    * 1 ≤ want의 원소의 길이, discount의 원소의 길이 ≤ 12

*/

/**
    1) want와 number의 배열이 따로 주어지니 map 객체를 고려하였습니다.
 */

function solution(want, number, discount) {
  let table = new Map();
  let answer = 0;

  //   2) wnat와 number배열을 받아 테이블을 반들어 줍니다.
  for (let i = 0; i < want.length; i++) {
    table.set(want[i], number[i]);
  }

  /*
    slice()와 이중 for()문을 지양해야 하지만 방법이 떠오르지 않아 일단 작성하였습니다.
  */

  for (let i = 0; i <= discount.length - 10; i++) {
    //   3) 열흘간 살 수 있는 제품을 확인해야하니깐 배열을 구해줍니다.
    let day = discount.slice(i, i + 10);
    let currentTable = new Map();

    // 4)해당 일 수 동안 살 수 있는 제품으로 테이블에 값을 넣어줍니다.
    for (let item of day) {
      currentTable.set(item, (currentTable.get(item) || 0) + 1);
    }

    // 5) 최초에 생성된 테이블과 10일간 살 수 있는 제품이 들어있는 테이블을 비교합니다.
    if (isEqual(table, currentTable)) {
      answer++;
    }
  }

  return answer;
}

function isEqual(table, currentTable) {
  /**
        1) 테이블의 길이가 같지 않다는건 원하는 제품을 못 산다는 뜻이기에 false를 리턴합니다.

        2) 새로 생성된 테이블에 기존 테이블의 key값이 없는 경우 flase 입니다.

        3) 새로 생성된 테이블에서 각 요소의 value 값이 기존에 생성된 테이블의 요소의 value값과 일치하지 않으면 flase를 리턴합니다. 
     */
  if (table.size !== currentTable.size) return false;
  for (let [key, val] of table) {
    if (!currentTable.has(key) || currentTable.get(key) !== val) return false;
  }
  return true;
}

// 다른 사람 풀이

function solution(want, number, discount) {
  let count = 0;
  for (let i = 0; i < discount.length - 9; i++) {
    const slice = discount.slice(i, i + 10);

    let flag = true;

    for (let j = 0; j < want.length; j++) {
      if (slice.filter((item) => item === want[j]).length !== number[j]) {
        flag = false;
        break;
      }
    }
    if (flag) count += 1;
  }
  return count;
}

/*
    최초의 테이블을 생성하지 않고 바로 원본 배열과의 비교
    filter를 통해 해당 아이템이 세일 목록에 있는지 확인하고 그 길이가 원하는 갯수인지 확인
    flag를 사용하여 같은 값인지 확인
*/
