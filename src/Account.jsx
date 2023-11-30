import { useSelector } from "react-redux"

function Account() {
    let rootData = useSelector(
        (state) => state
    )
    return(
        <div className="container mt-4">
            <h2 className="text-primary">Account Details</h2>

            <table className="table table-bordered w-50">
                <thead>
                    <tr>
                        <th>Balance</th>
                        <th>User Name</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{rootData.account.balance}</td>
                        <td>{rootData.account.fullName}</td>
                        <td>{rootData.account.mobile}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Account