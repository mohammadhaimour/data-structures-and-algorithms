'use strict';

const Stack = require('../stack/lib/stack');
const Queue = require('../queue/lib/queue');

describe('Stack and Queue test', () => {
    //1
    test('1- Can successfully push onto a stack', () => {
        let stack = new Stack();
        stack.push(1);
        expect(stack.top.value).toBe(1);
        expect(stack.peek()).toBe(1);
    });

    //2
    it('2-Can successfully push multiple values onto a stack', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.top.value).toBe(3);
        expect(stack.peek()).toBe(3);
    });


    //3
    it('3-Can successfully pop off the stack', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);
        stack.pop();
        expect(stack.top.value).toBe(2);
        expect(stack.peek()).toBe(2);

    });



    it('4-Can successfully empty a stack after multiple pops', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        stack.pop();
        stack.pop();
        stack.pop();

        expect(stack.top).toBeNull();
    });




    it('5- Can successfully peek the next item on the stack', () => {
        let stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.push(3);

        expect(stack.peek()).toBe(3);
    });


    it('6-Can successfully instantiate an empty stack', () => {
        let stack = new Stack();
        expect(stack.top).toBeNull();
    });

    it('7-Calling pop or peek on empty stack raises exception', () => {
        let stack = new Stack();
        expect(stack.pop()).toBeNull;
        expect(stack.peek()).toBeNull;

    });


    it('8- Can successfully enqueue into a queue', () => {
        let queue = new Queue();
        queue.enqueue(1);
        expect(queue.front.val).toBe(1);
        expect(queue.rear.val).toBe(1);
    });


    it('9-Can successfully enqueue multiple values into a queueCan successfully enqueue multiple values into a queue', () => {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.front.val).toBe(1);
        expect(queue.rear.val).toBe(3);
    });


    it('10-Can successfully dequeue out of a queue the expected value', () => {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.dequeue()).toBe(1);
    });


    it('11-Can successfully peek into a queue, seeing the expected value', () => {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        expect(queue.peek()).toBe(1);
    });


    it('12- Can successfully empty a queue after multiple dequeues', () => {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);

        queue.dequeue();
        queue.dequeue();
        queue.dequeue();

        expect(queue.front).toBeNull();
    });


    it('13-Can successfully instantiate an empty queue', () => {
        let queue = new Queue();
        expect(queue.front).toBeNull();
    });

    it('14-Calling dequeue or peek on empty queue raises exception', () => {
        let queue = new Queue();


        expect(queue.dequeue()).toBeNull;
        expect(queue.peek()).toBeNull;
    });
});