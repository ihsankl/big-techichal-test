import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
  WebStorage,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import Slicer from './slicer/index';

interface IStore {
  key: string;
  storage: WebStorage;
}

const persistConfig: IStore = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer<any, any>(persistConfig, Slicer);

const logger = createLogger({});

const store = () => {
  const Store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware(
        {
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }
        // if production remove logger
      ).concat(logger),
  });

  const Persistor = persistStore(Store);
  return { Store, Persistor };
};

export default store;
