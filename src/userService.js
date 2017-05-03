import axios from "axios";
import API_BASE_URL from '../../utils/api-helper';


export function getUser() {
  let userPromise = new Promise((resolve, reject)=>{
    axios.get(API_BASE_URL + "/getCurrentUser", { withCredentials: true }).then(res => {
      if (!res) reject("No User")
      else {resolve(res)}
    })
  })

  return userPromise

}
