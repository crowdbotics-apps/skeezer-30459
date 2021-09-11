import axios from "axios"
import {} from "react-native-dotenv"
const brionah = axios.create({
  baseURL: "https://skeezersnap.com",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function brionah_post_https__skeezersnapcom_create(payload) {
  return brionah.post(`/https://skeezersnap.com/`, payload.data)
}
export const apiService = { brionah_post_https__skeezersnapcom_create }
