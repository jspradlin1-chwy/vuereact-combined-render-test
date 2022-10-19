import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';


export const store = configureStore({
  reducer: combineReducers({
    var1: (state: number = 0, action) => {
      switch (action.type) {
        case 'INCREMENT_VAR_1':
          return state + 1;
        default:
          return state;
      }
    },
    var2: (state: number = 0, action) => {
      switch (action.type) {
        case 'INCREMENT_VAR_2':
          return state + 1;
        default:
          return state;
      }
    },
    var3: (state: number = 0, action) => {
      switch (action.type) {
        case 'INCREMENT_VAR_3':
          return state + 1;
        default:
          return state;
      }
    },
    reactOnlyLog: (state: string[] = [], action) => {
      switch (action.type) {
        case 'APPEND_LOG':
          return [
            ...state,
            action.payload
          ];
        default:
          return state;
      }
    }
  })
})
