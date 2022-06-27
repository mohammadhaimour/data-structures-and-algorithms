'use strict';

const animal = require('../../animal_shelter/animal_sheleter');

describe('Animal Shelter Test', () => {
    it('Can successfully enqueue a cat', () => {
        let animal1 = new animal();

        expect(animal1.enqueue('cat')).toBe('add cat');
    });

    it('Can successfully enqueue a most of  cat', () => {
        let animal1 = new animal();

        expect(animal1.enqueue('cat')).toBe('add cat');
        expect(animal1.enqueue('cat')).toBe('add cat');
        expect(animal1.enqueue('cat')).toBe('add cat');
        expect(animal1.enqueue('cat')).toBe('add cat');
    });

    it('Can successfully enqueue a dog', () => {
        let animal1 = new animal();

        expect(animal1.enqueue('dog')).toBe('add dog');
    });

    it('Can successfully enqueue a most of  dog', () => {
        let animal1 = new animal();

        expect(animal1.enqueue('dog')).toBe('add dog');
        expect(animal1.enqueue('dog')).toBe('add dog');
        expect(animal1.enqueue('dog')).toBe('add dog');
        expect(animal1.enqueue('dog')).toBe('add dog');
    });

    it('Can successfully dequeue from   cat queue', () => {
        let animal1 = new animal();
        animal1.enqueue('cat')
        animal1.enqueue('cat')
        animal1.enqueue('cat')

        expect(animal1.dequeue('cat')).toBe('cat');
        expect(animal1.dequeue('cat')).toBe('cat');
        expect(animal1.dequeue('cat')).toBe('cat');
        expect(animal1.dequeue('cat')).toBeNull();

    });

    it('Can successfully dequeue from   dog queue', () => {
        let animal1 = new animal();
        animal1.enqueue('dog')
        animal1.enqueue('dog')
        animal1.enqueue('dog')

        expect(animal1.dequeue('dog')).toBe('dog');
        expect(animal1.dequeue('dog')).toBe('dog');
        expect(animal1.dequeue('dog')).toBe('dog');
        expect(animal1.dequeue('dog')).toBeNull();

    });


});