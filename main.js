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
    $resultList.innerHTML = Plants.renderResult(null);
    initFormEvent();
  }

  function initFormEvent() {
    $form.addEventListener("change", (e) => {
      if (e.target.value && e.target.value != "") {
        $filter[e.target.name] = e.target.value;
        if ($filter.sunlight && $filter.water && $filter.pet) getPlants();
      } else {
        $resultList.innerHTML = Plants.renderResult(null);
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
      .catch((err) => renderList(null));
  }

  function renderList(plants) {
    $resultList.innerHTML = Plants.renderResult(plants);
    if (plants) {
      initEventScrollToTop();
    }
  }

  window.initEventScrollToTop = () => {
    const scrollStep = -window.scrollY / (200 / 15),
      scrollInterval = setInterval(function () {
        if (window.scrollY != 0) {
          window.scrollBy(0, scrollStep);
        } else clearInterval(scrollInterval);
      }, 15);
  };

  init();
})();
