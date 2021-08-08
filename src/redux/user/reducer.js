
const initialState = {
  loading: false,
  userInfo: {},
  userBkd: {},
  authenticated: false,
  isVerifikator: false, 
}

export default (state = initialState, action)=>{
  switch (action.type) {
    case 'user/SET_STATE':
      return { ...state, ...action.payload }
    default:
      return state
  }
}
