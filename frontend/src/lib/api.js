import axios from 'axios'
import { getToken } from './auth'
const baseUrl = '/api'

const withHeaders = () => {
  return {
    headers: { Authorization: `Bearer ${getToken()}` }
  }
}

// ! ------ Getting the films

export const getAllFilms = () => {
  return axios.get(`${baseUrl}/films`)
}

export const getSingleFilm = id => {
  return axios.get(`${baseUrl}/films/${id}`)
}

// ? ------ Creating and deleting films

export const postFilm = formData => {
  return axios.post(`${baseUrl}/films/`, formData, withHeaders())
}

export const deleteFilm = id => {
  return axios.delete(`${baseUrl}/films/${id}`, withHeaders())
}

export const loginUser = formData => {
  return axios.post(`${baseUrl}/login/`, formData)
}

export const registerUser = formData => {
  console.log(formData)
  return axios.post(`${baseUrl}/register/`, formData)
}

// ! Creating a review 

export const postReview = formData => {
  console.log(formData)
  return axios.post(`${baseUrl}/reviews/`, formData, withHeaders())
}

export const deleteReview = id => {
  return axios.delete(`${baseUrl}/reviews/${id}`, withHeaders())
}