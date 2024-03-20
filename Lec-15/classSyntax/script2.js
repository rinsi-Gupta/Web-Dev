
class Vehicle {
    constructor(np, color) {
        this.np = np;
        this.color = color;
    }

    printVehicle() {
        console.log(this.np, this.color);
    }
}

class Car extends Vehicle {
    constructor(np, color, mileage){
        super(np, color)
        this.mileage = mileage;
    }

    printMileage(){
        console.log(this.mileage);
    }
}

let v1 = new  Vehicle('235KKDJ23', 'Black');
let c1 = new Car('2900009092', 'Brown', '15kmph');