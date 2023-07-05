import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/',
})

export const USER_AND_REPO_NAME =
  'rocketseat-education/reactjs-github-blog-challenge'

export const REPO_ISSUES_URL = `repos/${USER_AND_REPO_NAME}/issues`

export const SEARCH_ISSUES_URL = 'https://api.github.com/search/issues'
