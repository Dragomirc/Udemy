class Vehicle {
  constructor(protected color: string) {}

  public drive(): void {
    console.log('chugga chugga');
  }
  private honk(): void {
    console.log('beep');
  }
}

class Car1 extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  drive(): void {
    console.log('vroom');
    console.log(this.color);
  }
  startDrivingProcess(): void {
    this.drive();
  }
}
const car1 = new Car1(1, 'red1');
console.log(car1.drive());
const vehicle = new Vehicle('orange');
// console.log(vehicle.color);
