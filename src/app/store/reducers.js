import { combineReducers } from 'redux';
import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  FETCH_FLIGTS_SUCCESS,
  FETCH_FLIGTS_ERROR,
  ADD_TO_FAV,
  REMOVE_FROM_FAV,
} from './types';

const initialState = {
  user: {
    email: '',
    password: '',
    isLogged: false,
  },
  flightList: [],
  favs: [],
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const { isLogged } = state;
      return {
        ...state,
        user: {
          ...action.user,
          isLogged: !isLogged,
        },
      };
    case LOGIN_ERROR:
      return state;
    case LOGOUT_SUCCESS:
      return initialState;
    case LOGOUT_ERROR:
      return initialState;
    case FETCH_FLIGTS_SUCCESS:
      return {
        ...state,
        flightList: action.flights,
      };
    case FETCH_FLIGTS_ERROR:
      return initialState;
    case ADD_TO_FAV:
      return {
        ...state,
        favs: [...state.favs, action.id],
      };
    case REMOVE_FROM_FAV:
      return {
        ...state,
        favs: state.favs.filter((fav) => fav !== action.id),
      };
    default:
      return state;
  }
};

export default appReducer;
