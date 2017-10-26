/**
 * Utility functions for authentication
 */

function getCodeFromQueryString(queryString) {
  const params = new URLSearchParams(queryString);
  return params.get("code");
}

export default {
  getCodeFromQueryString
}
