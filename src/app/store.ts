import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import crewReducer from "../features/crew/crewSlice";
import destinationReducer from "../features/destination/destinationSlice";
import technologiesReducer from "../features/technologies/technologiesSlice";

export const store = configureStore({
  reducer: {
    crew: crewReducer,
    destinations: destinationReducer,
    technologies: technologiesReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
