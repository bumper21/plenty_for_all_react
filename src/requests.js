const BASE_URL = `http://localhost:3030/api/v1/`;


export const Session = {
  create(params) {
    return fetch(`${BASE_URL}sign_in`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },

  destroy() {
    return fetch(`${BASE_URL}sign_out`, {
      method: "DELETE",
      credentials: "include"
    }).then(res => res.json())
  }
};

export const User = {
  current() {
    return fetch(`${BASE_URL}current_user`, {
      credentials: "include"
    }).then(res => res.json())
  }
}