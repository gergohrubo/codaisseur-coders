import api from '../api'
// A thunk creator
export function login(email, password) {
  // Return the thunk itself, i.e. a function
  return function thunk(dispatch, getState) {
    api("/login", {
      method: "POST",
      body: {
        email,
        password
      }
    })
      .then(data => data.jwt)
      .then(accessKey => {
        api("/me", { jwt: accessKey })
          .then(data => {
            console.log("data at the second call", data)
            dispatch(saveAccessToken(accessKey, data))
          })
      })
      .catch(err => console.log("err", err));
  }
}

// An action creator
export function saveAccessToken(accessToken, profile) {
  return {
    type: "auth/SAVE_ACCESS_TOKEN",
    payload: {
      accessToken,
      profile
    }
  };
}