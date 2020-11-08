import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './home.css'
import { Link } from 'react-router-dom'
import settings from '../settings.svg'

function Home() {

    const [Users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res =>
                setUsers(res.data)
            )
            .catch(err => console.log(err))
    }, [])

    const allUsers = Users.length > 0 ? Users.map(user =>
        <div key={user.id} className="container">
            <Link to={`/${user.id}`}>
                <h2>Name : {user.name}</h2>
            </Link>
            <p><span>Email :</span> {user.email}</p>
            <p><span>Website :</span> {user.website}</p>
            <p><span>Company :</span> {user.company.name}</p>
            <img src={settings} alt="setting"/>
        </div>
    ) : <p>Nothing to show</p>


    return (
        <div>
            <div className="wrapper">
                <h1>Home</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quis nostrum possimus omnis perspiciatis fuga, iste similique quasi repellendus, quae repudiandae nesciunt  Accusantium.</p>

                {allUsers}
            </div>
        </div>
    )
}

export default Home
