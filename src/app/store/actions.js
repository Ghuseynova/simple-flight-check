import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  FETCH_FLIGTS_REQUEST,
  ADD_TO_FAV,
  REMOVE_FROM_FAV,
} from './types';

export const login = (user) => ({
  type: LOGIN_REQUEST,
  user,
});

export const logout = () => ({
  type: LOGOUT_REQUEST,
});

export const getFlights = (date) => ({
  type: FETCH_FLIGTS_REQUEST,
  date,
});

export const addToFav = (id) => ({
  type: ADD_TO_FAV,
  id,
});

export const removeFromFav = (id) => ({
  type: REMOVE_FROM_FAV,
  id,
});
