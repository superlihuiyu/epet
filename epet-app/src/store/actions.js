import {reqClassify,reqHome} from '../api/index'
import {RECEIVER_CLASSIFY,RECERVER_OK,RECEIVER_HOME} from './types'

export default {
  getClassify ({commit}) {
    reqClassify().then((response)=>{
      const result=response.data;
      if (result.code==RECERVER_OK){
        const classify=result.data;
        commit(RECEIVER_CLASSIFY,{classify})
      }
    })
  },
  getHome({commit}){
    reqHome().then((response)=>{
      const result=response.data;
      if (result.code==RECERVER_OK){
        const home=result.data;
        commit(RECEIVER_HOME,{home})
      }
    })

  }

}

