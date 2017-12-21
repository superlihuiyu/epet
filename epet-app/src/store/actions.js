import {reqClassify,reqHome,reqBrands} from '../api/index'
import {RECEIVER_CLASSIFY,RECERVER_OK,RECEIVER_HOME,RECEIVER_BRANDS} from './types'

export default {
  getClassify ({commit},cb) {
    reqClassify().then((response)=>{
      const result=response.data;
      if (result.code==RECERVER_OK){
        const classify=result.data;
        commit(RECEIVER_CLASSIFY,{classify})
        cb&&cb()
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
  },
  getBrands({commit}){
    reqBrands().then((response) => {
      const result = response.data;
      if (result.code == RECERVER_OK) {
        const brands = result.data;
        commit(RECEIVER_BRANDS, {brands})
        console.log(brands)
      }
    }).catch((err)=>{
      console.log(err)
    })
  }
}

