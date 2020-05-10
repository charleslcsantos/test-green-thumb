"use strict";

import { Plants } from "./assets/js/Plants.js";

(function () {
  function init() {
    getPlants();
  }

  function getPlants() {
    Plants.getPlants()
      .then(async (result) => {
        console.log("result", await result.json());
      })
      .catch((err) => {});
  }

  init();
})();
