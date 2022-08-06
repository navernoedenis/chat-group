import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import TokenService, { httpCheckAccessToken } from "services/token";
import AuthService from "services/auth";

export interface UserState {
  isTokenChecked: boolean;
  user: User | null;
}

const initialState: UserState = {
  isTokenChecked: false,
  user: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setTokenChecked: (state, action: PayloadAction<boolean>) => {
      state.isTokenChecked = action.payload;
    }
  }
});

export const userActions = userSlice.actions;

export const checkToken = () => async (dispatch: Dispatch) => {
  try {
    const { data } = await httpCheckAccessToken();
    dispatch(userActions.setUser(data.user));
  } catch (error) {
    TokenService.removeToken();
  } finally {
    dispatch(userActions.setTokenChecked(true));
  }
};

export const logOut = () => async (dispatch: Dispatch) => {
  try {
    await AuthService.httpLogout();
    dispatch(userActions.setUser(null));
    TokenService.removeToken();
  } catch (error) {
    console.log("LOGOUT ERROR: ", error);
  }
};

export default userSlice.reducer;
