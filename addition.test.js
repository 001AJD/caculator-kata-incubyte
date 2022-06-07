import { add } from './addition.js';
import { expect } from 'chai';

describe('Test suite for add function', ()=>{
	it('should return invalid input',(done)=>{
		// arrange
		const input = 10;
		// act
		const response = add(input);
		// assert
		expect(response).to.be.equal('invalid input'); // assert
		done();
	});

	it('input empty string,should return 0',(done)=>{
		const input = '';
		const response = add(input);
		expect(response).to.be.equal(0);
		done();
	});

	it('should return the input', (done) => {
		const input = '1';
		const response = add(input);
		expect(response).to.be.equal(1);
		done();
	});

	it('input comma separated string of 2 numbers, should return sum', (done) => {
		const input = '1,2';
		const response = add(input);
		expect(response).to.be.equal(3);
		done();
	});

	it('input comma separated string of 2 numbers, should return sum', (done) => {
		const input = '1,2,3';
		const response = add(input);
		expect(response).to.be.equal(6);
		done();
	});

	it('should handle new line character and return sum of n numbers', (done)=>{
		const input = '10,10\n10,10';
		const response = add(input);
		expect(response).to.be.equal(40);
		done();
	});

	it('should handle new line character with custom delimiter and return sum of n numbers', (done)=>{
		const input = '//:\n10:10:10:10';
		const response = add(input);
		expect(response).to.be.equal(40);
		done();
	});

	it('should throw an exception when negative number is passed in input', (done)=>{
		const input = '//:\n10:10:-10:-10';
		const response = add(input);
		expect(response).to.be.equal('negatives not allowed-10,-10');		
		done();
	});
	it('should handle delimiter length more than 1', (done)=>{
		const input = '//::\n10::10::10::10';
		const response = add(input);
		expect(response).to.be.equal(40);
		done();
	});
});