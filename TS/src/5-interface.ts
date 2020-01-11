interface Person {
  firstName: string;
  lastName: string;
  age: number;
}

function debugPerson(person: Person) {
  console.dir("This person", person);
}

const luke = {
  firstName: "Luke",
  lastName: "Sky Waker",
  age: 21
};

debugPerson(luke);

interface User {
  firstName: string;
  lastName: string;
  age: number;
  isActive: boolean;
}

class User {
  fullName: string;
  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    public isActive: boolean
  ) {
    this.fullName = `${firstName} ${lastName}`;
  }

  public greet() {
    console.log(this.fullName);
  }
}

const obi = new User("Obi", "Van", 30, true);
