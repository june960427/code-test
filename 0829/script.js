// # 이가 빠진 이진 트리

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;

      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  postorderTraversal() {
    const result = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    }

    traverse(this.root);
    return result;
  }
}

function solution(input) {
  const lines = input.trim().split("\n");
  const N = parseInt(lines[0]);
  const values = lines[1].split(" ").map((x) => parseInt(x));
  const X = parseInt(lines[2]);

  const bst = new BinarySearchTree();

  // 트리 구성
  for (let i = 0; i < N; i++) {
    if (values[i] !== -1) {
      bst.insert(values[i]);
    }
  }

  // 새로운 값 삽입
  bst.insert(X);

  // 후위 순회 결과 반환
  return bst.postorderTraversal().join(" ");
}

// 표준 입력을 시뮬레이션하는 함수
function getInput() {
  return `7
  10 5 17 1 -1 14 21
  18`;
}

// 문제 해결 및 결과 출력
const input = getInput();
const result = solution(input);
console.log(result);
