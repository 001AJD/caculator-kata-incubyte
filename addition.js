const replaceNewline = value => {
	// replace all newline characters with comma
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
		sum += parseInt(element);
	});
	return sum;
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
		return replaceNewline(number).split(',');
	}
};

const add = number => {
	// return invalid if input type is not string
	if(typeof number !== 'string')
	{
		return 'invalid input'
	}

	// return 0 if input is empty string
	if(number === '')
	{
		return 0;
	}
	// extract array based on input
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