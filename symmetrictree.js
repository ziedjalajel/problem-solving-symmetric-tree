class Node {
  constructor(value, left = null, right = null) {
    this.left = left;
    this.right = right;
    this.value = value;
  }
}
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(4);
root.right.right = new Node(3);

const isSymmetric = (left, right) => {
  if (left && right && left.value !== right.value) return false;
  if ((!left && right) || (left && !right)) return false;
  if (!left && !right) return true;
  return (
    isSymmetric(left.left, right.right) && isSymmetric(left.right, right.left)
  );
};
console.log(root);
console.log(isSymmetric(root.left, root.right));
