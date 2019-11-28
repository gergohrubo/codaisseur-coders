const initialState = {
  accessToken: null,
  profile: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "auth/SAVE_ACCESS_TOKEN": {
      // => Ask yourself: what is action.payload?
      console.log(action.payload)
      return action.payload;
    }
    default: {
      return state;
    }
  }
}