'use strict';

const brackets = require('../brackets');


describe('Test brackets function', () => {

    it('Test this string   {}', () => {
        expect(brackets('{}')).toBe(true);
    });


    it('Test this string    ()[[Extra Characters]]', () => {
        expect(brackets('()[[Extra Characters]]')).toBe(true);
    });

    it('Test this string   (){}[[]] ', () => {
        expect(brackets('(){}[[]]')).toBe(true);
    });

    it('Test this string   [({}] ', () => {
        expect(brackets('[({}]')).toBe(false);
    });

    it('Test this string    (](', () => {
        expect(brackets('(](')).toBe(false);
    });



});