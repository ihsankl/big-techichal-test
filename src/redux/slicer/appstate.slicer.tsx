import { createSlice } from '@reduxjs/toolkit';

export interface OwnerData {
  ownerFullname: string;
  ownerEmail: string;
  ownerPhone: string;
  ownerIdentityCard: string;
}

export interface BusinessData {
  businessName: string;
  businessPhoneNumber: string;
  businessCountry: string;
  businessState: string;
  businessCity: string;
  businessCompleteAddress: string;
  businessPINLocation: string;
  businessProfilePicture: string;
}

export interface AccountData {
  accountEmail: string;
  accountPhone: string;
}

export interface InitialData {
  ownerData: OwnerData;
  businessData: BusinessData;
  accountData: AccountData;
}

const initialOwnerDataState: OwnerData = {
  ownerFullname: '',
  ownerEmail: '',
  ownerPhone: '',
  ownerIdentityCard: '',
};

const initialBusinessData: BusinessData = {
  businessName: '',
  businessPhoneNumber: '',
  businessCountry: '',
  businessState: '',
  businessCity: '',
  businessCompleteAddress: '',
  businessPINLocation: '',
  businessProfilePicture: '',
};

const initialAccountData: AccountData = {
  accountEmail: '',
  accountPhone: '',
};

const initialState = {
  ownerData: initialOwnerDataState,
  businessData: initialBusinessData,
  accountData: initialAccountData,
};

const appStateSlice = createSlice({
  name: 'appState',
  initialState: initialState,
  reducers: {
    setOwnerData: (state, action) => {
      state.ownerData = action.payload;
    },
    setBusinessData: (state, action) => {
      state.businessData = action.payload;
    },
    setAccountData: (state, action) => {
      state.accountData = action.payload;
    },
  },
});

export const { setOwnerData, setBusinessData, setAccountData } =
  appStateSlice.actions;

export default appStateSlice.reducer;
