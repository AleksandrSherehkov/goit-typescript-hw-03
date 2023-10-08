class Key {
  constructor(private signature: number = Math.random()) {}
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`Welcome to the house, ${person.getKey().getSignature()}! You have a valid key.`);
    } else {
      console.log(`Not this time`);
    }
  }
}

class MyHouse extends House {
  openDoor(key: Key): void {
    this.door = key.getSignature() === this.key.getSignature();
    console.log(this.door ? 'You can come in' : 'The door is locked');
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(key);

house.comeIn(person);

export {};
