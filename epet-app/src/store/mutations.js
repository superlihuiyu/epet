import {RECEIVER_CLASSIFY,RECEIVER_HOME} from './types'
export default {
  [RECEIVER_CLASSIFY] (state,{classify}){
    state.classify = classify
  },
  [RECEIVER_HOME] (state,{home}){
    state.home = home
  }
}
