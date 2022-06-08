import { Action, combineReducers } from 'redux';

import AppState from './appstate.slicer';

// const initialState = {
//   ownerData: initialOwnerDataState,
//   businessData: initialBusinessData,
//   accountData: initialAccountData,
// }

export const appReducer = combineReducers({
  AppState,
});

export type RootReducer = ReturnType<typeof appReducer>;

const rootReducer = (state: RootReducer, action: Action) => {
  return appReducer(state, action);
};

export default rootReducer;
