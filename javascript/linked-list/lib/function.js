const LinkedList = require('./linkedList');
function zipLists(list1, list2) {

    let tail = list1.head;
    let current1 = list1.head.next;
    let current2 = list2.head;
    let count = 0;

    while (current1 !== null && current2 !== null) {
        if (count % 2 === 0) {
            tail.next = current2;
            current2 = current2.next;
        } else {
            tail.next = current1;
            current1 = current1.next;

        }
        tail = tail.next;
        count++;
    }

    if (current1 !== null) {
        tail.next = current1;
    }
    if (current2 !== null) {
        tail.next = current2;
    }

    return list1;
}
module.exports = zipLists;