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

};

export { add };