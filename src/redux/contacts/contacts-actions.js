import { createAction } from '@reduxjs/toolkit';
// import types from "./contacts-types";

// ADD: "contacts/add",
// CHANGE_FILTER: "contacts/filter",
// DELETE: "contacts/delete",

const contactsActions = {
  addContact: createAction('contacts/add'),
  deleteContact: createAction('contacts/delete'),
  changeFilter: createAction('contacts/filter'),
};

// const addContact = (contact) => ({
//   type: types.ADD,
//   payload: contact,
// });

// const deleteContact = (contact) => ({
//   type: types.DELETE,
//   payload: contact,
// });

// const changeFilter = (value) => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export default contactsActions;
