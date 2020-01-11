const HumanTranslate = (function() {
  let language = {};

  return {
    sayHello() {
      language.sayHello();
    },
    setLanguage(newLanguage) {
      language = newLanguage;
    }
  };
})();

const Language = function() {};
Language.prototype.sayHello = function() {};

const KyrgyzLg = function() {};
KyrgyzLg.prototype = Object.create({}, new Language());
KyrgyzLg.prototype.sayHello = () => {
  console.log("Салам стратегия паттерн");
};

const RussianLg = function() {};
RussianLg.prototype = Object.create({}, new Language());
RussianLg.prototype.sayHello = () => {
  console.log("Привет паттерн стратегия");
};

const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log("*** --- ***"));
  }, 2000);
});

(async function() {
  HumanTranslate.setLanguage(new KyrgyzLg());
  HumanTranslate.sayHello();
  await prom;
  HumanTranslate.setLanguage(new RussianLg());
  HumanTranslate.sayHello();
})();
