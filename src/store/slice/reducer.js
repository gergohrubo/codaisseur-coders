const initialState = { post: null, comments: [] }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GETTING_POST": {
      return {
        ...state,
        post: { ...action.payload }
      }
    }
    case "GETTING_COMMENTS": {
      console.log('from the reducer', action.payload)
      return {
        ...state,
        comments: [...state.comments, ...action.payload]
      }
    }
    default:
      return state
  }
}
