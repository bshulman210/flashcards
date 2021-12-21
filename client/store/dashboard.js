import axios from 'axios';
import { authenticateRequest } from './gateKeepingMiddleware';

const SET_DECKS = 'SET_DECKS';

const setDecks = (decks) => {
  return {
    type: SET_DECKS,
    decks,
  };
};

export const fetchDecks = () => async (dispatch) => {
  try {
    const decks = await authenticateRequest('get', '/api/');
    dispatch(setDecks(decks));
  } catch (e) {
    console.log(e);
  }
};

export default function (state = {}, action) {
  switch (action.type) {
    case SET_DECKS:
      return action.decks;
    default:
      return state;
  }
}
