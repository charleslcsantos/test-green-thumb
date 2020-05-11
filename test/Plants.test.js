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

  it("should return 200 status if all options has selected", (done) => {
    Plants.getPlants("high", "rarely", "false").then((r) => {
      done();
      expect(r.status).to.be.equal(200);
    });
  });
});
