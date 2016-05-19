import { CREATE_GOAL } from 'types'

export function createGoal(goal){
  console.log('ACTION: ', goals)
  return {
    type: CREATE_GOAL,
    payload: goal
  }
}
