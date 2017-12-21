import axios from 'axios'
const Classify='/api/classify';
const Home='/api/homedata';
const Brands='/api/brandsdata'
export function reqClassify() {
  return axios.get(Classify)
}
export function reqHome() {
  return axios.get(Home)
}
export function reqBrands() {
  return axios.get(Brands)
}


