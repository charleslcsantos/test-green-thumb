"use strict";

import { Plants } from "./assets/js/Plants.js";

const $sunlight = document.querySelector("[data-js=sunlight]");
const $water = document.querySelector("[data-js=water]");
const $pet = document.querySelector("[data-js=pet]");

const $resultList = document.querySelector("[data-js=resultList]");

const $form = document.querySelector("[data-js=form]");
const $filter = {
  sunlight: "",
  water: "",
  pet: "",
};

(function () {
  function init() {
    initFormEvent();
  }

  function initFormEvent() {
    $form.addEventListener("change", (e) => {
      $filter[e.target.name] = e.target.value;

      if ($filter.sunlight && $filter.water && $filter.pet) getPlants();
    });
  }

  function getPlants() {
    const result = Plants.getPlants(
      $filter.sunlight,
      $filter.water,
      $filter.pet
    );

    result
      .then((plants) => renderList(plants))
      .catch((err) => console.log("err >>", err));
  }

  function renderList(plants) {
    console.log("plants", plants);

    let plantsCards = [];

    if (Array.isArray(plants)) {
      plants.map((plant) => plantsCards.push(Plants.renderPlantCard(plant)));
    }

    $resultList.innerHTML = plantsCards.join("");
  }

  init();
})();
