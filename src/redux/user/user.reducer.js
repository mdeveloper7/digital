import UserActionTypes from './user.types';

const INITIAL_STATE = {
  authUser: null,

};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_AUTH_USER:
      return {
        ...state,
        authUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
