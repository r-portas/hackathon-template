export const setAuthCode = code => {
  return {
    type: "SET_AUTH_CODE",
    code
  }
};

export const setUser = user => {
  return {
    type: "SET_USER",
    user
  }
};

export function fetchUser() {
  return function(dispatch) {
    const num = Math.floor((Math.random() * 10) + 1);
    return fetch(`https://jsonplaceholder.typicode.com/users/${num}`)
      .then(resp => resp.json(), err => console.log(err))
      .then(json => dispatch(setUser(json)));
  }
}
