function getPlants() {
  return request(
    `https://6nrr6n9l50.execute-api.us-east-1.amazonaws.com/default/front-plantTest-service?sun=high&water=rarely&pets=false`
  );
}

function request(url) {
  const headers = {
    headers: new Headers(),
  };

  return fetch(url, headers).then((r) => console.log("r", r));
}

export const Plants = {
  getPlants,
};
