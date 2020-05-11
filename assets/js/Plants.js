const SUNLIGHT_OPTIONS = ["high", "low", "no"];
const WATER_OPTIONS = ["daily", "regularly", "rarely"];
const PET_OPTIONS = ["true", "false"];
const API_URL = `https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service?sun=high&water=rarely&pets=false`;

function getPlants(sunlight, water, pet) {
  return new Promise((resolve, reject) => {
    if (!sunlight || !water || !pet) {
      reject(new Error("You must select sunlight, water and pet options"));
      return;
    }

    if (!SUNLIGHT_OPTIONS.includes(sunlight)) {
      reject(new Error("The sunlight parameter is not valid"));
      return;
    }

    if (!WATER_OPTIONS.includes(water)) {
      reject(new Error("The water parameter is not valid"));
      return;
    }

    if (!PET_OPTIONS.includes(pet)) {
      reject(new Error("The pet parameter is not valid"));
      return;
    }

    fetch(API_URL)
      .then((res) => resolve(res.json()))
      .catch((err) => reject(err));
  });
}

export const Plants = {
  getPlants,
};
