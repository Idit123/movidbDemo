import axios from "axios"

export const getApiCall = async (category, pageNo) => {
  try {
    const title = category.title
    let Response
    await axios
      .get(category.url + pageNo)
      .then((response) => {
        Response = response
      })
      .catch((error) => {
        console.log(error)
      })
    return { title, Response }
  } catch (e) {
    console.log(e)
  }
}
