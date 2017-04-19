'use strict';

const rangeArrayToString = require('./../lib/index.js');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const expect = chai.expect;

describe('rangeArrayToString', () => {
	it('test', () => {
		return expect(rangeArrayToString([1, 2, 3, 4, 5, 6, 7, 8])).to.eventually.equal('1-8');
	});

	it('test 1', () => {
		return expect(rangeArrayToString([1, 3, 4, 5, 6, 7, 8])).to.eventually.equal('1,3-8');
	});

	it('test 2', () => {
		return expect(rangeArrayToString([1, 3, 4, 5, 6, 7, 8, 10, 11, 12])).to.eventually.eql('1,3-8,10-12');
	});

	it('test 3', () => {
		return expect(rangeArrayToString([1, 2, 3])).to.eventually.eql('1-3');
	});

	it('test 4', () => {
		return expect(rangeArrayToString([1, 2])).to.eventually.eql('1,2');
	});

	it('test 5', () => {
		return expect(rangeArrayToString([1, 2, 4])).to.eventually.eql('1,2,4');
	});

	it('test 6', () => {
		return expect(rangeArrayToString([1, 2, 4, 5, 6])).to.eventually.eql('1,2,4-6');
	});

	it('test 7', () => {
		return expect(rangeArrayToString([1, 2, 3, 7, 8, 9, 15, 17, 19, 20, 21])).to.eventually.eql('1-3,7-9,15,17,19-21');
	});

	it('test 8', () => {
		return expect(rangeArrayToString([1, 2, 3, 4, 5, 6, 100, 1091, 1999, 2000, 2001, 2002])).to.eventually.eql('1-6,100,1091,1999-2002');
	});

	it('test 9', () => {
		return expect(rangeArrayToString([1])).to.eventually.eql('1');
	});

	it('test 10', () => {
		return expect(rangeArrayToString([1, 3, 5, 7, 9, 11])).to.eventually.eql('1,3,5,7,9,11');
	});
});
