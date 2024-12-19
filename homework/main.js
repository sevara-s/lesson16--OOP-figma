class Transport {
  name;
  speed;
  capacity;
  constructor(name, speed, capacity) {
    this.name = name;
    this.speed = speed;
    this.capacity = capacity;
  }
  start() {
    console.log(`${this.name} harakatga tushdi`);
  }
  stop() {
    console.log(`${this.name} to'xtadi`);
  }
}
class Car extends Transport {
  fuelType;
  constructor(name, speed, capacity, fuelType) {
    super(name, speed, capacity, fuelType);
    this.fuelType = fuelType;
  }
  driveMode(mode) {
    console.log(`${this.name} avtomobil ${this.mode} ga o'tdi`);
  }
}
class Airplane extends Transport {
  altitude;
  constructor(name, speed, capacity, altitude) {
    super(name, speed, capacity, altitude);
    this.altitude = altitude;
  }
  fly() {
    console.log(`${this.name} samalyot uchishni boshladi`);
  }
}
class Ship extends Transport {
  cargoCapacity;
  constructor(name, speed, capacity, cargoCapacity) {
    super(name,speed,capacity);
    this.cargoCapacity = cargoCapacity;
  }
  sail() {
    console.log(`Kema suzishni boshladi`);
  }
}
let transport1 = new Transport("Tesla", "200vh", "4");
transport1.start();
let ship = new Ship("ship1", "500vh", 5);
ship.sail();
ship.start();
