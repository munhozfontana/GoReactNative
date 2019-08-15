/**
Action Types
*/
export const Types = {
  REPOSITORIES_FAILURE: 'REPOSITORIES_FAILURE',
  REPOSITORIES_SUCCESS: 'REPOSITORIES_SUCCESS',
  REPOSITORIES_REQUEST: 'REPOSITORIES_REQUEST',
};


/**
Initial State
*/
const INITIAL_STATE = {
  data: [],
  loading: false,
};


/**
Creators
*/
export default function reducer(state = INITIAL_STATE, action) {
  const { payload } = action;

  switch (action.type) {
    case Types.REPOSITORIES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.REPOSITORIES_SUCCESS:
      return {
        ...state,
        data: payload.data,
        loading: false,
        error: false,
      };
    case Types.REPOSITORIES_FAILURE:
      return { ...state, loading: false };
    default:
      return state;
  }
}

/**
* Actions
*/
export const Creators = {
  repositoriesRequest: () => ({
    type: Types.REPOSITORIES_REQUEST,
  }),
  repositoriesSuccess: (data) => ({
    type: Types.REPOSITORIES_SUCCESS,
    payload: { data },
  }),
  repositoriesFailure: () => ({
    type: Types.REPOSITORIES_FAILURE,
  }),
};
