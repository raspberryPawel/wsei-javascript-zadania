// #### Zadanie 1
const list = document.getElementsByClassName("list");
console.log(list);

// #### Zadanie 2
const showTags = (tag) => {
  const tags = document.getElementsByTagName(tag);
  console.log(tags);
};
showTags("div");
showTags("ul");

// #### Zadanie 3
const secondList = document.getElementById("list");
console.log(secondList);

// #### Zadanie 4
const show = (elements) => {
  console.log(elements);
};

// 1. wszystkie elementy li na stronie
show(document.getElementsByTagName("li"));
// 2. wszystkie elementy ul na stronie
show(document.getElementsByTagName("ul"));
// 3. wszystkie spany na stronie
show(document.getElementsByTagName("span"));
// 4. wszystkie spany znajdujące się w elemencie div z klasą list
const spans = [];
[...document.getElementsByClassName("list")].map((element) => {
  spans.push(...element.getElementsByTagName("span"));
});
show(spans);

// 5. wszystkie spany znajdujące się w elemencie div który posiada id="spans"

const secSpans = document.getElementById("spans").getElementsByTagName("span");
show(secSpans);
