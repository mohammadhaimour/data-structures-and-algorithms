'use strict';
const queue = require('../queue/lib/queue');

class AnimalShelter {

    constructor() {
        this.dog = new queue();
        this.cat = new queue();
    }

    enqueue(animal) {
        if (animal === 'cat') {
            this.cat.enqueue(animal);
            return 'add cat';
        }
        else if (animal === 'dog') {
            this.dog.enqueue(animal);
            return 'add dog';
        }
        else {
            return "enter cat or dog";
        }

    }

    dequeue(pref) {
        if (pref === "cat") {

            if (!this.cat.isEmpty()) {
                return this.cat.dequeue();
            }
            else {
                return null;
            }

        }

        if (pref === "dog") {

            if (!this.dog.isEmpty()) {
                return this.dog.dequeue();
            }
            else {
                return null;
            }

        }

    }



}

module.exports = AnimalShelter;