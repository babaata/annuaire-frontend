import { NOTIFY } from '../actions/authAction'

const initState = {

}

const notifyReducer = (state = initState, action) => {
    switch (action.type) {
      case NOTIFY: return action.payload
    
      default: return state
       
    }
}

export default notifyReducer