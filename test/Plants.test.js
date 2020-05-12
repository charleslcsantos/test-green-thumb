"use strict";

global.fetch = require("node-fetch");
const expect = require("chai").expect;
const Plants = require("../assets/js/Plants.js").Plants;

describe("#Plants", () => {
  it("should return error when not select the form options", (done) => {
    Plants.getPlants().catch((res) => {
      done();
      expect(res).to.be.an("error");
    });
  });

  it("should return error if sunlight parameter is not valid", (done) => {
    Plants.getPlants("option", "rarely", "false").catch((res) => {
      done();
      expect(res).to.be.an("error");
    });
  });

  it("should return error if water parameter is not valid", (done) => {
    Plants.getPlants("high", "option", "false").catch((res) => {
      done();
      expect(res).to.be.an("error");
    });
  });

  it("should return error if pet parameter is not valid", (done) => {
    Plants.getPlants("high", "rarely", "option").catch((res) => {
      done();
      expect(res).to.be.an("error");
    });
  });

  it("should return a array if all options has selected", (done) => {
    Plants.getPlants("high", "rarely", "false").then((r) => {
      done();
      expect(r).to.be.an.instanceof(Array);
    });
  });
});

describe("#Render components", () => {
  const noResultsContent = '<h2 class="no-results__title">No results yet…</h2>';

  it("should display no results component if pass an empty array to renderResult", () => {
    expect(Plants.renderResult([])).to.contain(noResultsContent);
  });

  it("should display no results component if pass null value to renderResult", () => {
    expect(Plants.renderResult(null)).to.contain(noResultsContent);
  });

  it("should display plant card if pass an populated array to renderResult", () => {
    const plants = [
      {
        name: "Ficus lyrata",
        price: 30,
        sun: "high",
        toxicity: false,
        url:
          "https://front-static-recruitment.s3.amazonaws.com/ficus-lyrata.jpg",
        water: "regularly",
      },
    ];
    expect(Plants.renderResult(plants)).to.contain(
      `<div class="card__title">${plants[0].name}</div>`
    );
  });

  it("should display high sun icon", () => {
    const plant = {
      name: "Ficus lyrata",
      sun: "high",
    };
    expect(Plants.renderPlantFeatureIcon(plant.sun, "sun")).to.contain(
      `<img src="./assets/img/icon-high-sun.svg" alt="high sun plant" />`
    );
  });

  it("should display low sun icon", () => {
    const plant = {
      name: "Ficus lyrata",
      sun: "low",
    };
    expect(Plants.renderPlantFeatureIcon(plant.sun, "sun")).to.contain(
      `<img src="./assets/img/icon-low-sun.svg" alt="low sun plant" />`
    );
  });

  it("should display no sun icon", () => {
    const plant = {
      name: "Ficus lyrata",
      sun: "no",
    };
    expect(Plants.renderPlantFeatureIcon(plant.sun, "sun")).to.contain(
      `<img src="./assets/img/icon-no-sun.svg" alt="no sun plant" />`
    );
  });

  it("should display daily water icon", () => {
    const plant = {
      name: "Ficus lyrata",
      water: "daily",
    };
    expect(Plants.renderPlantFeatureIcon(plant.water, "water")).to.contain(
      `<img src="./assets/img/icon-daily-water.svg" alt="daily water plant" />`
    );
  });

  it("should display regularly water icon", () => {
    const plant = {
      name: "Ficus lyrata",
      water: "regularly",
    };
    expect(Plants.renderPlantFeatureIcon(plant.water, "water")).to.contain(
      `<img src="./assets/img/icon-regularly-water.svg" alt="regularly water plant" />`
    );
  });

  it("should display rarely water icon", () => {
    const plant = {
      name: "Ficus lyrata",
      water: "rarely",
    };
    expect(Plants.renderPlantFeatureIcon(plant.water, "water")).to.contain(
      `<img src="./assets/img/icon-rarely-water.svg" alt="rarely water plant" />`
    );
  });

  it("should display no toxicity icon", () => {
    const plant = {
      name: "Ficus lyrata",
      toxicity: false,
    };
    expect(
      Plants.renderPlantFeatureIcon(plant.toxicity, "toxicity")
    ).to.contain(
      `<img src="./assets/img/icon-no-toxicity.svg" alt="no toxicity plant" />`
    );
  });

  it("should display toxicity icon", () => {
    const plant = {
      name: "Ficus lyrata",
      toxicity: true,
    };
    expect(
      Plants.renderPlantFeatureIcon(plant.toxicity, "toxicity")
    ).to.contain(
      `<img src="./assets/img/icon-toxicity.svg" alt="toxicity plant" />`
    );
  });
});
