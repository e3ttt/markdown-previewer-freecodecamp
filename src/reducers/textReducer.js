import { ADD_TEXT } from '../actions/actions';
import { initialText } from '../components/initialText';

export const textReducer = (state = initialText, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return action.text;
    default:
      return state;
  }
};
