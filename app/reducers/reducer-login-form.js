export default function (state = [], action) {
    console.log(state)
    console.log('REDUCER', action.type)
    switch (action.type) {
        case 'USER':
            console.log('payload',action.payload)
            return action.payload
    }
    return state;
}
