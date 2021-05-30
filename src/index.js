import './scss/main.scss';
const debounce = require('lodash.debounce');
import makeList from './templates/countriesList.hbs';
import makeCountry from './templates/countryMake.hbs';
import fetchCountries from './js/fetchCountries';
import 'bootstrap/dist/css/bootstrap.min.css';
import { error } from './js/pnotify.js';

const refs = {
  query: document.querySelector('#set-query'),
  list: document.querySelector('.countries'),
};

const getQuery = function (e) {
  e.preventDefault();

  fetchCountries(e.target.value)
    .then(data => {
      if (data.length > 10) {
        error({
          delay: 1000,
          title: 'Error',
          text: 'Please, specify your request!',
        });
      }
      if (data.length > 1 && data.length < 10) {
        refs.list.innerHTML = '';
        data.forEach(country => {
          refs.list.insertAdjacentHTML('afterbegin', makeList(country));
        });
      } else if (data.length === 1) {
        refs.list.innerHTML = '';
        refs.list.insertAdjacentHTML('afterbegin', makeCountry(data[0]));
      }
    })
    .catch(() => {
      error({
        delay: 1000,
        title: 'Error',
        text: 'Sorry, country not found!',
      });
    });
};

refs.query.addEventListener('input', debounce(getQuery, 500));
