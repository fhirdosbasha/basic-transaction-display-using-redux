import { useSelector } from "react-redux"

function Transaction() {
    let rootData = useSelector(
        (state) => state
    )
    return(
        <div className="container mt-4">
            <h2 className="text-primary">Transaction Details</h2>
            
            <div>
                {
                    (rootData.transaction.length == 0) ? (
                        <h3 className="text-secondary">No Transactions yet</h3>
                    ) : (
                        <table className="table table-bordered w-50">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Amount</th>
                                    <th>Transaction Type</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    rootData.transaction.map(
                                        (trans) => <tr key={trans.id}>
                                            <td>{trans.id}</td>
                                            <td>{trans.amount}</td>
                                            <td>{trans.type}</td>
                                            <td>{trans.date.toString()}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
        </div>
    )
}

export default Transaction