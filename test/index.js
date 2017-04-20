'use strict';

const rangeArrayToString = require('./../lib/index.js');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

const expect = chai.expect;

describe('rangeArrayToString', () => {
	it('test', (done) => {
		rangeArrayToString([1, 2, 3, 4, 5, 6, 7, 8])
			.then((str) => {
				expect(str).to.equal('1-8');
				done();
			})
			.catch((err) => {
				done(err);
			});
	});

	it('test 1', (done) => {
		rangeArrayToString([1, 3, 4, 5, 6, 7, 8])
			.then((str) => {
				expect(str).to.equal('1,3-8');
				done();
			})
			.catch((err) => {
				done(err);
			});
	});

	it('test 2', (done) => {
		rangeArrayToString([1, 3, 4, 5, 6, 7, 8, 10, 11, 12])
			.then((str) => {
				expect(str).to.equal('1,3-8,10-12');
				done();
			})
			.catch((err) => {
				done(err);
			});
	});

	it('test 3', (done) => {
		rangeArrayToString([1, 2, 3])
			.then((str) => {
				expect(str).to.equal('1-3');
				done();
			})
			.catch((err) => {
				done(err);
			});
	});

	it('test 4', (done) => {
		rangeArrayToString([1, 2])
			.then((str) => {
				expect(str).to.equal('1,2');
				done();
			})
			.catch((err) => {
				done(err);
			});
	});

	it('test 5', (done) => {
		rangeArrayToString([1, 2, 4])
			.then((str) => {
				expect(str).to.equal('1,2,4');
				done();
			})
			.catch((err) => {
				done(err);
			});
	});

	it('test 6', (done) => {
		rangeArrayToString([1, 2, 4, 5, 6])
			.then((str) => {
				expect(str).to.equal('1,2,4-6');
				done();
			})
			.catch((err) => {
				done(err);
			});
	});

	it('test 7', (done) => {
		rangeArrayToString([1, 2, 3, 7, 8, 9, 15, 17, 19, 20, 21])
			.then((str) => {
				expect(str).to.equal('1-3,7-9,15,17,19-21');
				done();
			})
			.catch((err) => {
				done(err);
			});
	});

	it('test 8', (done) => {
		rangeArrayToString([1, 2, 3, 4, 5, 6, 100, 1091, 1999, 2000, 2001, 2002])
			.then((str) => {
				expect(str).to.equal('1-6,100,1091,1999-2002');
				done();
			})
			.catch((err) => {
				done(err);
			});
	});

	it('test 9', (done) => {
		rangeArrayToString([1])
			.then((str) => {
				expect(str).to.equal('1');
				done();
			})
			.catch((err) => {
				done(err);
			});
	});

	it('test 10', (done) => {
		rangeArrayToString([1, 3, 5, 7, 9, 11])
			.then((str) => {
				expect(str).to.equal('1,3,5,7,9,11');
				done();
			})
			.catch((err) => {
				done(err);
			});
	});
});
