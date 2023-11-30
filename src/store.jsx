import { combineReducers, createStore } from "redux"

const initialState = {
    balance: 0,
    fullName: '',
    mobile: null
}

function accountReducer(state = initialState, action){
    switch(action.type){
        case 'DEPOSIT':
            return {
                ...state, balance: state.balance + +action.payload.balance
            }
        case 'WITHDRAW':
            return {
                ...state, balance: state.balance - +action.payload.balance
            }
        case 'UPDATE_NAME':
            return {
                ...state, fullName: action.payload.fullName
            }
        case 'UPDATE_MOBILE':
            return {
                ...state, mobile: action.payload.mobile
            }
        case 'RESET': 
            return initialState
        default:
            return state
    }
}

function transactionReducer(state=[], action){
    switch(action.type){
        case 'ADD_TRANSACTION':
            return [...state, {
                id: action.payload.id, 
                amount: action.payload.amount,
                type: action.payload.type,
                date: action.payload.date
            }]
        case 'RESET':
            return []
        default:
            return state
    }
}

const rootReducer = combineReducers({
    account: accountReducer,
    transaction: transactionReducer
})

let store = createStore(rootReducer)

export default store