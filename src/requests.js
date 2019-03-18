const BASE_URL = `http://localhost:3030/api/`;



export const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      credentials: "include"
    }).then(res => res.json())
  }
}