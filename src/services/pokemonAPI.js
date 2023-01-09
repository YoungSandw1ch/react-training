const URL = 'https://pokeapi.co/api/v2';

const fetchPokemon = name => {
  return fetch(`${URL}/pokemon/${name}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Покеион с именем "${name}" не найден`));
  });
};

const Api = {
  fetchPokemon,
};
export default Api;
