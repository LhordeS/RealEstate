console.log("main.js is running");

import { state } from "./state.js";
import { properties } from "../data/properties.js";
import { renderProperties } from "./render.js";

// Load data into state
state.properties = properties;

// render the data
renderProperties(state.properties)
