/**
    Tree
    연결 리스트처럼 노드로 이루어진 데이터 구조. (부모-자식)

    최상위 -> route
    자식 노드는 0부터 여러가지 노드를 가질 수 있음

    비선형 구조 journey of life lol
    자식이 부모를 가리키는 경우가 있으면 안된다. (리액트 같음 폐륜 금지)
    출발지점은 하나다.

 */

class BinarySearchTree {
  constructor() {
    this.root = null; // 초기값을 넣고 만들어도됨
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);

console.log(tree.root);

/**
          1) 루트가 있나 먼저 확인
          2) 새로운 노드의 값이 루트의 값보다 큰지 작은지 확인
          3) 크다면 오른쪽 값과 비교
          4) 작다면 왼쪽으로 간다
          
          => while 루프
       */

// 이진 검색 트리 : Insert 메소드 솔루션

// 스니펫

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);

    // 루트 값이 없으면 루트로 지정
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    // 탐색을 위해 현재 값을 지금 루트로 지정해준다.
    let current = this.root;

    while (true) {
      // 지금 루트와 같은 값이 들어온다면 루프를 빠져나가야 한다.
      if (value === current.value) return "Fuck You";

      //   현재 값보다 작다면 왼쪽을 순회한다.
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        //   현재 값보다 크다면 오른쪽을 순회한다.
        if (current.right === null) {
          current.right = newNode;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      }
      return true;
    }
    return false;
  }
}
