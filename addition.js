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
		// throw an exception if any negativeNumbers are present
		throw ('negatives not allowed' + negativeNumbers);
	}
};

const summation = numberArray => {
	// accepts array of string as an input, returns summation of all integers
	let sum = 0;
	checkNegativeNumbers(numberArray);
	numberArray.forEach(element => {
		let num = removeUnderscore(element);
		sum += parseInt(num);
	});
	return sum;
};

const removeUnderscore  = (num) => {
	if(num.includes('_'))
	{
		return num.replaceAll('_','');
	}
	else
	{
		return num;
	}
};

const determineDelimiter = (number) => {
	return number.substring(2,number.indexOf('\n'));
}

const extractArray = number => {
	if(number.startsWith('//'))
	{
		const delimiter = determineDelimiter(number);
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