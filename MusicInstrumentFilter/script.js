const instrumentsArr = [

  { category: "woodwinds", instrument: "Flute", price: 500 },
  { category: "woodwinds", instrument: "Clarinet", price: 200 },
  { category: "woodwinds", instrument: "Oboe", price: 4000 },
  { category: "brass", instrument: "Trumpet", price: 200 },
  { category: "brass", instrument: "Trombone", price: 300 },
  { category: "brass", instrument: "French Horn", price: 4300 },
  { category: "percussion", instrument: "Drum Set", price: 500 },
  { category: "percussion", instrument: "Xylophone", price: 3000 },
  { category: "percussion", instrument: "Cymbals", price: 200 },
  { category: "percussion", instrument: "Marimba", price: 3000 }

];

const selectContainer = document.querySelector(".select-container");
const productsContainer = document.querySelector(".products-container");

selectContainer.addEventListener("change", () => {
  productsContainer.innerHTML = instrumentCards(selectContainer.value).join("");
});


function instrumentCards(instrumentCategory) {
  const filteredInstruments = instrumentCategory === "all"
    ? instrumentsArr
    : instrumentsArr.filter(item => item.category === instrumentCategory);

  return filteredInstruments.map(item => {
    return `<div class="card"><h2>${item.instrument}</h2><p>$${item.price}</p></div>`;
  });
}

selectContainer.addEventListener("change", () => {
  console.log(instrumentCards(selectContainer.value));
});