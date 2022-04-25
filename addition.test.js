import { add } from './addFunc.js';
import chai from 'chai';
const expect = chai.expect;

describe('Test suite for add function', ()=>{
	it('should return invalid input',(done)=>{
		const response = add(10);
		expect(response).to.be.equal('invalid input');
		done();
	});
});