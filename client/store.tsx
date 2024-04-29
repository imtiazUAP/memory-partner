import { configureStore, createSlice } from '@reduxjs/toolkit';
const isMobileScreen = typeof window !== 'undefined' && window.innerWidth < 601;
interface ReduxState {
  isSidebarOpen: boolean;
  memories: [];
  access_token: string;
}

const initialState: ReduxState = {
  isSidebarOpen: !isMobileScreen,
  memories: [],
  access_token: '',
};

const reduxReducer = (state: ReduxState = initialState, action: { type: string, payload?: any }) => {
  console.log('redux dispatched, action: ', action?.payload);
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return { ...state, isSidebarOpen: !state.isSidebarOpen };
    case 'UPDATE_MEMORIES':
        return { ...state, memories: action?.payload };
    case 'UPDATE_ACCESS_TOKEN':
      console.log('--- updating context action?.payload: ', action?.payload);
        return { ...state, access_token: action?.payload };
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
