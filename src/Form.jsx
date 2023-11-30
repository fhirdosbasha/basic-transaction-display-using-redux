import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTransaction, deposit, reset, updateMobile, updateName, withdraw } from "./actions"

function Form() {
    let [amount, setAmount] = useState('')
    let [fullName, setFullName] = useState('')
    let [mobile, setMobile] = useState('')
    let [amountError, setAmountError] = useState(false)
    let [nameError, setNameError] = useState(false)
    let [mobileError, setMobileError] = useState(false)
    let [mobileSizeError, setMobileSizeError] = useState(false)
    let [transactionId, updateTransactionId] = useState(1)
    const dispatch = useDispatch()

    return(
        <div className="container mt-4">
            <h2 className="text-primary">Form</h2>
            
            <div className="row mt-1">
                <div className="col-4">
                    <input type="number" value={amount} className="form-control"
                     placeholder="Enter amount" onChange={
                        (e) => setAmount(e.target.value)
                     }/>
                     {
                        amountError && <p className="text-danger">Amount cannot be empty</p>
                     }
                </div>
                
                <button className="btn btn-primary col-1 mx-2" onClick={
                    () => {
                        if(amount.trim() === ''){
                            setAmountError(true)
                        }
                        else if(amount.trim()){
                            setAmountError(false)
                            dispatch(deposit(amount))
                            updateTransactionId(transactionId + 1)
                            dispatch(addTransaction(transactionId, 'Credit', amount))
                            setAmount('')
                        }
                    }
                }>Deposit</button>
                <button className="btn btn-danger col-1 mx-2" onClick={
                    () => {
                        if(amount.trim() === ''){
                            setAmountError(true)
                        }
                        else if(amount.trim()){
                            setAmountError(false)
                            dispatch(withdraw(amount))
                            updateTransactionId(transactionId + 1)
                            dispatch(addTransaction(transactionId, 'Debit', amount))
                            setAmount('')
                        }
                    }
                }>Withdraw</button>
            </div>

            <div className="row mt-2">
                <div className="col-4">
                    <input type="text" value={fullName} className="form-control" 
                     placeholder="Enter full name" onChange={
                        (e) => setFullName(e.target.value)
                     }/>
                     {
                        nameError && <p className="text-danger">Name cannot be empty</p>
                     }
                </div>
                <button className="btn btn-primary col-1 mx-2" onClick={
                    () => {
                        if(fullName.trim() === '') {
                            setNameError(true)
                        }
                        else if(fullName.trim()) {
                            setNameError(false)
                            dispatch(updateName(fullName))
                            setFullName('')
                        }
                    }
                }>Update</button>
            </div>

            <div className="row mt-2">
                <div className="col-4">
                    <input type="text" value={mobile} className="form-control" 
                     placeholder="Enter mobile number" onChange={
                        (e) => setMobile(e.target.value)
                     }/>
                     {
                        mobileError && <p className="text-danger">Mobile number cannot be empty</p>
                     }
                     {
                        mobileSizeError && <p className="text-danger">Mobile number should be 10 digits only</p>
                    }
                </div>
                <button className="btn btn-primary col-1 mx-2" onClick={
                    () => {
                        if(mobile.trim() === '') {
                            setMobileError(true)
                            setMobileSizeError(false)
                        }
                        else if(mobile.trim().length < 10 || mobile.trim().length > 10){
                            setMobileError(false)
                            setMobileSizeError(true)
                        }
                        else if(mobile.trim()){
                            setMobileError(false)
                            setMobileSizeError(false)
                            dispatch(updateMobile(mobile))
                            setMobile('')
                        }
                    }
                }>Update</button>
            </div>

            <button className="btn btn-danger mt-2 col-1" onClick={
                () => {
                    setAmountError(false)
                    setNameError(false)
                    setMobileError(false)
                    setMobileSizeError(false)
                    dispatch(reset())
                    dispatch(reset())
                }
            }>Reset</button>
        </div>
    )
}

export default Form