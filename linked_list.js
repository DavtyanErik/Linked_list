class Linked_list {
  constructor (data) {
    this.data = data;
    this.next = null;
  }

  append (element) {
    let new_element = new Linked_list(element);
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
    let second_element = new Linked_list(this.data);
    second_element.next = this.next;
    this.data = element;
    this.next = second_element;
  }

  reverse () {
    let reversed_list = new Linked_list(this.data);
    let check = this;
    while (check.next) {
      reversed_list.prepend(check.next.data);
      check = check.next;
    }
    return reversed_list;
  }
};

const a = new Linked_list('Erik');

a.prepend('Kalipso');
a.prepend('Edgar');
console.log(a);
console.log(a.length());
console.log(a.reverse());
