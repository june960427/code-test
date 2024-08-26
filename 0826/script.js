// # 오픈 채팅방

/*
  *record는 다음과 같은 문자열이 담긴 배열이며, 길이는 1 이상 100,000 이하이다.
  *다음은 record에 담긴 문자열에 대한 설명이다.
  *모든 유저는 [유저 아이디]로 구분한다.
  *[유저 아이디] 사용자가 [닉네임]으로 채팅방에 입장 - "Enter [유저 아이디] [닉네임]" (ex. "Enter uid1234 Muzi")
  *[유저 아이디] 사용자가 채팅방에서 퇴장 - "Leave [유저 아이디]" (ex. "Leave uid1234")
  *[유저 아이디] 사용자가 닉네임을 [닉네임]으로 변경 - "Change [유저 아이디] [닉네임]" (ex. "Change uid1234 Muzi")
  *첫 단어는 Enter, Leave, Change 중 하나이다.
  *각 단어는 공백으로 구분되어 있으며, 알파벳 대문자, 소문자, 숫자로만 이루어져있다.
  *유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다.
  *유저 아이디와 닉네임의 길이는 1 이상 10 이하이다.
  *채팅방에서 나간 유저가 닉네임을 변경하는 등 잘못 된 입력은 주어지지 않는다.

  1) 결국 마지막에 해당 유저가 가지는 닉네임에 초점을 두어야합니다.
 */

function solution(records) {
  let answer = [];
  let table = new Map();

  /*
    3) records배열의 요소들은 "Enter uid1234 Muzi"와 같이 띄어쓰기로 해당 유저의 행동, 아이디, 현재 닉네임을 갖고있습니다.

    그래서 slplit(" ")을 통해 띄어쓰기를 기준으로 나눠 새로운 배열울 만들었습니다.
    
  */
  let requests = records.map((v) => v.split(" "));

  for (let resquest of requests) {
    /**
        4) 구조분해 할당을 통해 각 요소들을 뽑아와 command가 "Enter" 또는 "Change"인 경우 현재 nickName을 userId의 value값으로 넣어줍니다.
     */
    let [command, userId, nickName] = resquest;

    if (command === "Enter" || command === "Change") {
      table.set(userId, nickName);
    }
  }

  /**
    5) 테이블에 존재하는 userId의 닉네임 값을 가져와 command에 맞게 처리하여 answer 어레이에 넣어줍니다.
   */
  for (let resquest of requests) {
    let [command, userId] = resquest;
    let nickName = table.get(userId);

    if (command === "Enter") {
      answer.push(`${nickName}님이 들어왔습니다.`);
    }
    if (command === "Leave") {
      answer.push(`${nickName}님이 나가셨습니다.`);
    }
  }

  return answer;
}

// 다른 사람풀이

function solution(record) {
  const userInfo = {};
  const action = [];
  const stateMapping = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  record.forEach((v) => {
    const [state, id, nick] = v.split(" ");

    if (state !== "Change") {
      action.push([state, id]);
    }

    if (nick) {
      userInfo[id] = nick;
    }
  });

  return action.map(([state, uid]) => `${userInfo[uid]}${stateMapping[state]}`);
}

// # 신고 결과 받기

/**
 
  2 ≤ id_list의 길이 ≤ 1,000  
  1 ≤ id_list의 원소 길이 ≤ 10  
  id_list의 원소는 이용자의 id를 나타내는 문자열이며 알파벳 소문자로만 이루어 져 있습니다.
  id_list에는 같은 아이디가 중복해서 들어있지 않습니다. 
  1 ≤ report의 길이 ≤ 200,000 
  3 ≤ report의 원소 길이 ≤ 21 
  report의 원소는 "이용자id 신고한id"형태의 문자열입니다. 
  예를 들어 "muzi frodo"의 경우 "muzi"가 "frodo"를 신고했다는 의미입니다. 
  id는 알파벳 소문자로만 이루어져 있습니다. 
  이용자id와 신고한id는 공백(스페이스)하나로 구분되어 있습니다. 
  자기 자신을 신고하는 경우는 없습니다. 
  1 ≤ k ≤ 200, k는 자연수입니다.  
  return 하는 배열은 id_list에 담긴 id 순서대로 각 유저가 받은 결과 메일 수를   담으면 됩니다.

  한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다. => 배열의 중복을 제거

  k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
  => 신고 당한 횟수를 표시하는 테이블, 자신이 신고한 ID를 표시한 테이블


*/

function solution(id_list, report, k) {
  /*
    초기설정

    1) 유저가 신고한 사람을 표시하기 위한 테이블 
       => 나중에 이메일 발송을 위한 장치
    2) 유저가 신고 당한 횟수를 표시하기 위한 테이블
    3) 한 사람이 중복으로 신고를 한 경우 1회로 처리하기 때문에 중복 제거
    4) 정답을 산출하기 위한 배열 생성

  */
  let reportTable = new Map();
  let reportedTable = new Map();
  let reports = [...new Set(report)];
  let answer = Array(id_list.length).fill(0);

  // 배열 초기 설정
  for (let id of id_list) {
    reportTable.set(id, new Set());
    reportedTable.set(id, 0);
  }

  /*
    report배열을 이용해 앞에서 생상한 테이블의 내용을 채워줍니다.
    report 배열의 조건(1 ≤ report의 길이 ≤ 200,000)에 따라
    O(N)으로 처리해줍니다.  
  */
  for (let report of reports) {
    let [userId, reportedId] = report.split(" ");
    reportTable.get(userId).add(reportedId);
    /*
      reportTable의 경우 set객체를 value값으로 갖고있기 때문에 추가할 때
      add() 메소드 사용해줍니다.
    */
    reportedTable.set(reportedId, reportedTable.get(reportedId) + 1);
  }

  /*
    이제 생성된 테이블을 이용하여 정답 배열에 값들을 채워줍니다.
    id_list 배열의 조건(2 ≤ id_list의 길이 ≤ 1,000)에 따라
    이중 for문으로 처리했습니다. 

    하지만 효율적인 방법이 있을거라고 생각합니다.
  */
  for (let i = 0; i < id_list.length; i++) {
    let userId = id_list[i];
    for (let reportedId of reportTable.get(userId)) {
      if (reportedTable.get(reportedId) >= k) {
        answer[i]++;
      }
    }
  }

  return answer;
}

// 다른 사람풀이

function solution(id_list, report, k) {
  // 중복 제거 및 신고 정보 분리
  let uniqueReports = [...new Set(report)].map((reportString) => {
    return reportString.split(" ");
  });

  // 각 사용자별 신고 받은 횟수 계산
  let reportedCounts = new Map();
  for (const [reporter, reportedUser] of uniqueReports) {
    reportedCounts.set(
      reportedUser,
      (reportedCounts.get(reportedUser) || 0) + 1
    );
  }

  /*
    정지된 사용자를 신고한 사용자별 처리 결과 메일 수 계산

     k번 이상 신고받아 정지된 사용자를 신고한 사용자들이 받을 처리 결과 메일의 수를 계산합니다. 마찬가지로 Map을 사용하여 사용자 ID를 키로, 받을 메일 수를 값으로 저장합니다.
  */
  let mailCounts = new Map();
  for (const [reporter, reportedUser] of uniqueReports) {
    if (reportedCounts.get(reportedUser) >= k) {
      mailCounts.set(reporter, (mailCounts.get(reporter) || 0) + 1);
    }
  }

  // 각 사용자별 받은 메일 수 배열 생성
  let answer = id_list.map((id) => mailCounts.get(id) || 0);
  return answer;
}

/*
  해당 방법이 본인의 풀이보다 더 효율적이라고 생각합니다.
  문제 분석 과정에서 좀 더 넓은 시각을 가져야할 것 같습니다.
*/
