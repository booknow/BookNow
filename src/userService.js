import axios from "axios";

const base_url = "/getCurrentUser";

export function getUser() {
    const userPromise = axios.get("/getCurrentUser")
        .then(response => {
            console.log(response);
            return response;
          })
    return userPromise;
}
