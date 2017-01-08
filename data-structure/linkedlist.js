function Node(d) {
  this.data = d;
  this.next = null;
  this.add = function(n) {
    var newNode = new Node(n);
    this.next = newNode;
    return newNode;
  }
}

var node = new Node(1);
node.add(2);
