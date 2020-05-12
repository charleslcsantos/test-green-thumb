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
      <img src="${plant.url}" alt="Plant preview" class="card__pic" />
      <div class="card__title">${plant.name}</div>
      <div class="card-note">
        <div class="card__title">$${plant.price}</div>
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

function renderResult(plants) {
  if (Array.isArray(plants) && plants.length > 0) {
    return renderPlantsCards(plants);
  } else {
    return renderNoResultComponent();
  }
}

function renderPlantsCards(plants) {
  let plantsCards = [];
  plants.map((plant) => plantsCards.push(Plants.renderPlantCard(plant)));

  return `
    <div class="container">
      <img class="result-list__pic" src="./assets/img/icon-pick.png" alt="Our picks for you" />
      <h2 class="result-list__title">
        Our picks for you
      </h2>
      <div class="result-list__items">
        ${plantsCards.join("")}
      </div>
      <button class="button" onclick="window.initEventScrollToTop();"><span class="button__icon icon-seta">${getIcon(
        "seta"
      )}</span>back to the top</button>
    </div>
  `;
}

function getIcon(icon) {
  return `<svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.4608 9.3106L18.7474 9.58955L19.0264 9.30287L18.7397 9.02392L18.4608 9.3106ZM9.86986 0.951415L10.1488 0.664732V0.664732L9.86986 0.951415ZM17.9029 9.88397L17.6239 10.1706L17.9106 10.4496L18.1895 10.1629L17.9029 9.88397ZM9.99091 2.18542L10.2699 1.89873L9.59091 1.2381V2.18542H9.99091ZM9.99091 22.5159V22.9159H10.3909V22.5159H9.99091ZM9.19091 22.5159H8.79091V22.9159H9.19091V22.5159ZM9.19091 2.18542H9.59091V1.2381L8.91196 1.89873L9.19091 2.18542ZM1.27895 9.88397L0.992266 10.1629L1.27122 10.4496L1.5579 10.1706L1.27895 9.88397ZM0.721048 9.3106L0.442099 9.02392L0.155416 9.30287L0.434366 9.58955L0.721048 9.3106ZM9.31196 0.951415L9.03301 0.664732V0.664732L9.31196 0.951415ZM9.59091 0.67999L9.86986 0.393307L9.59091 0.121882L9.31196 0.393307L9.59091 0.67999ZM18.7397 9.02392L10.1488 0.664732L9.59091 1.2381L18.1818 9.59728L18.7397 9.02392ZM18.1895 10.1629L18.7474 9.58955L18.1741 9.03165L17.6162 9.60502L18.1895 10.1629ZM9.71196 2.4721L17.6239 10.1706L18.1818 9.59728L10.2699 1.89873L9.71196 2.4721ZM10.3909 22.5159V2.18542H9.59091L9.59091 22.5159H10.3909ZM9.19091 22.9159H9.99091V22.1159H9.19091V22.9159ZM8.79091 2.18542L8.79091 22.5159H9.59091L9.59091 2.18542H8.79091ZM1.5579 10.1706L9.46986 2.4721L8.91196 1.89873L0.999998 9.59728L1.5579 10.1706ZM0.434366 9.58955L0.992266 10.1629L1.56563 9.60502L1.00773 9.03165L0.434366 9.58955ZM9.03301 0.664732L0.442099 9.02392L0.999998 9.59728L9.59091 1.2381L9.03301 0.664732ZM9.31196 0.393307L9.03301 0.664732L9.59091 1.2381L9.86986 0.966673L9.31196 0.393307ZM10.1488 0.664732L9.86986 0.393307L9.31196 0.966673L9.59091 1.2381L10.1488 0.664732Z" fill="#15573F"/>
  </svg>`;
}

function renderNoResultComponent() {
  return `
    <div class="no-results">
      <div class="container">
        <div class="no-results__content">
          <h2 class="no-results__title">No results yet…</h2>
          <p class="no-results__note">
            Use the filters above to find the plant that best fits your
            environment :)
          </p>
        </div>
        <img class="no-results__pic" src="./assets/img/no-results.png" alt="No results illustration" />
      </div>
    </div>
  `;
}

export const Plants = {
  getPlants,
  renderPlantCard,
  renderResult: renderResult,
};
