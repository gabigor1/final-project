import axios from 'axios'

const baseUrl = '/api'

export const getAllFilms = () => {
  return axios.get(`${baseUrl}/films`)
}

export const getSingleFilm = id => {
  return axios.get(`${baseUrl}/films/${id}`)
}