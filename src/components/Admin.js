import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import Table from './Table';

export default function Admin() {

    let navigate = useNavigate();

    useEffect(() => {

        if (localStorage.getItem('token')) {

            const token = localStorage.getItem('token')
            const decoded = jwtDecode(token)

            const exp_date = new Date(decoded.exp * 1000);
            const now_date = new Date();

            console.log(decoded.exp)

            if (!decoded.role) {
                localStorage.clear()
                navigate('/login')
            } else {
                if (exp_date < now_date) {
                    localStorage.clear()
                    navigate('/login')
                }
            }

        }
    }, [navigate])

    return (
        <div className=''>
            <Table />
        </div>
    )
}
