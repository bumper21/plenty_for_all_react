const axios = require('axios');
const BASE_URL = `http://localhost:3030/api/v1/`;

export const User = {
  current(params) {
    axios.get(`${BASE_URL}users/current`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export const Session = {
  login(params) {
    axios.post(`${BASE_URL}users/login`, {
      user: {
      email: params.user.email,
      password: params.user.password
      }
    })
    .then((response) => {
      return response
    }).catch((error) => {
      console.log(error)
    });
  }
}