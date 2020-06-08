import axios from 'axios'

const baseUrl = '/api'

export const getAllFilms = () => {
  return axios.get(`${baseUrl}/films`)
}