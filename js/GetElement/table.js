// get table
const table = document.body.children[0];

console.group("table navigation");
console.log("table.rows");
console.log(table.rows);
console.log("table caption");
console.log(table.caption);
console.log("table tHead");
console.log(table.tHead);
console.log(
  "table tBodies коллекция элементов таблицы их может быть несколько tbody"
);
console.log(table.tBodies);
console.log("table tFoot");
console.log(table.tFoot);
console.groupEnd();

console.group("Thead/Tbody/Tfoot - tr collection -- строки");
console.log("table tBodies[0]");
console.log(table.tBodies[0].rows);
console.groupEnd();

console.group("TR -- строка");
console.log("table tBodies[0].rows[0].cells");
console.log(table.tBodies[0].rows[0].cells);
console.log(
  "table tBodies[0].rows[0].sectionRowIndex - номер строки текущей секции"
);
console.log(table.tBodies[0].rows[0].sectionRowIndex);
console.log("table tBodies[0].rows[0].rowIndex - номер строки в таблице");
console.log(table.tBodies[0].rows[0].rowIndex);
console.groupEnd();

console.group("TD/TH -- ячейки");
console.log(
  "table tBodies[0].rows[0].cells[0].cellIndex - номер ячейки в строке"
);
console.log(table.tBodies[0].rows[0].cells[0].cellIndex);
console.groupEnd();

[
  "Man City",
  "Liverpool",
  "Tottenham",
  "Arsenal",
  "Man Utd",
  "Chelsea",
  "Wolves",
  "Watford",
  "West Ham",
  "Leicester",
  "Everton",
  "Bournemouth",
  "Newcastle",
  "Crystal Palace",
  "Brighton",
  "Southampton",
  "Burnley",
  "Cardiff",
  "Fulham",
  "Huddersfield"
]
