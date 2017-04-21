import axios from "axios";

// import axiosLibrary from "axios";
// const axios = axiosLibrary.create({ withCredentials: true });

const base_url = "/getCurrentUser";

export function getUser() {
  let userPromise = new Promise((resolve, reject)=>{
    axios.get("http://localhost:3000/getCurrentUser", { withCredentials: true }).then(res => {
      if (!res) reject("No User")
      else {resolve(res)}
    })
  })

  return userPromise

}
