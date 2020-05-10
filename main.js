"use strict";

import { Plants } from "./assets/js/Plants.js";

(function () {
  const $sunlight = document.querySelector("[data-js=sunlight]");
  const $water = document.querySelector("[data-js=water]");
  const $pet = document.querySelector("[data-js=pet]");

  function init() {
    initEvents();
    getPlants();
  }

  function initEvents() {}

  init();
})();
