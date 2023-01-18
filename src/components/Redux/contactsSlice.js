import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = { items: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact(state, { payload }) {
      state.items = [...state.items, payload];
    },
  },
  deleteContact(state, { payload }) {
    state.items = state.items.filter(contact => contact === payload.id);
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
