import React, { useState } from 'react'
import "./About.css"

function About() {
    const [toggle, setToggle] = useState(1);
    function updateToggle(id) {
        setToggle(id)
    }

    return (
        <div className='about' id='about'>
            <div className="container">
                <div className="img_container">

                </div>
                <div className="txt_container">
                    <div className="txt_container_inner">
                        <h1>ABOUT ME</h1>
                        <p></p><br></br>
                        <ul className='txt_menu'>
                            <li onClick={() => updateToggle(1)}>Main Skills</li>
                            <li onClick={() => updateToggle(2)}>Awards</li>
                            <li onClick={() => updateToggle(3)}>Experience</li>
                            <li onClick={() => updateToggle(4)}>Education & Certification</li>
                        </ul>
                        <div className={toggle === 1 ? "show-content" : "txt_menu_content"}>
                            <p>
                                User experience design - UI/UX<br></br>
                                Delight the user and make it work.
                            </p>
                            <p>
                                Web and user interface design - DEvelopment<br></br>
                                Websites, web experiences, ...
                            </p>
                            <p> Interaction design - Animation<br></br>
                                I like to move it move it.
                            </p>
                        </div>
                        <div className={toggle === 2 ? "show-content" : "txt_menu_content"}>
                            <p>Awwwards.com- Winner<br></br>
                                2019-2020
                            </p>
                            <p>
                                CSS Design Awards - Winner<br></br>
                                2017 - 2018
                            </p>
                        </div>
                        <div className={toggle === 3 ? "show-content" : "txt_menu_content"}>
                            <p>
                                Sr. Front-end Engineer - Google<br></br>
                                2018 - Current
                            </p>
                            <p>
                                Front-end Engineer - Microsoft<br></br>
                                2017 - 2018
                            </p>
                        </div>
                        <div className={toggle === 4 ? "show-content" : "txt_menu_content"}>
                            <p>
                                BSc In CSE - ABC University, Los Angeles, CA<br></br>
                                2010
                            </p>
                            <p>
                                Diploma in Computer Science - Gamma Technical Institute<br></br>
                                2009
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
