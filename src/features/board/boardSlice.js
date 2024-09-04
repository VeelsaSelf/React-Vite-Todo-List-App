import { createSlice } from '@reduxjs/toolkit';

/**
 *  1 - initial state
 *  3 - create slice
 *  4 - export reducer and actions
 *  5 - add the reducer to store
*/

const initialState = [
    {
        id: 0,
    },
];

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        addNote: (state , action) => {
            state.unshift(action.payload.note);
        },
        deleteNote: (state , action) => {
            state.splice(state.findIndex((arrow) => arrow.id === action.payload), 1);
        }
    }
});

export default boardSlice.reducer;
export const {addNote , deleteNote} = boardSlice.actions;