class Node  {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
  append (element) {
    let new_element = new Node (element);
    let pointer = this;
    while (pointer.next != null){
      pointer = pointer.next;
    }
    pointer.next = new_element;
  }
  length () {
    let pointer = this;
    let length = 1;
    while (pointer != null){
      pointer = pointer.next;
      length++;
    }
    return length;
  }
  prepend (element) {
    let second_element = new Node (this.data);
    second_element.next = this.next;
    this.data = element;
    this.next = second_element;
  }
  reverse () {
    let reversed_list = new Node (this.data);
    let check = this;
    while (check.next) {
      reversed_list.prepend(check.next.data);
      check = check.next;
    }
    return reversed_list;
  }
};

const arrayOf = function (array) {
  let newLinkList = new Node (array[0]);
  for (let i = 1; i < array.length; ++i) {
    newLinkList.append (array[i]);
  }
  return newLinkList;
}

const a = new Node ('Gohar');
a.prepend('Kalipso');
a.prepend('Edgar');
console.log(arrayOf ([1, 2, 3]));
