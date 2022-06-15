'use strict';
const LinkedList = require('../lib/linkedList');
describe("linked list tests", () => {
    test("create a linklist", () => {
        let list = new LinkedList();
        expect(list.head).toBeNull;
    });
    test("Insert into the linked list", () => {
        let list = new LinkedList();
        list.Insert('one');
        expect(list.head.value).toBe('one');
    });
    it("Insert multiple nodes into the linked list", () => {
        let list = new LinkedList();
        list.Insert('one');
        list.Insert('two');
        list.Insert('three');
        expect(list.head.value).toBe('one');
    });
    test("Inclde node ", () => {
        let list = new LinkedList();
        list.Insert('one');
        list.Insert('two');
        list.Insert('three');
        let found = list.include('one');
        let notFound = list.include('four');
        expect(found).toBe(true);
        expect(notFound).toBe(false);
    });



    it(" collection of all the values in linked list", () => {
        let List = new LinkedList();
        List.Insert("1");
        List.Insert("2");
        List.Insert("3");

        expect(List.toString()).toEqual("1 -> 2 -> 3 -> ");
    });
});