import { state } from "./state.js";
import { properties } from "../data/properties.js";
import { renderProperties } from "./render.js";
import { renderInsights } from "./render.js";
import { getFilteredProperties } from "./filters.js";

// Load data into state
state.properties = properties;

// render the data
renderProperties(state.properties)
renderInsights(state.properties)

const keywordInput = document.getElementById("keyword");
const minPrice = document.getElementById("min-price");
const maxPrice = document.getElementById("max-price");
const minYield = document.getElementById("min-yield");


function update() {
  const filtered = getFilteredProperties(state);
  renderProperties(filtered);
  renderInsights(filtered);
}

keywordInput.addEventListener("input", (event) => {
  state.filters.keyword = event.target.value;
  update();
});

minPrice.addEventListener("input", (event) => {
  state.filters.minPrice = event.target.value;
  update();
})

maxPrice.addEventListener("input", (event) => {
  state.filters.maxPrice = event.target.value;
  update()
});

minYield.addEventListener("input", (event) => {
  state.filters.minYield = event.target.value;
  update()
});
