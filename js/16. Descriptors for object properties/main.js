function Human(name, lastName, birthday) {
  this.name = name;
  this.lastName = lastName;

  this.birthday = birthday;
  this.walk = function() {
    alert(`I'm ${this.fullName} and I walk.`);
  };

  this.eat = function() {
    alert(`I'm ${this.fullName} and I eat.`);
  };

  const basicProperty = {
    enumerable: true,
    writable: false,
    configurable: false
  };
  // Object.
  Object.defineProperties(this, {
    name: {
      enumerable: true,
      writable: false,
      configurable: false
      // get() {
      //   return this.name;
      // },
      // set(value) {
      //   this.name = value;
      // }
    },
    lastName: {
      enumerable: true,
      writable: false,
      configurable: false
      // get() {
      //   return this.lastName;
      // },
      // set(value) {
      //   this.lastName = value;
      // }
    },
    age: {
      get() {
        const now = Date.now();
        const birthday = this.birthday;
        console.log(birthday);
        const age = new Date(now - birthday);
        const displayAge = `${age.getDate()}.${age.getMonth() +
          1}.${age.getFullYear()}`;

        return displayAge;
      }
    },
    walk: {
      enumerable: false,
      writable: false,
      configurable: false
    },
    eat: {
      enumerable: false,
      writable: false,
      configurable: false
    },
    fullName: {
      get() {
        return `${this.lastName} ${this.name}`;
      }
    }
  });
}

console.group("Human descriptors");
console.log(Object.getOwnPropertyNames(Human));
console.log(Object.keys(Human));
console.groupEnd();

const user = new Human("Jake", "Smith", new Date(1980, 5, 12));
console.group("User");
console.log(user.name);
console.log(user.lastName);
console.log(user.fullName);
console.log(user.age);
console.log(user.walk());
console.log(user.eat());
console.groupEnd();
