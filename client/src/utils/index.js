export function login(token) {
    localStorage.setItem("JWT", token);
}
export function logOut() {
    localStorage.clear();
}
export function isLoggedIn() {
    if (localStorage.getItem("JWT")) {
        return true;
    }
    return false;
}
