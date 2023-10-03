import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'

const ViewUser = () => {
    const [userData, setData] = useState(
        { "users": [] }
    )

    const [isLoading, setIsLoading] = useState(true)

    const getData = () => {
        axios.get("https://dummyjson.com/users").then(
            (Response) => {
                setData(Response.data)
                setIsLoading(false)
            }
        )
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <h1>View User</h1>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">First Name</th>
                                            <th scope="col">Maiden Name</th>
                                            <th scope="col">Last Name</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Birth Date</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Blood Group</th>
                                        </tr>
                                    </thead>
                                    {isLoading ? <div class="spinner-border" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div> : <tbody>
                                        {userData.users.map(
                                            (value, index) => {
                                                return <tr>
                                                    <th scope="row">{value.id}</th>
                                                    <td>{value.firstName}</td>
                                                    <td>{value.maidenName}</td>
                                                    <td>{value.lastName}</td>
                                                    <td>{value.age}</td>
                                                    <td>{value.gender}</td>
                                                    <td>{value.email}</td>
                                                    <td>{value.address.address}, {value.address.city}, {value.address.state}, {value.address.postalCode}</td>
                                                    <td>{value.birthDate}</td>
                                                    <td>{value.phone}</td>
                                                    <td>{value.bloodGroup}</td>
                                                </tr>
                                            }

                                        )}

                                    </tbody>}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewUser