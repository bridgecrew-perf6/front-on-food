import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.imersaofx.danieldcs.com/",
  headers: {
    Authorization: "Bearer[bGlwZV9yc2lsdmFAaG90bWFpbC5jb20=]",
  }
})