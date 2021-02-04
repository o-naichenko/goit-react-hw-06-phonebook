import { createReducer } from '@reduxjs/toolkit';
import contactsActions from './contacts-actions';

export const contactsReducer = createReducer([], {
  [contactsActions.addContact]: (state, { payload }) => [...state, payload],
  [contactsActions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const filterReducer = createReducer('', {
  [contactsActions.changeFilter]: (state, { payload }) => payload,
});

// const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

// const filter = (state = "", { type, payload }) => {
//   switch (type) {
//     case types.CHANGE_FILTER:
//       console.log(payload);
//       return payload;
//     default:
//       return state;
//   }
// };
