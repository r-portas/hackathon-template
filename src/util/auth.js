/**
 * Utility functions for authentication
 */

function getCodeFromQueryString(queryString) {
  const params = new URLSearchParams(queryString);
  return params.get("code");
}

/**
 * Returns a dummy user object from the placeholder api
 */
function getUser() {
  const num = Math.floor((Math.random() * 10) + 1);

  return fetch(`https://jsonplaceholder.typicode.com/users/${num}`)
    .then(resp => resp.json(), err => console.log(err))
}

export default {
  getCodeFromQueryString,
  getUser
}
