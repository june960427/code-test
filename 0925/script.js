/**
 * 간단한 유니온-파인드 알고리즘 구현하기
 */
class UnionFind {
  constructor(size) {
    this.parent = Array.from({ length: size }, (_, i) => i) // 각 노드는 초기 부모가 자기 자신
    this.rank = Array(size).fill(1) // 각 노드의 초기 랭크는 1
    this.count = size // 초기 서로소 집합의 개수
  }

  find(x) {
    if (this.parent[x] !== x) {
      // 경로 압축 최적화
      this.parent[x] = this.find(this.parent[x])
    }
    return this.parent[x]
  }

  union(x, y) {
    const rootX = this.find(x)
    const rootY = this.find(y)

    if (rootX !== rootY) {
      // 랭크에 의한 유니온 최적화
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY
      } else {
        this.parent[rootY] = rootX
        this.rank[rootX]++
      }
      this.count-- // 서로소 집합의 개수 감소
    }
  }

  getCount() {
    return this.count // 서로소 집합의 개수 반환
  }
}

function solution(k, operations) {
  const uf = new UnionFind(k)

  for (const operation of operations) {
    if (operation[0] === 'u') {
      // union 연산 수행
      uf.union(operation[1], operation[2])
    } else if (operation[0] === 'f') {
      // find 연산 수행
      uf.find(operation[1])
    }
  }

  return uf.getCount() // 서로소 집합의 개수 반환
}

// 예시 사용
console.log(
  solution(3, [
    ['u', 0, 1],
    ['u', 1, 2],
    ['f', 2],
  ]),
) // 출력: 1
console.log(
  solution(4, [
    ['u', 0, 1],
    ['u', 2, 3],
    ['f', 0],
  ]),
) // 출력: 2

// 루트 노드 찾는 함수
function find(parents, x) {
  if (parents[x] === x) return x
  parents[x] = find(parents, parents[x])

  return parents[x]
}

function union(parents, x, y) {
  const rootl = find(parents, x)
  const root2 = find(parents, y)

  parents[root2] = rootl
}

function solution(k, operations) {
  const parents = Array.from({ length: k }, (_, i) => i)
  let n = k

  for (const op of operations) {
    if (op[0] === 'u') {
      union(parents, op[l], op[2])
    } else if (op[0] === 'f') {
      find(parents, op[l])
    }
    n = new Set(Array.from({ length: k }, (_, i) => find(parents, i))).size
  }

  return n
}

/**
 * 폰켓몬
 * 
 * # 문제 분석

    1. 중복된 폰켓몬은 고려할 필요가 없으므로, 배열에서 **중복을 제거**한 후의 **고유 종류의 수**를 계산
    2. 고유 종류의 수가 N/2보다 크다면, N/2 종류의 폰켓몬만 선택할 수 있다.
    3. 고유 종류의 수가 N/2보다 작다면, 고유 종류의 수 만큼의 폰켓몬을 선택할 수 있다.

---

    # 🎆 문제 설계

    1. Set을 활용한 중복제거
    2. 고유 종류의 수에 따른 조건문

    **시간 복잡도**

    예상 시간 복잡도 : O(N)

    실제 시간 복잡도 : O(N)

    1. **`new Set(nums)`**

        `nums` 배열에서 중복을 제거하는 연산 **O(N)
        ⇒** N은 `nums` 배열의 길이

    2. **`[...]` (배열로 변환)**

        최악의 경우 고유 값들이 N개일 수 있으므로O(N)

    3. **`nums.length / 2`**

        배열의 길이를 구하는 것은 O(1)

    4. **최종 `return`**

        `폰켓몬ㅋㅋㅋ.length`와 `maxChoice`를 비교 O(1)


    **공간 복잡도**

    예상 공간 복잡도 : O(N)

    실제 시간 복잡도 : O(N)

    1. **`new Set(nums)`**

        Set은 입력 배열의 중복을 제거한 고유한 값을 저장하므로, 최악의 경우 Set에는 `N개의 원소`가 있을 수 있습니다. 공간 복잡도는 O(N)

    2. **`[...]` (배열로 변환)**

        Set을 배열로 변환하면서 새로운 배열을 만듭니다. 변환된 배열 역시 `최대 N개의 원소`를 가질 수 있으므로 O(N)

    3. **기타 변수**:

        `maxChoice`는 상수 크기의 값을 저장하므로 공간 복잡도에 큰 영향을 미치지 않으며 O(1)
*/

function solution(nums) {
  const 폰켓몬ㅋㅋㅋ = [...new Set(nums)]
  const maxChoice = nums.length / 2
  return 폰켓몬ㅋㅋㅋ.length < maxChoice ? 폰켓몬ㅋㅋㅋ.length : maxChoice
}

/**
 * 영어 끝말잇기
 *
    * # 🧐 문제 분석

    1. 1번부터 번호 순서대로 한 사람씩 차례대로 단어를 말합니다.
    2. 마지막 사람이 단어를 말한 다음에는 다시 1번부터 시작합니다.
    3. 앞 사람이 말한 단어의 마지막 문자로 시작하는 단어를 말해야 합니다.
    4. 이전에 등장했던 단어는 사용할 수 없습니다.
    5. 한 글자인 단어는 인정되지 않습니다.

    ---

    # 🎆 문제 설계

    1. 조건문을 1번부터 돌릴 필요가 없다.
    2. 문제에서 주어진 n값을 활용하여 현재 차례인 사람과 라운드를 구한다.
    3. 앞사람과 뒷사람이 말한 단어을 비교한다.
    4. `Set객체`와 해당 메소드를 통해 효과적으로 중복을 찾는다.
    5. 한 글자의 경우, `바로 return` 한다.

    **시간 복잡도**

    예상 시간 복잡도 : O(N)

    실제 시간 복잡도 : O(N)

    1. **`new Set()`** 
        
        `usedWord` 세트를 초기화하는 연산은 O(1)
        
    2. **`for` 루프**
        
        `words` 배열의 모든 단어를 한 번씩 검사하므로 O(N)
        
    3. **최종 `return`**
        
        반환하는 것은 O(1)입니다.
    

    **공간 복잡도**

    예상 공간 복잡도 : O(N)

    실제 시간 복잡도 : O(N)

    1. **`new Set()`**
        
        `usedWord`는 중복을 제거한 단어들을 저장하며, 최악의 경우 N개의 단어를 저장할 수 있다. 따라서 O(N)
        
    2. **기타 변수**
        
        `currentPerson`, `currentRound`, `lastWord`, `firstWord`, `strCheck`와 같은 변수들은 O(1)
 */

function solution(n, words) {
  const lastWord = (word) => word.charAt(word.length - 1)
  const firstWord = (word) => word.charAt(0)
  const strCheck = (prev, current) => lastWord(prev) === firstWord(current)

  const usedWord = new Set() // 이전에 나온 단어 저장
  usedWord.add(words[0]) // 첫 단어는 바로 추가

  for (let i = 1; i < words.length; i++) {
    const currentPerson = (i % n) + 1 // 현재 차례인 사람
    const currentRound = Math.floor(i / n) + 1 // 현재 라운드

    // 한 글자 단어가 나왔을 경우 바로 탈락 처리
    if (words[i].length === 1) return [currentPerson, currentRound]

    // 이전 단어의 끝 문자와 다른 단어 시작 문자가 나오거나, 중복된 단어가 나오면 탈락
    if (!strCheck(words[i - 1], words[i]) || usedWord.has(words[i])) return [currentPerson, currentRound]

    usedWord.add(words[i]) // 단어 기록
  }

  return [0, 0] // 탈락자 없을 때
}
