export function deposit(amount){
    return {type: 'DEPOSIT', payload: {balance: amount}}
}

export function withdraw(amount){
    return {type: 'WITHDRAW', payload: {balance: amount}}
}

export function updateName(name){
    return {type: 'UPDATE_NAME', payload: {fullName: name}}
}

export function updateMobile(mobile){
    return {type: 'UPDATE_MOBILE', payload: {mobile: mobile}}
}

export function reset() {
    return {type: 'RESET'}
}

export function addTransaction(id, type, amount){
    return {type: 'ADD_TRANSACTION', payload: {id: id, type:type, amount: amount, date: new Date()}}
}