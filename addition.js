const convertToArray = value => {
	return value.split(',');
};

const replaceNewline = value => {
	return value.replaceAll('\n',',');
};

const summation = numberArray => {
	let sum = 0;
	numberArray.forEach(element => {
		sum += parseInt(element);
	});
	return sum;
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
	const numberArray = convertToArray(replaceNewline(number));

	// return same number if only 1 number is present in array
	if(numberArray.length === 1)
	{
		return parseInt(numberArray[0]);
	}
	return summation(numberArray);
};

export { add };