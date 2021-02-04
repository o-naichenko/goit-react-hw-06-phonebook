export const getFilter = state => state.filter;

export const getFilteredContacts = state => {
  const filter = getFilter(state);
  if (filter.length === 0) {
    return state.contacts;
  } else {
    return state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }
};
