import {combineReducers} from 'redux';

import books from './books';
import genres from './genres';
import years from './years';
import user from './user';

const rootReducer = combineReducers ({
  books,
  genres,
  years,
  user,
});

export default rootReducer;
