import React from 'react'
import "./Blog.css"
function Blog() {
    return (
        <div className='blog' id='blog'>
            <div className="blog_txt">
                <h1>Latest News</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
            </div>
            <div className="main">

                <div className="main_cardd img1">
                    <div className='img2_txt'>
                        <h4>Development</h4><br></br>
                        <h3>Getting tickets to the big shows</h3>
                        <button>VIEW DETAILS</button>
                    </div>
                </div>

                <div className="main_cardd img2">
                    <div className='img2_txt'>
                        <h4>Management</h4><br></br><br></br>
                        <h3>A big ticket gone to be an interesting</h3>
                        <button>VIEW DETAILS</button>
                    </div>
                </div>
                <div className="main_cardd img3">
                    <div className='img2_txt'>
                        <h4>Design</h4><br></br><br></br>
                        <h3>The Home of the Future Could Bebes</h3>
                        <button>VIEW DETAILS</button>
                    </div>
                </div>
            </div>

            <div className='blog_end'></div>
        </div>
    )
}

export default Blog
