import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  userDetails: UserDetails;
  jwt: string | undefined;
}

export interface UserDetails {
  email: string | undefined;
  displayName: string | undefined;
  accessToken: string | undefined; // todo: stop storing access token client-side
}

export interface AuthenticatedUserPayload {
  userDetails: UserDetails;
  jwt: string;
}

const initialState: UserState = {
  userDetails: {
    email: undefined,
    displayName: undefined,
    accessToken: undefined,
  },
  jwt: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    /* eslint-disable no-param-reassign */
    setUserData: (state, action: PayloadAction<AuthenticatedUserPayload>) => {
      const { userDetails, jwt } = action.payload;
      state.userDetails = userDetails;
      state.jwt = jwt;
    },
    clearUserData: (state) => {
      state.userDetails = initialState.userDetails;
      state.jwt = initialState.jwt;
    },
    /* eslint-disable no-param-reassign */
  },
});

export const { setUserData, clearUserData } = userSlice.actions;

export default userSlice.reducer;
