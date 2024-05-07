import { createSelector } from "@reduxjs/toolkit";
import { selectFilterName } from "../filters/selectors";

export const selectContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectLoading = state => state.contacts.loading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilterName],
  (contacts, filterName) => {
    const filteredContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterName.toLowerCase());
    });

    return filteredContacts;
  }
);
