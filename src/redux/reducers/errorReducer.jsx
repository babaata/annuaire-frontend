import { ERROR } from '../actions/authAction'

const initState = {

}

const errorReducer = (state = initState, action) => {
    switch (action.type) {
      case ERROR: return action.payload
    
      default: return state
       
    }
}

export default errorReducer