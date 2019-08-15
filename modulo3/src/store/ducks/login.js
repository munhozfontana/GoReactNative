/**
Action Types
*/
export const Types = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
};

/**
Initial State
*/
const INITIAL_STATE = {
  username: null,
  error: false,
  loading: false,
};


/**
Creators
*/
export default function login(state = INITIAL_STATE, action) {
  const { payload } = action;

  switch (action.type) {
    case Types.LOGIN_REQUEST:
      return {
        ...state,
        error: false,
        loading: true,
      };
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        username: payload.username,
        loading: false,
      };
    case Types.LOGIN_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
      };
    default:
      return state;
  }
}

/**
* Actions
*/
export const Creators = {
  loginRequest: (username) => ({
    type: Types.LOGIN_REQUEST,
    payload: { username },
  }),
  loginSuccess: (username) => ({
    type: Types.LOGIN_SUCCESS,
    payload: { username },
  }),
  loginFailure: () => ({
    type: Types.LOGIN_FAILURE,
  }),
};
