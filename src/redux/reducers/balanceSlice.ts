import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState, AppThunk} from '../app/store';

export interface BalanceState {
  remainingBalance: number;
  targetBalance: number;
}

const initialState: BalanceState = {
  remainingBalance: 0,
  targetBalance: 0,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.remainingBalance += action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.remainingBalance -= action.payload;
    },
    increaseTarget: (state, action: PayloadAction<number>) => {
      state.targetBalance += action.payload;
    },
    decreaseTarget: (state, action: PayloadAction<number>) => {
      state.targetBalance -= action.payload;
    },
  },
  extraReducers: builder => {},
});

export const {
  incrementByAmount,
  decrementByAmount,
  increaseTarget,
  decreaseTarget,
} = balanceSlice.actions;

export default balanceSlice.reducer;
