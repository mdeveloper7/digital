import UserActionTypes from './user.types';

export const setAuthUser = user => ({
  type: UserActionTypes.SET_AUTH_USER,
  payload: user
});