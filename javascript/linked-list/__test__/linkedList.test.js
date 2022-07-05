'use strict';
const LinkedList = require('../lib/linkedList');
describe("linked list tests", () => {


    it(" 1- Can successfully instantiate an empty linked list", () => {
        let L1 = new LinkedList();

        expect(L1.head).toBeNull();
    });
    test("2- Insert one node   into the linked list", () => {
        let l1 = new LinkedList();
        l1.Insert('one');
        expect(l1.head.value).toBe('one');
    });
    it("3- Insert multiple nodes into the linked list", () => {
        let l1 = new LinkedList();
        l1.Insert('one');
        l1.Insert('two');
        l1.Insert('three');
        expect(l1.head.value).toBe('one');
        expect(l1.head.next.value).toBe('two');
        expect(l1.head.next.next.value).toBe('three');
        expect(l1.head.next.next.next).toBeNull();

    });
    test("4 -  Node is found in linkList ", () => {
        let l1 = new LinkedList();
        l1.Insert('one');
        l1.Insert('two');
        l1.Insert('three');
        let found = l1.include('one');

        expect(found).toBe(true);

    });
    test("5 -  Node is not  found in linkList ", () => {
        let l1 = new LinkedList();
        l1.Insert('one');
        l1.Insert('two');
        l1.Insert('three');
        let notFound = l1.include('four');
        expect(notFound).toBe(false);
    });

    it(" 6-  Can properly return a collection of all the values that exist in the linked list", () => {
        let List = new LinkedList();
        List.Insert("1");
        List.Insert("2");
        List.Insert("3");
        List.Insert("4");
        List.Insert("5");
        List.Insert("6");
        List.Insert("7");

        expect(List.toString()).toEqual("1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> ");
    });





});







// Can properly insert into the linked list
// The head property will properly point to the first node in the linked list
// Can properly insert multiple nodes into the linked list
// Will return true when finding a value within the linked list that exists
// Will return false when searching for a value in the linked list that does not exist
// Can properly return a collection of all the values that exist in the linked list