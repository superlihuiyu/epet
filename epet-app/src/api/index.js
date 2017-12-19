import axios from 'axios'
const Classify='/api/classify';
const Home='/api/homedata';
export function reqClassify() {
  return axios.get(Classify)
}
export function reqHome() {
  return axios.get(Home)
}


