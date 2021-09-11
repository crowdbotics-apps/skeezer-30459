import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const brionah_post_https__skeezersnapcom_create = createAsyncThunk(
  "brionah_response_post_Eastsidehoodbabyskeezers/brionah_post_https__skeezersnapcom_create",
  async payload => {
    const response = await apiService.brionah_post_https__skeezersnapcom_create(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const brionah_response_post_EastsidehoodbabyskeezersSlice = createSlice({
  name: "brionah_response_post_Eastsidehoodbabyskeezers",
  initialState,
  reducers: {},
  extraReducers: {
    [brionah_post_https__skeezersnapcom_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [brionah_post_https__skeezersnapcom_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [brionah_post_https__skeezersnapcom_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  brionah_post_https__skeezersnapcom_create,
  slice: brionah_response_post_EastsidehoodbabyskeezersSlice
}
