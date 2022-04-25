import { add } from './addition.js';
import chai from 'chai';
const expect = chai.expect;

describe('Test suite for add function', ()=>{
	it('should return invalid input',(done)=>{
		const response = add(10);
		expect(response).to.be.equal('invalid input');
		done();
	});

	it('input empty string,should return 0',(done)=>{
		const response = add('');
		expect(response).to.be.equal(0);
		done();
	});

	it('should return the input', (done) => {
		const response = add('1');
		expect(response).to.be.equal(1);
		done();
	});

	it('input comma separated string of 2 numbers, should return sum', (done) => {
		const response = add('1,2');
		expect(response).to.be.equal(3);
		done();
	});

	it('input comma separated string of 2 numbers, should return sum', (done) => {
		const response = add('1,2,3');
		expect(response).to.be.equal(6);
		done();
	});

	it('should handle new line character and return sum of n numbers', (done)=>{
		const response = add('10,10\n10,10');
		expect(response).to.be.equal(40);
		done();
	});

	it('should handle new line character with custom delimiter and return sum of n numbers', (done)=>{
		const response = add('//:\n10:10:10:10');
		expect(response).to.be.equal(40);
		done();
	});
});