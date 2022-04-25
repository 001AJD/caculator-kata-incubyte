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
});