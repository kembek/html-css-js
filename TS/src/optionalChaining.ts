interface User {
  name: string;
  age: number;
}

const user: User | null = null;

// const username = user?.name;

console.log(user?.name);
