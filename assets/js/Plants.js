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

function renderPlantCard(plant) {
  return `
    <div class="card">
      <img src="${plant.url}" alt="" class="card__pic" />
      <div class="card__title">${plant.name}</div>
      <div class="card-note">
        <div class="card__title">${plant.price}</div>
        <div class="card__icons">
          ${renderPlantFeatureIcons(plant)}
          
        </div>
      </div>
    </div>
  `;
}

function renderPlantFeatureIcons(plant) {
  // <div class="icon-high-sun"></div>
  //             <div class="icon-one-drop"></div>
  return `
    <div class="icon-pet"></div>
  `;
}

function renderResultList(plants) {
  if (Array.isArray(plants) && plants.length > 0) {
    let plantsCards = [];
    plants.map((plant) => plantsCards.push(Plants.renderPlantCard(plant)));
    return `
      <div class="container">
        <img src="" alt="" />
        <h2>
          Our picks for you
        </h2>
        <div class="result-list">
          ${plantsCards.join("")}
        </div>
      </div>
    `;
  } else {
    return `
      <div class="no-results">
        <div class="container">
          <p class="no-results__title">No results yet…</p>
          <p class="no-results__note">
            Use the filters above to find the plant that best fits your
            environment :)
          </p>
        </div>
        <img class="no-results__pic" src="./assets/img/no-results.png" alt="No results illustration" />
      </div>
    `;
  }
}

export const Plants = {
  getPlants,
  renderPlantCard,
  renderResultList,
};
