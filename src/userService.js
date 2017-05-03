import axios from "axios";
;


export function getUser() {
  let userPromise = new Promise((resolve, reject)=>{
    axios.get("/getCurrentUser").then(res => {
      if (!res) reject("No User")
      else {resolve(res)}
    })
  })

  return userPromise

}
