import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './home.css'

function GetUser(props) {

    const [user, setuser] = useState({})

    useEffect(() => {
        let id = props.match.params.user
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
            setuser(res.data)
        })
    }, [])

    const User = user.id < 10 || user.id > 0 ? <>
        <p><span>Name :</span> {user.name}</p>
        <p><span>Email :</span> {user.email}</p>
        <p><span>Username :</span> {user.username}</p>
        <p><span>Phone :</span> {user.phone}</p>
        <p><span>Website  </span>: {user.website}</p>
    </>
        : <p>Nothing To Show</p>

    return <>
        <div className="wrapper">

            <div className="container">
                {User}
            </div>
        </div>
    </>

}

export default GetUser
