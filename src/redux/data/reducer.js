
const initialState = {
  loading: false,
  dataQuestionOne:[],
  dataQuestionTwo:[],
}

export default (state = initialState, action)=>{
  switch (action.type) {
    case 'data/SET_STATE':
      return { ...state, ...action.payload }
    default:
      return state
  }
}
