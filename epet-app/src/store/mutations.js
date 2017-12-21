import {RECEIVER_CLASSIFY,RECEIVER_HOME,RECEIVER_BRANDS} from './types'
export default {
  [RECEIVER_CLASSIFY] (state,{classify}){
    state.classify = classify
  },
  [RECEIVER_HOME] (state,{home}){
    state.home = home
  },
  [RECEIVER_BRANDS] (state,{brands}){
    state.brands=brands

  }
}
