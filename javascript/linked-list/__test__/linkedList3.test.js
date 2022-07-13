
'use strict';

const LinkedList = require('../lib/linkedList');

describe("Linked List Tests", () => {
    test("1-Where k is greater than the length of the linked list", (() => {
        const ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        expect(ll.length).toBe(2);
        expect(ll.kthFromEnd(5)).toBe('Exception');
    }));

    test("2-Where k and the length of the list are the same", (() => {
        const ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        expect(ll.length).toBe(2);
        expect(ll.kthFromEnd(0)).toBe(2);
        expect(ll.kthFromEnd(1)).toBe(1);
        expect(ll.kthFromEnd(2)).toBe(1);
        expect(ll.kthFromEnd(3)).toBe('Exception');

    }));

    test("3-Where k is not a positive integer", (() => {
        const ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        expect(ll.kthFromEnd(-11)).toBe('Exception');

    }));

    test("4-Where the linked list is of a size 1", () => {
        const ll = new LinkedList();
        ll.append(1);
        expect(ll.length).toBe(1);
        expect(ll.kthFromEnd(0)).toBe(1);
        expect(ll.kthFromEnd(1)).toBe(1);
        expect(ll.kthFromEnd(2)).toBe('Exception');
    });

    test('5- “Happy Path” where k is not at the end, but somewhere in the middle of the linked list', (() => {
        const ll = new LinkedList();
        ll.append(1);
        ll.append(2);
        ll.append(3);
        expect(ll.length).toBe(3);
        expect(ll.kthFromEnd(1)).toBe(2);
    }));

});