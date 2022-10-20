import { createSlice } from '@reduxjs/toolkit';

import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from '../utils/localStorage';
import * as authService from '../api/authApi';
import * as userService from '../api/userApi';

const AuthSlice = createSlice({
  name: 'auth',
  initialState: { user: null, initialLoading: true, login: false },
  reducers: {
    setLoginUser: (state, action) => {
      state.user = action.payload;
    },
    setInitialLoading: (state, action) => {
      state.initialLoading = action.payload;
    },
    setLogin: (state, action) => {
      const toggle = (input) => !input;
      state.login = toggle(state.login);
    },
  },
});

export default AuthSlice.reducer;
export const { setLoginUser, setInitialLoading, setLogin } = AuthSlice.actions;

export const fetchUser = () => {
  return async (dispatch) => {
    try {
      const fetchLoginUser = async () => {
        try {
          if (getAccessToken()) {
            getLoginUser(dispatch);
          }
        } catch (err) {
          console.log(err);
        } finally {
          dispatch(setInitialLoading(false));
        }
      };

      if (getAccessToken()) {
        fetchLoginUser();
      }
    } catch (err) {
      console.log(err);
    }
  };
};

const getLoginUser = async (dispatch) => {
  const res = await authService.getMe();
  console.log(res);
  dispatch(setLoginUser(res.data.user));
};

export const register = (input) => {
  return async (dispatch) => {
    try {
      const res = await authService.register(input);

      // const res2 = await authService.getMe();
      // console.log(res2);
      // dispatch(setLoginUser(res2.data.user));

      addAccessToken(res.data.token);
      setTimeout(() => getLoginUser(dispatch), 10);
    } catch (err) {
      console.log(err);
    }
  };
};

export const login = (input) => {
  return async (dispatch) => {
    try {
      const res = await authService.login(input);
      addAccessToken(res.data.token);
      await getLoginUser(dispatch);
    } catch (err) {
      console.log(err);
    }
  };
};
export const logout = () => {
  return async (dispatch) => {
    try {
      console.log('logout');
      removeAccessToken();
      dispatch(setLoginUser(null));
    } catch (err) {
      console.log(err);
    }
  };
};
export const updateUser = (input) => {
  return async (dispatch) => {
    try {
      const res = await userService.updateUser(input);
      console.log('update');
      dispatch(setLoginUser(res.data.user));
    } catch (err) {
      console.log(err);
    }
  };
};
