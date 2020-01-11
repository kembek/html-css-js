const topClick = document.querySelectorAll(".page-list__item_top");

topClick.forEach(item =>
  item.addEventListener("click", function() {
    // alert("Click top");
    const top = document.querySelector(".main__inner_top");
    top.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  })
);

const firstClick = document.querySelectorAll(".page-list__item_first");

firstClick.forEach(item =>
  item.addEventListener("click", function() {
    // alert("Click first");

    const first = document.querySelector(".main__inner_first");
    first.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  })
);

const secondClick = document.querySelectorAll(".page-list__item_second");

secondClick.forEach(item =>
  item.addEventListener("click", function() {
    // alert("Click second");

    const second = document.querySelector(".main__inner_second");
    second.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
  })
);
