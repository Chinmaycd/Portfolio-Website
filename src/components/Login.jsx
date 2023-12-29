import React, { useEffect, useState } from 'react'
import "./Login.css"
// import Signup from './Signup';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye'
import { Icon } from 'react-icons-kit';
function Login() {
    const navigate = useNavigate()
    // let Login = true
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [arr, setArr] = useState("")

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

        e.preventDefault()
        let result = true
        let obj = {
            email: email,
            password: password
        }
        if (email.length === 0) {
            document.getElementById('email').innerHTML = "Email cannot be empty"
            result = false
        }
        else if (email.toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            document.getElementById('email').innerHTML = ""
        }
        else {
            document.getElementById('email').innerHTML = 'invalid email'
            result = false
        }

        if (password.length === 0) {
            document.getElementById('password').innerHTML = 'password cannot be empty'
            result = false
        }
        else if (password.length < 4) {
            document.getElementById('password').innerHTML = 'password length too short'
            result = false
        }
        else {
            document.getElementById('password').innerHTML = ''
        }


        let storedFormData = JSON.parse(localStorage.getItem('obj'))
        // console.log(storedFormData);
        // console.log(arr)
        // for (var i in storedFormData) {
        //     // console.log(storedFormData);
        //     // console.log(arr);
        //     // console.log(storedFormData[i].email);
        //     // console.log(arr[0]['email']);
        //     for (var j in arr) {
        //         // console.log(storedFormData[i].email);
        //         // console.log(arr[0]['email']);
        //         if (arr[0]['email'] === storedFormData[i].email && arr[0]['password'] === storedFormData[i].password) {
        //             alert('login')


        //         }
        //         else {
        //             alert('Login failed')
        //             break
        //         }
        //     }
        // }
        // for (var i = 0; i < storedFormData.length; i++) {
        //     for (var j = 0; j < arr.length; j++) {
        //         if (arr[0]['email'] === storedFormData[i].email && arr[0]['password'] === storedFormData[i].password) {
        //             alert('login')
        //             navigate("/main")
        //         }
        //         else {
        //             alert('Login failed')
        //         }
        //     }
        // }
        let data_check = storedFormData.filter((data, j) => {
            return data.email === obj.email && data.password === obj.password
        })
        console.log(data_check)
        if (data_check.length === 0) {
            alert('Login failed')
        }
        else {
            alert("login success")
            navigate("/main")
            localStorage.setItem('loggedin', true)
        }
        setEmail('')
        setPassword('')

    }
    return (
        <div>
            <section>
                <div className="form-box">
                    <div className="form-value">
                        <form onSubmit={Validate}>
                            <h2>Login</h2>
                            <div className="inputbox"> <ion-icon name="mail-outline"></ion-icon> <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                <label>Email</label>
                                <p id='email'></p>
                            </div>
                            <div className="inputbox"> <ion-icon className="lock-closed-outline"></ion-icon> <input
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
                            <div className="forget"> <label><input type="checkbox" />Remember Me</label> <a href="#">Forgot
                                Password</a> </div> <button className='btn' >Log In</button>
                            <div className="register">
                                <p>Don't have an account?   </p>
                                <button className='btn2' ><Link className='btn2_link' to="/signup" >Signup</Link>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
