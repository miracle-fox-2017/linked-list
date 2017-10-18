var LinkedList = function () {

  let obj = {},
  first,
  last;

  obj.add = function (value) {
    var data = new Data(value);
    if (first == null) {
      first = last = data;
    }else {
      last.next = data;
      last = data;
    }
  };

  obj.list = function (value) {
    var value = first;
    first = first.next;
    return value;
  };

  obj.show = function () {
    var head = first;
    while (head != null) {
      console.log(head.value);
      head = head.next;
    }
  };

  // obj.remove = function (index) {
  //   var i = 0;
  //   var current = first, previous;
  //   if (index === 0) {
  //     //handle special case - first node
  //     first = current.next;
  //   }else {
  //     while (i++ < index) {
  //       //set previous to first node
  //       previous = current;
  //
  //       //set current to the next one
  //       current = current.next;
  //     }
  //
  //     //skip to the next node
  //     previous.next = current.next;
  //   }
  //
  //   return current.value;
  // };
  obj.remove = function (value) {
    var found = false;
    var head = first;
    while (head != null) {
      if (first.value == value) {
        prev = head = first = first.next;
        found = true;
      } else {
        if (head.value == value) {
          found = true;
          prev.next = head.next;
        }

        prev = head;
        head = head.next;
      }
    }

    if (!found) {
      console.log('#' + value + ' not found');
    }
  };

  obj.update = function (value, newValue) {
    var head = first;
    while (head != null) {
      if (head.value == value) {
        head.value = newValue;
      }

      head = head.next;
    }

  };

  var Data = function (value) {
    this.value = value;
    var next = {};
  };

  return obj;
};

var linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(5);
linkedList.remove(3);
linkedList.update(5, 4);

console.log(linkedList.list());
