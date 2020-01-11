console.log(
  new Date(
    new Date("2019-12-28T06:00").getTime() +
      new Date().getTimezoneOffset() * -1 * 60 * 1000
  )
);
