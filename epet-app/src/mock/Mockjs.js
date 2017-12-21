import Mock from 'mockjs'
import classifyData from './classify.json'
import homeData from './homedata.json'
import brandsData from './brands.json'


Mock.mock('/api/classify',{code:0,data:classifyData.classifyName});
Mock.mock('/api/homedata',{code:0,data:homeData});
Mock.mock('/api/brandsdata',{code:0,data:brandsData.brands});
