import { CREATE_GOAL } from 'types'

const image_own_home = require('images/aspiration_finsec_small.png')
const image_retirement = require('images/aspiration_finsec_small.png')
const image_health = require('images/aspiration_health_small.png')
const image_education = require('images/aspiration_edu_small.png')

const defaultState = [
  {
    title: 'Financial Security',
    desc: 'Own Home',
    value: '$250,000',
    progress: '$200,000',
    probability: 0.87,
    bonds: 0.6,
    image: image_own_home
  },
  {
    title: 'Financial Security',
    desc: 'Retirement',
    value: '$550,000',
    progress: '$125,000',
    probability: 0.49,
    bonds: 0.7,
    image: image_retirement
  },
  {
    title: 'Health',
    desc: 'Lose 25 lbs',
    value: '25 lbs',
    progress: '4.3 lbs',
    bonds: 0.7,
    image: image_health
  },
  {
    title: 'Education',
    desc: 'Save for Harvard University',
    value: '$150,000',
    progress: '$85,000',
    bonds: 0.7,
    probability: 0.87,
    image: image_education
  }
]

export default function (state = defaultState, action) {
  switch(action.type){
    case CREATE_GOAL:
      console.log('REDUCER: ', action.type)
      console.log('REDUCER: ', action.payload)
      return [ ...state, action.payload]
  }
  return state
}
