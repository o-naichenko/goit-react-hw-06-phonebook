export const getFilter = state => state.filter;
export const getContacts = state => state.contacts;

export const getFilteredContacts = state => {
  const filter = getFilter(state);
  const contacts = getContacts(state);
  if (filter.length === 0) {
    return contacts;
  } else {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }
};
