const replaceNewline = value => {
	// replace all newline characters with comma
	return value.replaceAll('\n',',');
};

const summation = numberArray => {
	// accepts array of string as an input
	let sum = 0;
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
	return summation(numberArray);
};

export { add };