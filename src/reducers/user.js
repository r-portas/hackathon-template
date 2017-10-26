const defaultState = {
  user: {},
  code: ""
};

const user = (state = defaultState, action) => {
  switch(action.type) {
    case "SET_AUTH_CODE":
      return Object.assign({}, state, { code: action.code });

    case "SET_USER":
      return Object.assign({}, state, { user: action.user });

    default:
      return state;
  }
};

export default user;
