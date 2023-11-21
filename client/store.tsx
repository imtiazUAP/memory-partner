import { configureStore, createSlice } from '@reduxjs/toolkit';
const isMobileScreen = typeof window !== 'undefined' && window.innerWidth < 601;
interface ReduxState {
  isSidebarOpen: boolean;
  memories: [];
}

const initialState: ReduxState = {
  isSidebarOpen: !isMobileScreen,
  memories: []
};

const reduxReducer = (state: ReduxState = initialState, action: { type: string, payload?: any }) => {
  console.log('redux dispatched, action: ', action);
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    case 'UPDATE_MEMORIES':
        return { ...state, memories: action?.payload };
    default:
      return state;
  }
};

const store = configureStore({
  reducer: {
    context: reduxReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
