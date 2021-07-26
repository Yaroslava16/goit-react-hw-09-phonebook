import { createSelector } from 'reselect';

export const getAdd = state => state.phonebook.contacts;

export const getFilter = state => state.phonebook.filter;

export const getVisibleContacts = createSelector(
  [getAdd, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
  },
);

// export const getVisibleContacts = state => {
//   const contacts = getAdd(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return contacts.filter(({ name }) => {
//     return name.toLowerCase().includes(normalizedFilter);
//   });
// };
