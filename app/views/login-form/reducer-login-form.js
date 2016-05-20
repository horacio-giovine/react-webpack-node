import { SAVE_USER } from 'types'

export default function (state = [], action) {
    console.log(state)
    console.log('REDUCER', action.type)
    switch (action.type) {
        case SAVE_USER:
            console.log('payload',action.payload)
            return action.payload
    }
    return state;
}

