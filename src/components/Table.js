import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import './Table.css'
export default function Table() {

    let navigate = useNavigate();

    const [passportsList, setPassportsList] = useState([])

    const [filteredPassports, setFilteredPassports] = useState([])
    const [searchValue, setSearchValue] = useState('');
    let counter = 1;

    useEffect(() => {
        fetchData();
    }, [])

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



    const fetchData = async () => {
        await axios.get(
            'http://127.0.0.1:5000/api/admin/passports/',
            {
                headers: {
                    "access-token": localStorage.getItem('token')
                }
            }).then(data => {

                setPassportsList(data.data);

            })
    }


    const handleChange = event => {
        setSearchValue(event.target.value);
    };


    const handleAll = () => {
        fetchData()
    }

    const handleWhiteList = async () => {

        await axios.get(
            'http://127.0.0.1:5000/api/admin/passports/',
            {
                headers: {
                    "access-token": localStorage.getItem('token')
                }
            }).then(data => {

                const res_data = data.data;
                const whiteList = res_data.filter(passport => passport.Status === true)

                setPassportsList(whiteList);

            })

    }


    const handleBlackList = async () => {

        await axios.get(
            'http://127.0.0.1:5000/api/admin/passports/',
            {
                headers: {
                    "access-token": localStorage.getItem('token')
                }
            }).then(data => {

                const res_data = data.data;
                const blackList = res_data.filter(passport => passport.Status === false)

                setPassportsList(blackList);

            })
    }

    useEffect(() => {
        const copyPassports = [...passportsList];
        const result = copyPassports.filter(passport =>
            passport.Name.toLowerCase().includes(searchValue.toLowerCase()) || passport.Sex.toLowerCase().includes(searchValue.toLowerCase()) || passport.Nationality.toLowerCase().includes(searchValue.toLowerCase()) || passport.Number.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredPassports(result);
    }, [passportsList, searchValue])



    const handleProblem = (passProblem) => {

        if (passProblem === '0') {
            return ''
        } else if (passProblem === '1') {
            return "Invalid date of birth"
        } else if (passProblem === '2') {
            return "Passport has Expired"
        } else if (passProblem === '3') {
            return "Invalid date of birth and Passport has Expired"
        } else if (passProblem === '4') {
            return "Invalid passport number"
        } else if (passProblem === '6') {
            return "Passport has Expired and Invalid passport number"
        } else {
            return "Passport has Expired, Invalid passport number and Invalid passport number"
        }

    }


    const handleDelete = (e) => {
        let idd = e.target.id;
        console.log(idd)
        axios.delete(
            `http://127.0.0.1:5000/api/admin/passports/${idd}`,

            {
                headers: {
                    "access-token": localStorage.getItem('token')
                }
            }).then(
                // window.location.reload()
            )


    }

    return (
        <div className='mx-auto my-3 container'>
            <h2 className=' text-center'>Welcome in pd admin panel.</h2>
            <div className="input-group my-2">
                <span className='input-group-text'>
                    <i className="fas fa-search text-primary"></i>
                </span>

                <input type="search" placeholder="Search for any passport name, gender or country" value={searchValue} onChange={handleChange} className="form-control" aria-label="" aria-describedby="basic-addon1" />



                <button className="btn btn-secondary " type="button" onClick={handleAll}>All</button>


                <button className="btn btn-primary" type="button" onClick={handleWhiteList}>White List</button>


                <button className="btn btn-danger" type="button" onClick={handleBlackList}>Black List</button>


            </div>
            <table className="table table-light table-hover mx-auto container"> {/* table-light table-hover */}
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Sex</th>
                        <th scope="col">Nationality</th>
                        <th scope="col">Date Of Birth</th>
                        <th scope="col">Expiration Date</th>
                        <th scope="col">Number</th>
                        <th scope="col">Valid</th>
                        <th scope="col">Problem</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        searchValue === '' ? (
                            passportsList.map(passport => (
                                <tr key={passport.id}>
                                    <th scope="row">{counter++}</th>
                                    <td>{passport.Name + ' ' + passport.Surname}</td>
                                    <td>{passport.Sex}</td> {/* === 'M' ? 'Male' : 'Female' */}
                                    <td>{passport.Nationality}</td>
                                    <td>{passport.DateOfBirth}</td>
                                    <td>{passport.ExpirationDate}</td>
                                    <td>{passport.Number}</td>
                                    <td>{passport.Status ? <i className="fas fa-check-circle text-success"></i> : <i className="fas fa-times-circle text-danger"></i>}</td>
                                    <td>
                                        {
                                            handleProblem(passport.Problem)
                                        }
                                    </td>
                                    <td><button className='btn' id={passport.id} onClick={handleDelete}><i className="fas fa-trash-alt text-danger"></i></button></td>
                                </tr>

                            ))) : (
                            filteredPassports.map(passport => (
                                <tr key={passport.id}>
                                    <th scope="row">{counter++}</th>
                                    <td>{passport.Name + ' ' + passport.Surname}</td>
                                    <td>{passport.Sex}</td> {/* === 'M' ? 'Male' : 'Female' */}
                                    <td>{passport.Nationality}</td>
                                    <td>{passport.DateOfBirth}</td>
                                    <td>{passport.ExpirationDate}</td>
                                    <td>{passport.Number}</td>
                                    <td>{passport.Status ? <i className="fas fa-check-circle text-success"></i> : <i className="fas fa-times-circle text-danger"></i>}</td>
                                    <td>
                                        {
                                            handleProblem(passport.Problem)
                                        }
                                    </td>
                                    <td><button className='btn' id={passport.id} onClick={handleDelete}><i className="fas fa-trash-alt text-danger"></i></button></td>
                                </tr>

                            ))
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
