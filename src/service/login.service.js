import axios from 'axios'

export async function login(email, password) {
    return axios
    .post(`https://api.siremun.untan.ac.id/api/logindosen`, {
      username: email,
      password,
    })
    .then(response => {
      // console.log(response.data)
      if (response.data.status=='success') {
        // const { accessToken } = response.data
        // if (accessToken) {
        //   store.set('accessToken', accessToken)
        // }
        return response.data
      }else{
        // SweetAlert.fire({title:"", text:response.data.message, icon:"error"});
        return false
      }
    })
    .catch(err => console.log({ err }))
}


