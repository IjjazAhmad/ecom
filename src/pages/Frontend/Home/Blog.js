import React from 'react'
import BlogCard from '../../../components/Card/BlogCard'


export default function Blog() {
    return (
        <>
            <div className="Blog">
                <div className="container">
                    <div className="row">
                        <div className="col text-center d-flex justify-content-center align-items-center my-4">
                            <div className='line' ></div><h3> OUR BLOG!</h3> <div className='line'></div>
                        </div>
                    </div>
                    <BlogCard />
                </div>
            </div>


        </>
    )
}
