'use strict';
const LinkedList = require('../lib/linkedList');
describe("linked list tests", () => {
    test("create a linklist", () => {
        let list = new LinkedList();
        expect(list.head).toBeNull();
    })


    test("Insert  node to the end of the linked list", (() => {
        const ll = new LinkedList();
        ll.append('one');
        ll.append('two');
        expect(ll.head.value).toBe("one");
        expect(ll.head.next.next).toBeNull();
        expect(ll.length).toBe(2);

    }));

    test("Insert multiple nodes to the end of a linked list", () => {
        const ll = new LinkedList();
        ll.append("one");
        ll.append("two");
        ll.append("three");
        expect(ll.head.value).toEqual("one");
        expect(ll.head.next.value).toEqual("two");
        expect(ll.head.next.next.value).toEqual("three");
        expect(ll.length).toBe(3);
    });

    test(' Insert a node before a node located in parameter in linked list', (() => {
        const ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        ll.insertBefore(2, 3);
        expect(ll.head.next.value).toEqual(3);
        expect(ll.head.next.next.value).toEqual(2);
        console.log(ll.toString());
    }));

    test(' Insert a node before the first node of a linked list', (() => {
        const ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        ll.insertBefore(1, 3);
        expect(ll.head.value).toEqual(3);
        expect(ll.length).toEqual(3);
        console.log(ll.toString());
    }));


    test('Insert a node after a node located in parameter in linked list', (() => {
        const ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        ll.append(3);
        ll.insertAfter(2, 0);
        expect(ll.head.next.next.value).toEqual(0);
        console.log("insertAfter  node ", ll.toString());

    }));

    test(' Insert a node after the last node of the linked list', (() => {
        const ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        ll.insertAfter(2, 3);
        expect(ll.head.next.next.value).toEqual(3);
        expect(ll.length).toEqual(3);
        console.log("insertAfter last node", ll.toString());
    }));





});







// Can properly insert into the linked list
// The head property will properly point to the first node in the linked list
// Can properly insert multiple nodes into the linked list
// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
// Can properly return a collection of all the values that exist in the linked list