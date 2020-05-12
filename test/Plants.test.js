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
  it("should display no results component if pass an empty array to renderResultList", () => {
    expect(Plants.renderResultList([])).to.contain("No results yet…");
  });

  it("should display no results component if pass null value to renderResultList", () => {
    expect(Plants.renderResultList(null)).to.contain("No results yet…");
  });

  it("should display plant card if pass an populated array to renderResultList", () => {
    const plants = [
      {
        name: "A plant",
      },
    ];
    expect(Plants.renderResultList(plants)).to.contain("Our picks for you");
  });
});
