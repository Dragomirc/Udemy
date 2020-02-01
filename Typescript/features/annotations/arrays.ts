const carMakers = ['Ford', 'BMW', 'Mercedes'];
const dates = [new Date(), new Date()];
const carsByMake: string[][] = [['f150'], ['corolla']];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car;
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2020-01-31');
