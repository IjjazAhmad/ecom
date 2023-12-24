import React from 'react'

export default function SecNav({ name }) {
    return (
        <div className="secNav">
            <div className="nav">
                <div className="menue  bg-body-tertiary w-100">
                    <div className="container">
                        <div className="row">
                            <div className="col ">
                                <p className='fs-4 text-center'>HOME / {name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
