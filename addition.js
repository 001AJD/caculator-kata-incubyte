const replaceNewlineCharacterWithComma = value => {
	return value.replaceAll('\n',',');
};

const checkNegativeNumbers = numberArray => {
	let negativeNumbers = [];
		numberArray.forEach(element => {
			if(parseInt(element) < 0)
			{
				negativeNumbers.push(element);
			}
		});
		if(negativeNumbers.length > 0)
		{
			throw ('negatives not allowed' + negativeNumbers);
		}
};

const summation = numberArray => {
	// accepts array of string as an input, returns summation of all integers
	let sum = 0;
	checkNegativeNumbers(numberArray);
	numberArray.forEach(element => {
		sum += parseInt(element);
	});
	return sum;
};

const extractArray = number => {
	if(number[0] === '/' && number[1] === '/')
	{
		const delimiter = number[2];
		number = number.substring(4);
		return number.split(delimiter);
	}
	else
	{
		return replaceNewlineCharacterWithComma(number).split(',');
	}
};

const add = number => {
	if(typeof number !== 'string')
	{
		return 'invalid input'
	}
	if(number === '')
	{
		return 0;
	}
	const numberArray = extractArray(number);
	if(numberArray.length === 1)
	{
		return parseInt(numberArray[0]);
	}
	try
	{
		return summation(numberArray);
	}
	catch(e)
	{
		return e;
	}
};
export { add };