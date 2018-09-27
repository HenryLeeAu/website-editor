export function logout() {
  delete localStorage.token;
}

export function isLoggedIn() {
  return !!localStorage.token;
}
