import React, { useEffect, useState } from 'react'
import { DatePicker } from 'antd';
import { images } from '../../../assets/heroSection'
import { fireStore } from '../../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
export default function Users() {
    const [users, setUsers] = useState([])
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    useEffect(() => {
        Getusers()

    }, [])

    const Getusers = async () => {
        const querySnapshot = await getDocs(collection(fireStore, "users"));
        let array = []
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());

            array.push(doc.data())

        });

        setUsers(array)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <span className='fs-2 fw-medium'> User </span><span> {users.length} Users Found</span>
                        <DatePicker onChange={onChange} className='float-end btn btn-warning text-white' />
                    </div>
                </div>
                <div className="row">
                    <div className="col ">

                        <ul className="nav  ">
                            <li className="nav-item ">
                                <span className="nav-link">All Users</span>
                            </li>
                            {/* <li className="nav-item ">
                                <a className="nav-link" href="#">Complete</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Pending</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Cancel</a>
                            </li> */}
                        </ul>
                    </div>
                </div>

                <div className="row my-3 cart">
                    <div className="col">
                        <div className="table-responsive border">
                            <table className="table table-hover align-middle align-middle">
                                <thead className='table-light'>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">UID</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users.map((user, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td>{i+1}</td>
                                                    <td>{user.firstName}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.uid}</td>
                                                    <td >{user.status}</td>
                                                    <td ><span className='text-danger'>Delete</span></td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container paginat ">
                <div className="row">
                    <div className="col">
                        <ul className="pagination modal-4 float-end">
                            <li><a href="#" className="prev">
                                <i className="fa fa-chevron-left"></i>
                                Previous
                            </a>
                            </li>
                            <li><a href="#">1</a></li>
                            <li> <a href="#">2</a></li>
                            <li> <a href="#" className="active">3</a></li>
                            <li> <a href="#">4</a></li>
                            <li><a href="#" className="next"> Next
                                <i className="fa fa-chevron-right"></i>
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
