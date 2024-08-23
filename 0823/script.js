// # 문자열 해싱을 이용한 검색 함수 만들기

let stringList = ["apple", "banana", "cherry"];
let queryList = ["banana", "kiwi", "melon", "apple"];

function solution(stringList, queryList) {
  let newString = new Set(stringList);
  let answer = [];

  for (let query of queryList) {
    answer.push(newString.has(query));
  }

  return answer;
}

// 저자 풀이

// 1) polynomial hash를 구현한 부분
function polynomialHash(str) {
  const p = 31; // 소수
  const m = 1_000_000_007; // 버킷 크기
  let hashValue = 0;
  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str.charCodeAt(i)) % m;
  }
  /*
  str.charCodeAt()는 문자의 아스키 코드 값을 반환.
  str.charCodeAt(i)는 문자의 특정 인덱스에 위치한 요소의 아스키 코드
  인덱스 범위를 넘어가면 NaN

  str.fromCharCode(number)는 아스키 코드를 문자로 변환하는 방법이다.
  ** 허용 범위는  0부터 65535(0xFFFF)까지


  */

  return hashValue;
}

function solution(stringList, queryList) {
  // 2) stringList의 각 문자열에 대해 다항 해시값을 계산
  const hashList = stringList.map((str) => polynomialHash(str));
  // 3) queryList의 각 문자열이 stringList에 있는지 확인
  const result = [];
  for (const query of queryList) {
    const queryHash = polynomialHash(query);
    if (hashList.includes(queryHash)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  return result;
}
console.log(solution(stringList, queryList));
