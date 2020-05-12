"use strict";

import { Plants } from "./assets/js/Plants.js";

const $loaderComponent = document.querySelector("[data-js=loader]");

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
    showLoader();
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
    showLoader(false);
    $resultList.innerHTML = Plants.renderResult(plants);
  }

  function showLoader(condition) {
    if (condition == false) {
      $loaderComponent.classList.remove("loading--show");
      return;
    }

    $loaderComponent.classList.add("loading--show");
    return;
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
