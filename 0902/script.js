// 트리 순회
function preorder(nodes, idx) {
  // idx가 노드 리스트의 길이보다 작을 때
  if (idx < nodes.length) {
    // 루트 노드를 출력한 다음, 왼쪽 서브 트리와 오른쪽 서브 트리를 재귀 호출하여 출력 순서대로 이어붙임
    let ret = `${nodes[idx]} `
    ret += preorder(nodes, idx * 2 + 1)
    ret += preorder(nodes, idx * 2 + 2)
    return ret
  }

  // idx >= len(nodes)일 때는 빈 문자열 반환
  return ''
}

function inorder(nodes, idx) {
  // idx가 노드 리스트의 길이보다 작을 때
  if (idx < nodes.length) {
    // 왼쪽 서브 트리를 먼저 재귀 호출하여 출력 순서대로 이어붙임
    let ret = inorder(nodes, idx * 2 + 1)
    // 루트 노드를 출력한 다음, 오른쪽 서브 트리를 재귀 호출하여 출력 순서대로 이어붙임
    ret += `${nodes[idx]} `
    ret += inorder(nodes, idx * 2 + 2)
    return ret
  }

  // idx >= len(nodes)일 때는 빈 문자열 반환
  return ''
}

function postorder(nodes, idx) {
  // idx가 노드 리스트의 길이보다 작을 때
  if (idx < nodes.length) {
    // 왼쪽 서브 트리와 오른쪽 서브 트리를 재귀 호출하여 출력 순서대로 이어붙임
    let ret = postorder(nodes, idx * 2 + 1)
    ret += postorder(nodes, idx * 2 + 2)
    // 루트 노드를 출력함
    ret += `${nodes[idx]} `
    return ret
  }

  // idx >= len(nodes)일 때는 빈 문자열 반환
  return ''
}

function solution(nodes) {
  // 전위 순회, 중위 순회, 후위 순회 결과 계산
  // 노드 리스트와 루트 노드의 인덱스를 매개변수로 각각 호출
  return [
    preorder(nodes, 0).slice(0, -1), // 마지막 공백 제거
    inorder(nodes, 0).slice(0, -1), // 마지막 공백 제거
    postorder(nodes, 0).slice(0, -1), // 마지막 공백 제거
  ]
}

console.log(solution([1, 2, 3, 4, 5, 6, 7])) // ['1 2 4 5 3 6 7', '4 2 5 1 6 3 7', '4 5 2 6 7 3 1']
// # 이진 탐색 트리 구현

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
      return
    }

    let current = this.root
    while (true) {
      if (value === current.value) return
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode
          return
        }
        current = current.left
      } else {
        if (!current.right) {
          current.right = newNode
          return
        }
        current = current.right
      }
    }
  }

  contains(value) {
    if (!this.root) return false
    let current = this.root
    while (current) {
      if (value === current.value) return true
      if (value < current.value) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return false
  }
}

function solution(arr, searchList) {
  const bst = new BST()
  const result = []

  for (const value of arr) {
    bst.insert(value)
  }
  for (const value of searchList) {
    result.push(bst.contains(value))
  }
  return result
}

console.log(solution([5, 3, 8, 4, 2, 1, 7, 10], [1, 2, 5, 6]))
console.log(solution([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]))

// # 예상 대진표

function solution(n, a, b) {
  let count = 0
  while (a != b) {
    a = Math.ceil(a / 2)
    b = Math.ceil(b / 2)
    count++
  }
  return count
}

// Merge Two Binary Trees

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

const mergeTrees = (root1, root2) => {
  // 두 트리의 최대 길이만큼 배열을 채우기 위해 빈 배열 생성
  const length = Math.max(root1.length, root2.length)
  const result = []

  for (let i = 0; i < length; i++) {
    const val1 = i < root1.length ? root1[i] : null
    const val2 = i < root2.length ? root2[i] : null

    if (val1 === null && val2 === null) {
      result[i] = null
    } else if (val1 === null) {
      result[i] = val2
    } else if (val2 === null) {
      result[i] = val1
    } else {
      result[i] = val1 + val2
    }
  }

  // 결과 배열의 끝에서부터 불필요한 null 값을 제거
  while (result.length > 0 && result[result.length - 1] === null) {
    result.pop()
  }

  return result
}

// 입력 예시
const root1 = [1, 3, 2, 5]
const root2 = [2, 1, 3, null, 4, null, 7]
console.log(mergeTrees(root1, root2)) // [3 ,4, 5, 5, 4, null, 7]

// # 이가 빠진

// 노드 클래스 정의
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// 이진 검색 트리 클래스 정의
class BST {
  constructor() {
    this.root = null
  }

  // 트리에 노드 삽입
  insert(value) {
    const newNode = new Node(value)
    if (!this.root) {
      this.root = newNode
      return
    }
    this.insertNode(this.root, newNode)
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode
      } else {
        this.insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        this.insertNode(node.right, newNode)
      }
    }
  }

  // 후위 순회
  후위(node, result = []) {
    if (node !== null) {
      this.후위(node.left, result)
      this.후위(node.right, result)
      result.push(node.value)
    }
    return result
  }

  // 빈 노드 찾기
  findEmptyNode(node, index, currentIndex = { value: 0 }) {
    if (node === null) return null
    if (currentIndex.value === index) return node

    currentIndex.value++
    let leftResult = this.findEmptyNode(node.left, index, currentIndex)
    if (leftResult !== null) return leftResult

    let rightResult = this.findEmptyNode(node.right, index, currentIndex)
    if (rightResult !== null) return rightResult

    return null
  }
}

// 입력 처리 및 문제 해결
function solution(N, values, X) {
  const tree = new BST()
  let emptyNodeIndex = -1

  // 트리 구성
  for (let i = 0; i < N; i++) {
    if (values[i] === -1) {
      emptyNodeIndex = i
    } else {
      tree.insert(values[i])
    }
  }

  // 빈 노드 찾기
  const emptyNode = tree.findEmptyNode(tree.root, emptyNodeIndex)

  // X 삽입
  if (emptyNode) {
    emptyNode.value = X
  } else {
    tree.insert(X)
  }

  // 후위 순회 결과 반환
  return tree.후위(tree.root)
}

// 예제 입력
const N = 7
const values = [10, 5, 17, 1, -1, 14, 21]
const X = 18

// 문제 해결 및 결과 출력
const result = solution(N, values, X)
console.log(result.join(' '))
