const calculatePower = (numbers) => 
  numbers.reduce((power, number) => power += number * 2, 0);