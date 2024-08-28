// # 베스트 엘범

/**
 * genres[i]는 고유번호가 i인 노래의 장르입니다.
 * plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
 * genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
 * 장르 종류는 100개 미만입니다.
 * 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
 * 모든 장르는 재생된 횟수가 다릅니다.
 */

// # 메뉴 리뉴얼

function solution(genres, plays) {
  const answer = [];

  // 각 자리에 고유번호, 장르, 플레이 횟수를 넣어줍니다.
  const songs = genres.map((v, i) => [i, v, plays[i]]);

  // 각 장르들의 플레이 횟수를 구해줍니다.
  const countPlay = songs.reduce((prev, current) => {
    let count = prev;
    count[current[1]] = (count[current[1]] || 0) + current[2];
    return count;
  }, {});

  // 장르들을 플레이 횟수에 맞게 정렬합니다.
  const genreRanking = Object.keys(countPlay).sort(
    (a, b) => countPlay[b] - countPlay[a]
  );

  /**
    songs 배열을 이용해 장르들의 플레이 횟수 순서에 맞춰 장르에 따라 필터링한 후 정렬해서 나온 배열의 첫번째 요소의 고유번호 값과 두번째 요소의 고유번호 값을 정답 배열에 넣어줍니다.
   */

  for (let genre of genreRanking) {
    let arr = songs
      .filter((v) => v[1] === genre)
      .sort((a, b) => b[2] - a[2] || a[0] - b[0]);

    answer.push(arr[0][0]);

    if (arr.length > 1) {
      answer.push(arr[1][0]);
    }
  }
  return answer;
}
