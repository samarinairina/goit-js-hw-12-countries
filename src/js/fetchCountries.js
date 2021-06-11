import { error } from '../js/pnotify.js';

const fetchCountries = function (searchQuery) {
 
  return fetch(
    'https://restcountries.eu/rest/v2/name/' + searchQuery,
  ).then(res => res.json())
    .catch(() => {
    error({
      delay: 1000,
      title: 'Error',
      text: 'Sorry, country not found!',
    })
      })
};
export default fetchCountries;
