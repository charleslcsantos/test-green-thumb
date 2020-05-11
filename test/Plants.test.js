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
  it("should display no results component when pass an empty array", () => {
    expect(Plants.renderResultList([])).to.contain("no-results");
  });

  it("should display no results component when getPlants return error", (done) => {
    Plants.getPlants("invalid", "rarely", "false").catch(() => {
      done();
      expect(Plants.renderResultList(null)).to.contain("no-results");
    });
  });
});
