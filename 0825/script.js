// # 완주하지 못한 선수

/*
    마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
    completion의 길이는 participant의 길이보다 1 작습니다.
    참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
    참가자 중에는 동명이인이 있을 수 있습니다.

    시간 복잡도는 O(N)으로 풀어야한다.
*/

/*

    1) 해당 문제는 시간 복잡도 O(N)으로 문제를 해결하기 바라고 있습니다. 
       그래서 처음에는 set이나 map 객체를 고려했습니다.
    
    2) set과 map 객체의 has get같은 메서드 들은 시간 복잡도 O(1)을 갖고
       있습니다.

    3) participant어레이 안에는 동명이인이 존재하기 때문에 map객체를
       사용하는게 좋아 보였습니다.

*/

function solution(participant, completion) {
  const table = new Map();

  //   4) participant 배열을 돌면서 새로운 map객체에 넣어 줍니다.
  for (let name of participant) {
    /*
        
    5) 이 과정에서 동명이인의 경우를 확인 하기 위해 get메소드를 사용하여 
       해당 value에 접근하여 value가 존재한다면 해당 value를 증가 시키면서 삽입해 줍니다.
    */
    if (table.get(name)) {
      let currentNum = table.get(name);
      table.set(name, currentNum + 1);
    } else {
      table.set(name, 1);
    }
  }

  /**
    6) 위와 같은 방식으로 completion 안에 이름이 존재한다면 해당 key의 value
       를 1씩 빼줍니다.
   */
  for (let name of completion) {
    let isFinsh = table.get(name);
    table.set(name, isFinsh - 1);
  }

  /**
    7) 마지막으로 해당 key 값의 value가 0보다 크다면 해당 이름을 리턴해
       줍니다.
   */

  for (let [key, value] of table) {
    if (value > 0) return key;
  }
}

// 다른 사람 풀이

function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i];
    let b = completion[i];

    /*
        
        나의 풀이와 같이 조건식을 사용하지 않고 해당 패턴을 사용했다.

        map.get()이 undefined일 수 있기 때문에 해당 케이스의 경우
        0을 사용

        해당 패턴에 대해서는 활용 방안에 대해서는 좀 더 공부 해봐야겠다.

        간결성: 한 줄로 초기화와 증가를 동시에 처리
        안전성: 키가 없는 경우에도 오류 없이 동작
        유연성: 다양한 데이터 타입과 구조에 적용 가능
    */
    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  return "nothing";
}

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i in participant) {
    if (participant[i] !== completion[i]) return participant[i];
  }
}

/*
    해당 해결법은 sort()를 사용했다.

    문제를 처음 봤을 때 sort()를 사용하는게 어떨까라는 생각이 있었지만
    sort()를 사용하면 호율성이 떨어진다고 판단했다. 
*/
