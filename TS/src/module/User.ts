class User {
  constructor(username, age) {
    return {
      username,
      age
    };
  }
}

export const printUser = user =>
  console.log(`User name is ${user.username}, old ${user.age}`);

export default User;
