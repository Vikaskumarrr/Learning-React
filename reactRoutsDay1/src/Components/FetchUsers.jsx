import { Result } from "antd";
import { useState } from "react";

const FetchUsers = () => {

    const [data, setData] = useState(null);
    const fetchUser = async () => {
        try {
            const response = await fetch('https://reqres.in/api/users');
           const  result = await response.json();
            setData(result.data);
            console.log(result);
        } catch (error) {

        }
    }


    return <div>

        <div>
            <h1>Blue Whale </h1>
            <button className="btn" onClick={fetchUser}>Get User List</button>
        </div>

        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody>
                {
                    data ?  (data.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <img src={user.avatar} alt="avatar" />
                                </td>
                            </tr>
                        );
                    })
                ) : (
                    <tr>
                        <td colSpan="4">No Data Found</td>
                    </tr>
                    )
                }
            </tbody>

        </table>
    </div>
}


export default FetchUsers;