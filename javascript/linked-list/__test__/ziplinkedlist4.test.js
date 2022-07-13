'use strict';

const LinkedList = require('../lib/linkedList');
const zipLists = require('../lib/function');

describe("zipped Linked Lists Tests", () => {

    test("  length linked list 1 = length linked list 2 ", (() => {
        const l1 = new LinkedList();
        const l2 = new LinkedList();
        l1.append('1');
        l1.append('2');
        l2.append('3');
        l2.append('4');
        l1.zipLists(l1, l2);
        expect(l1.length).toBe(2);
        expect(l2.length).toBe(2);
        expect(l1.head.value).toBe('1');
        expect(l1.head.next.value).toBe('3');
        expect(l1.head.next.next.value).toBe('2');
        expect(l1.head.next.next.next.value).toBe('4');
    }));

    test(" length linked list 1 != length linked list 2", (() => {
        const l1 = new LinkedList();
        const l2 = new LinkedList();
        l1.append('1');
        l1.append('2');
        l1.append('3');
        l2.append('4');
        l2.append('5');
        l1.zipLists(l1, l2);
        expect(l1.length).toBe(3);
        expect(l2.length).toBe(2);
        expect(l1.head.value).toBe('1');
        expect(l1.head.next.value).toBe('4');
        expect(l1.head.next.next.value).toBe('2');
        expect(l1.head.next.next.next.value).toBe('5');
        expect(l1.head.next.next.next.next.value).toBe('3');
    }));


});