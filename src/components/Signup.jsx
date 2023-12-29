// import React, { useEffect } from 'react'
import "./Signup.css"
import { useState } from 'react';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import { Link } from 'react-router-dom';

function Signup() {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [arr, setArr] = useState([])
    const [activedata, setActiveData] = useState([])
    //eye - show/hide password
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }
    function Validate(e) {
        let obj = {
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            cpassword: cpassword

        }
        // console.log(obj)
        let result = true
        e.preventDefault();

        // first name
        if (fname.length === 0) {
            document.getElementById('fname').innerHTML = "First Name cannot be empty"
            result = false
        }
        else {
            document.getElementById('fname').innerHTML = ""
        }
        // last name
        if (lname.length === 0) {
            document.getElementById('lname').innerHTML = "Last Name cannot be empty"
            result = false
        }
        else {
            document.getElementById('lname').innerHTML = ""
        }

        // email
        if (email.length === 0) {
            document.getElementById('email').innerHTML = "Email field cannot be empty"
            result = false
        }
        else if (email.toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            document.getElementById('email').innerHTML = ""
        }
        else {
            document.getElementById('email').innerHTML = "Invaid Email"
            result = false
        }

        // password
        if (password.length < 4 && password.length > 0) {
            document.getElementById('password').innerHTML = "password length too short"
            result = false
        }
        else if (password.length === 0) {
            document.getElementById('password').innerHTML = "password cannot be empty"
            result = false
        }
        else {
            document.getElementById('password').innerHTML = ""
        }
        // confirm password
        if (cpassword !== password) {
            document.getElementById('cpassword').innerHTML = "password did not match"
            result = false
        }
        else {
            document.getElementById('cpassword').innerHTML = ""
        }

        if (result) {
            setArr([...arr, obj])
            // console.log(arr);
            saveFormData(obj)
            alert('Signup success')
        }
        setFname('')
        setLname('')
        setEmail('')
        setPassword('')
        setCpassword('')
    }
    // local storage start
    function saveFormData(obj) {
        //getting empty array
        let storedFormData = JSON.parse(localStorage.getItem('obj')) || [];

        //storing data of obj in localstorage
        localStorage.setItem('obj', JSON.stringify([...storedFormData, obj]))

        //getting stored data in localstorage in storedFormData
        storedFormData = JSON.parse(localStorage.getItem('obj')) || [];

        // updating activedata which is used for table
        setActiveData(storedFormData);
        // console.log(storedFormData)
    }
    return (
        <div>
            <section>
                <div className="Signup-box">
                    <div className="form-value">
                        <form onSubmit={Validate}>
                            <h2>Signup</h2>
                            <div className="signup_inputbox"> <ion-icon className="mail-outline"></ion-icon> <input type="text"
                                onChange={(e) => setFname(e.target.value)} value={fname} />
                                <label>First Name</label>
                                <p id='fname'></p>
                            </div>
                            <div className="signup_inputbox"> <ion-icon className="mail-outline"></ion-icon> <input type="text"
                                onChange={(e) => setLname(e.target.value)} value={lname} />
                                <label>Last Name</label>
                                <p id='lname'></p>
                            </div>
                            <div className="signup_inputbox"> <ion-icon className="mail-outline"></ion-icon> <input type="email"
                                onChange={(e) => setEmail(e.target.value)} value={email} />
                                <label>Email</label>
                                <p id='email'></p>
                            </div>
                            <div className="signup_inputbox"> <ion-icon className="lock-closed-outline"></ion-icon> <input
                                type={type}
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                            />
                                <span>
                                    <Icon onClick={handleToggle} className="eye" icon={icon} size={20} />
                                </span>


                                <label>Password</label>

                                <p id='password'></p>
                            </div>
                            <div className="signup_inputbox"> <ion-icon className="lock-closed-outline"></ion-icon> <input type="password"
                                onChange={(e) => setCpassword(e.target.value)}
                                value={cpassword}
                            /> <label>Confirm Password</label>
                                <p id='cpassword'></p> </div>
                            {/* <div className="forget"> <label><input type="checkbox" />Remember Me</label> <a href="#">Forgot
                                Password</a> </div> */}
                            <button className='btn'>Signup</button><br></br><br></br>
                            <button className='btn'><Link className='btn_link' to='/login'>Login</Link></button>

                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Signup
