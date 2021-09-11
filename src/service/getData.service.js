import axios from 'axios'

export async function getDataQuestionOne() {
    return axios
    .get(`${process.env.REACT_APP_MODUIT_SERVICE}/frontend/web/question/one`)
    .then(response => {
      // console.log(response.data)
      if (response.data.length!==0) {
        return response.data
      }else{
        return false
      }
    })
    .catch(err => {
      console.log({ err })
      return false
    })
}

export async function getDataQuestionTwo() {
  return axios
  .get(`${process.env.REACT_APP_MODUIT_SERVICE}/frontend/web/question/two`)
  .then(response => {
    // console.log(response.data)
    if (response.data.length!==0) {
      return response.data
    }else{
      return false
    }
  })
  .catch(err => {
    console.log({ err })
    return false
  })
}


