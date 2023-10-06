class Key {
  private signature: number;
  constructor(signature: number = Math.random()) {
    this.signature = signature;
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.door = false;
    this.key = key;
  }

  abstract OpenDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`Welcome to hell bro ${person.getKey().getSignature()}you have valid key`);
    } else {
      console.log(`Not this time`);
    }
  }
}

class MyHouse extends House {
  OpenDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('You can come in');
    } else {
      console.log('The door is locked');
    }
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.OpenDoor(key);

house.comeIn(person);

export {};
