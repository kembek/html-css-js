function Phone(model, processor, ram) {
  if (!this instanceof Phone) {
    return new Phone(model, processor, ram);
  }

  return {
    model,
    processor,
    ram
  };
}

const nokia = new Phone("Nokia", "intel", "4gb");
const samsung = Phone("Samsung", "amd", "4gb");

console.log({
  nokia,
  samsung
});
