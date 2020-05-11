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
    $resultList.innerHTML = Plants.renderResultList(null);
    initFormEvent();
  }

  function initFormEvent() {
    $form.addEventListener("change", (e) => {
      if (e.target.value && e.target.value != "") {
        $filter[e.target.name] = e.target.value;
        if ($filter.sunlight && $filter.water && $filter.pet) getPlants();
      } else {
        $resultList.innerHTML = Plants.renderResultList(null);
      }
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
      .catch((err) => ($resultList.innerHTML = Plants.renderResultList(null)));
  }

  function renderList(plants) {
    console.log("plants", plants);
    $resultList.innerHTML = Plants.renderResultList(plants);
  }

  init();
})();
