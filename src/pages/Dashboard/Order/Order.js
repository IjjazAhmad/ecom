import React from 'react'
import { DatePicker } from 'antd';
import { images } from '../../../assets/heroSection'
export default function Order() {

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <span className='fs-2 fw-medium'> Order </span><span> 15 Orders Found</span>
                        <DatePicker onChange={onChange} className='float-end btn btn-warning text-white' />
                    </div>
                </div>
                <div className="row">
                    <div className="col ">

                        <ul className="nav  ">
                            <li className="nav-item ">
                                <a className="nav-link" href="#">All Order</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Complete</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Pending</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Cancel</a>
                            </li>
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
                                        <th scope="col">Order ID</th>
                                        <th scope="col">Product Name</th>

                                        <th scope="col">Adress</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>#2344</td>
                                        <td> <img src={images.slider5} alt="loading.." /> Product name </td>
                                        <td>Sufyan Town FSD</td>
                                        <td >12/22/2023</td>
                                        <td>Rs 2345</td>
                                        <td ><span className='text-success '>complete</span></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>#21323</td>
                                        <td> <img src={images.slider2} alt="loading.." /> Product name </td>
                                        <td>Sufyan Town FSD</td>
                                        <td >12/22/2023</td>
                                        <td>Rs 2345</td>
                                        <td ><span className='text-warning '>Pending</span></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>#21323</td>
                                        <td> <img src={images.slider4} alt="loading.." /> Product name </td>
                                        <td>Sufyan Town FSD</td>
                                        <td >12/22/2023</td>
                                        <td>Rs 2345</td>
                                        <td ><span className='text-danger '>Cenceled</span></td>
                                    </tr>


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
