// Retreives Pokemon from api
export async function getPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      resolve(data);
    })
  })
}

// After retreieving Pokemon from the api, this function grabs each URL then helps map out each one in the array to it's own object in App.js
export async function setPokemon(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      resolve(data);
    })
  })
}