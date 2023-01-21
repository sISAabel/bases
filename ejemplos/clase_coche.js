class Coche {

  constructor(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
  }

  start() {
	  console.log(`🚗 Bruuumm ${this.brand}`);
  }

  accelerate() {
	  console.log("🚗💨 Wñeeeeeee ");
  }

  breake() {
	  console.log("🛑 🚗 Wiiiiii");
  }
}

let myCar = new Coche("Toyota", "Corolla", "Blanco");

console.log(myCar.brand);
console.log(myCar.model);
console.log(myCar.color);

myCar.start();
myCar.accelerate();
myCar.breake();
