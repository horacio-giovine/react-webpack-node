import { SAVE_USER } from 'types'

export function saveUser(user){
  console.log('ACTION', user);
  return {
    type: SAVE_USER,
    payload: user
  }
}